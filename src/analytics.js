import ReactGA from 'react-ga4';

const DISABLED = process.env.REACT_APP_DISABLE_ANALYTICS === 'true';

let initialized = false;
let queuedEvents = [];
let measurementIdStored = null;
let debug = false;
let eventsLog = [];
const MAX_LOG = 200;

function _log(...args) {
  if (debug) console.debug('[analytics]', ...args);
}

export function init(measurementId, options = {}) {
  if (DISABLED) {
    debug = !!(process.env.REACT_APP_GA_DEBUG === 'true');
    _log('analytics disabled via REACT_APP_DISABLE_ANALYTICS');
    return;
  }
  // normalize and validate measurement id early to catch Netlify misconfig
  debug = !!(process.env.REACT_APP_GA_DEBUG === 'true');
  let id = measurementId || process.env.REACT_APP_GA_ID;
  if (id && !/^G-/.test(id)) {
    if (/^[A-Z0-9]{10}$/.test(id)) {
      // common case: value set without leading `G-` — auto-prefix for convenience
      console.warn(
        '[analytics] REACT_APP_GA_ID appears to be missing leading "G-"; auto-prefixing.',
      );
      id = `G-${id}`;
    } else {
      console.warn(
        '[analytics] REACT_APP_GA_ID does not match expected GA4 format (should start with "G-").',
      );
    }
  }
  measurementIdStored = id;
  if (!measurementIdStored) {
    _log('No measurementId provided; analytics disabled.');
    return;
  }

  try {
    ReactGA.initialize(id, options);
    // configure cookie domain for subdomain tracking if provided.
    // Do NOT force cookie_domain on localhost/127.* because that prevents
    // the `_ga` cookie from being written locally.
    const cookieDomainEnv = process.env.REACT_APP_COOKIE_DOMAIN;
    const defaultCookieDomain = '.tyler-allen.com';
    const cookieDomain = cookieDomainEnv || defaultCookieDomain;
    try {
      if (window && window.gtag) {
        const hostname = window.location && window.location.hostname;
        const isLocalhost =
          hostname === 'localhost' || hostname === '127.0.0.1';
        if (isLocalhost && !cookieDomainEnv) {
          // on local dev, call config without cookie_domain so cookies work
          window.gtag('config', id);
          _log('gtag config set (no cookie_domain) for localhost');
        } else {
          window.gtag('config', id, { cookie_domain: cookieDomain });
          _log('gtag config cookie_domain set', cookieDomain);
        }
      }
    } catch (e) {
      _log('gtag cookie_domain set failed', e);
    }
    initialized = true;
    // dev-only analytics exposure removed
    // attempt to read and persist client_id from gtag so we can use it
    // even when cookies aren't visible in document.cookie (local dev or
    // browser privacy settings). store under 'ga_client_id' in localStorage.
    try {
      if (window && window.gtag) {
        try {
          window.gtag('get', id, 'client_id', function(cid) {
            try {
              if (cid) {
                try {
                  localStorage.setItem('ga_client_id', cid);
                } catch (e) {
                  /* ignore localStorage failures */
                }
                _log('gtag client_id', cid);
              }
            } catch (e) {
              _log('store client_id failed', e);
            }
          });
        } catch (e) {
          _log('gtag get client_id failed', e);
        }
      }
    } catch (e) {
      /* swallow */
    }
    _log('initialized', measurementId, options);

    // flush queued events
    queuedEvents.forEach((ev) => {
      if (ev.type === 'pageview') sendPageview(ev.path);
      if (ev.type === 'event') trackEvent(ev.payload);
    });
    queuedEvents = [];

    // attach global error handlers
    window.addEventListener('error', (err) => {
      trackException(
        err.message || 'error',
        err.filename || '',
        err.lineno || 0,
      );
    });
    window.addEventListener('unhandledrejection', (ev) => {
      trackException('unhandledrejection', String(ev.reason));
    });

    // Performance metrics collection disabled to avoid sending extra events.
    // If you want to re-enable, call `sendPerformanceMetrics()` manually.
  } catch (e) {
    _log('init error', e);
  }
}

export function isInitialized() {
  return initialized;
}

export function sendPageview(path) {
  if (DISABLED) return;
  if (!initialized) {
    _log('queue pageview', path);
    queuedEvents.push({ type: 'pageview', path });
    return;
  }
  _log('pageview', path);
  ReactGA.send({ hitType: 'pageview', page: path });
  try {
    if (window && window.gtag) {
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: path,
      });
      _log('gtag page_view sent', window.location.href);
    }
  } catch (e) {
    _log('gtag page_view failed', e);
  }
}

export function trackEvent({ category, action, label, value }) {
  const payload = { category, action, label, value };
  // record to local log for debugging
  eventsLog.push({ t: Date.now(), type: 'event', payload });
  if (eventsLog.length > MAX_LOG) eventsLog.shift();
  if (!initialized) {
    _log('queue event', payload);
    queuedEvents.push({ type: 'event', payload });
    return;
  }
  if (DISABLED) return;
  _log('event', payload);
  try {
    ReactGA.event(payload);
    // Try sending Measurement Protocol backup if configured and label looks like URL or category indicates outbound
    trySendMeasurementProtocol({ category, action, label, value });
  } catch (e) {
    try {
      ReactGA.send({ event: payload });
      trySendMeasurementProtocol({ category, action, label, value });
    } catch (err) {
      _log('event send failed', err);
    }
  }
}

function trySendMeasurementProtocol({ category, action, label, value }) {
  const mpSecret = process.env.REACT_APP_MP_API_SECRET;
  const measurementId = measurementIdStored || process.env.REACT_APP_GA_ID;
  if (!mpSecret || !measurementId) return;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${mpSecret}`;
  const body = {
    client_id: getClientId(),
    events: [
      {
        name: 'custom_event',
        params: { category, action, label, value },
      },
    ],
  };
  const payload = JSON.stringify(body);
  // prefer sendBeacon for reliability
  if (navigator && navigator.sendBeacon) {
    try {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon(url, blob);
      _log('mp sendBeacon', url, body);
      eventsLog.push({ t: Date.now(), type: 'mp', body });
      if (eventsLog.length > MAX_LOG) eventsLog.shift();
      return;
    } catch (e) {
      _log('mp beacon failed', e);
    }
  }
  // fallback to fetch
  fetch(url, {
    method: 'POST',
    body: payload,
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => {
      _log('mp fetch sent');
    })
    .catch((e) => _log('mp fetch error', e));
}

function getClientId() {
  // try to read _ga cookie
  try {
    const match = document.cookie.match(/_ga=GA1\.\d\.(\d+\.\d+)/);
    if (match) return match[1];
  } catch (e) {}
  // fallback to random
  return `${Math.floor(Math.random() * 1e10)}.${Date.now()}`;
}

export function getEventsLog() {
  return eventsLog.slice().reverse();
}

export function trackException(description, file, line) {
  if (DISABLED) return;
  if (!initialized) return;
  _log('exception', description, file, line);
  try {
    ReactGA.exception({ description, fatal: false });
  } catch (e) {
    // ignore
  }
}

export function sendPerformanceMetrics() {
  if (!initialized) return;
  try {
    const perf = window.performance;
    if (!perf) return;
    const timing = perf.timing || {};
    const cls = perf.getEntriesByType
      ? perf.getEntriesByType('layout-shift')
      : [];
    const metrics = {
      domContentLoaded:
        timing.domContentLoadedEventEnd - timing.navigationStart,
      load: timing.loadEventEnd - timing.navigationStart,
      firstPaint:
        (perf.getEntriesByName('first-paint')[0] &&
          perf.getEntriesByName('first-paint')[0].startTime) ||
        0,
      layoutShifts: cls.length,
    };
    trackEvent({
      category: 'Performance',
      action: 'metrics',
      label: JSON.stringify(metrics),
    });
  } catch (e) {
    _log('perf send failed', e);
  }
}

export function enableDebug(enabled = true) {
  debug = enabled;
}

const Analytics = {
  init,
  sendPageview,
  trackEvent,
  isInitialized,
  enableDebug,
  getEventsLog,
};

export default Analytics;
