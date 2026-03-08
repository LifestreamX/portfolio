import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from './analytics';

export default function GAListener() {
  const location = useLocation();
  const sentScrollDepthRef = useRef(new Set());
  const utmCapturedRef = useRef(false);

  useEffect(() => {
    const path = location.pathname + location.search;

    // Capture UTM params on first page load and persist them so redirects
    // or subsequent navigation won't lose campaign attribution.
    try {
      if (!utmCapturedRef.current && location.search) {
        const params = new URLSearchParams(location.search);
        const utm = {};
        [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_term',
          'utm_content',
        ].forEach((k) => {
          if (params.has(k)) utm[k] = params.get(k);
        });
        if (Object.keys(utm).length) {
          try {
            localStorage.setItem('utm_params', JSON.stringify(utm));
          } catch (e) {
            // ignore localStorage failures
          }
          // Intentionally NOT sending a UTM analytics event to avoid
          // exposing campaign details as events.
          utmCapturedRef.current = true;
        }
      }
    } catch (e) {
      // swallow parse errors
    }

    analytics.sendPageview(path);
    // reset per-page scroll depth marks
    sentScrollDepthRef.current = new Set();
  }, [location]);

  useEffect(() => {
    function handleDocumentClick(e) {
      const el =
        e.target.closest && e.target.closest('a, [data-ga-category], button');
      if (!el) return;

      // Outbound link detection
      const anchor = el.tagName === 'A' ? el : el.closest && el.closest('a');
      if (anchor && anchor.href) {
        try {
          const isExternal = anchor.origin !== window.location.origin;
          if (isExternal) {
            analytics.trackEvent({
              category: 'Outbound Link',
              action: 'click',
              label: anchor.href,
            });
            if (!anchor.target || anchor.target !== '_blank') {
              e.preventDefault();
              setTimeout(() => (window.location.href = anchor.href), 150);
            }
            return;
          }
        } catch (err) {
          // ignore
        }
      }

      // Generic data-attribute tracking: add `data-ga-category` and `data-ga-action` to elements
      const gaEl =
        el.closest && el.closest('[data-ga-category]')
          ? el.closest('[data-ga-category]')
          : el;
      if (gaEl && gaEl.dataset && gaEl.dataset.gaCategory) {
        analytics.trackEvent({
          category: gaEl.dataset.gaCategory,
          action: gaEl.dataset.gaAction || 'click',
          label: gaEl.dataset.gaLabel,
        });
      }
    }

    let ticking = false;
    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY + window.innerHeight;
        const height =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        const pct = Math.min(100, Math.round((scrolled / height) * 100));
        const thresholds = [25, 50, 75, 100];
        thresholds.forEach((t) => {
          if (pct >= t && !sentScrollDepthRef.current.has(t)) {
            sentScrollDepthRef.current.add(t);
            // Intentionally not sending scroll depth analytics events.
          }
        });
        ticking = false;
      });
    }

    document.addEventListener('click', handleDocumentClick, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // run once to capture initial scroll depth if page already scrolled
    handleScroll();

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
