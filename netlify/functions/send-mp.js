// Netlify function: send Measurement Protocol event to GA4
// Expects POST JSON: { destination, utm_source, utm_medium, utm_campaign, page_location, client_id }
// Requires environment vars: MP_MEASUREMENT_ID (e.g. G-XXXX) and MP_API_SECRET

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data = {};
  try {
    data = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  // Basic validation to avoid abuse and extremely large payloads
  if (data.destination && typeof data.destination !== 'string') {
    return { statusCode: 400, body: 'Invalid destination' };
  }
  if (data.destination && data.destination.length > 2048) {
    return { statusCode: 400, body: 'Destination too long' };
  }

  const measurementId =
    process.env.MP_MEASUREMENT_ID || process.env.REACT_APP_GA_ID;
  const apiSecret = process.env.MP_API_SECRET;

  if (!measurementId || !apiSecret) {
    return {
      statusCode: 500,
      body: 'Missing MP_MEASUREMENT_ID or MP_API_SECRET environment variable',
    };
  }

  const client_id = data.client_id || `mp_${Math.floor(Math.random() * 1e12)}`;

  const payload = {
    client_id,
    events: [
      {
        name: 'outbound_click',
        params: {
          destination: data.destination,
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          page_location: data.page_location,
        },
      },
    ],
  };

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
    measurementId,
  )}&api_secret=${encodeURIComponent(apiSecret)}`;

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // GA responds with 204 No Content on success; mirror that to the caller.
    if (resp.status === 204) {
      return { statusCode: 204, body: '' };
    }
    const text = await resp.text();
    return { statusCode: resp.ok ? 200 : 500, body: text || '' };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
