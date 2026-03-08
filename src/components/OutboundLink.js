import React from 'react';

const OutboundLink = ({ href, campaign, children, className, ...props }) => {
  const target =
    href +
    (href.includes('?') ? '&' : '?') +
    `utm_source=portfolio&utm_medium=site&utm_campaign=${encodeURIComponent(
      campaign,
    )}`;

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
    try {
      await fetch('/.netlify/functions/send-mp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      // ignore errors
    } finally {
      window.open(target, '_blank');
    }
  };

  return (
    <a
      href={target}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default OutboundLink;
