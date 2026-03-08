import React from 'react';

const OutboundLink = ({ href, campaign, children, className, ...props }) => {
  // Keep the visible URL clean; do not append UTM query params to the href.
  const target = href;

  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      destination: href,
      utm_source: 'portfolio',
      utm_medium: 'site',
      utm_campaign: campaign,
      page_location: window.location.href,
      client_id: localStorage.getItem('ga_client_id'),
    };
    // If client-side analytics disabled, skip POST and open directly.
    if (process.env.REACT_APP_DISABLE_ANALYTICS === 'true') {
      window.open(href, '_blank');
      return;
    }
    try {
      await fetch('/.netlify/functions/send-mp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      // ignore errors
    } finally {
      window.open(href, '_blank');
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  );
};

export default OutboundLink;
