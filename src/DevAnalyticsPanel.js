import React, { useEffect, useState } from 'react';
import analytics from './analytics';

export default function DevAnalyticsPanel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function refresh() {
      setEvents(analytics.getEventsLog());
    }
    refresh();
    const id = setInterval(refresh, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: 12,
        top: 12,
        width: 420,
        maxHeight: '60vh',
        overflow: 'auto',
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        zIndex: 99999,
        padding: 8,
        borderRadius: 6,
        fontSize: 12,
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: 6 }}>
        Analytics Debug (latest first)
      </div>
      {events.length === 0 && <div style={{ opacity: 0.6 }}>no events yet</div>}
      {events.map((ev, i) => (
        <div
          key={i}
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '6px 0',
          }}
        >
          <div style={{ color: '#9bd' }}>
            {new Date(ev.t).toLocaleTimeString()}
          </div>
          <div>{ev.type}</div>
          <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
            {JSON.stringify(ev.payload || ev.body || ev, null, 0)}
          </pre>
        </div>
      ))}
    </div>
  );
}
