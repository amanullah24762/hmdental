'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function ServiceIcon({ arrow = false, sparkle = false }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {arrow ? <path d="M4 12h15m-6-6 6 6-6 6" /> : sparkle ? <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /> : <path d="M12 5C8 2 3 4 4 10c.5 3 2 10 4 10 2 0 1-7 4-7s2 7 4 7c2 0 3.5-7 4-10 1-6-4-8-8-5Zm0 0 3 1" />}
  </svg>;
}

export default function ServiceFlipCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const card = useRef(null);
  useEffect(() => {
    if (expanded && document.activeElement === card.current?.querySelector('.treatment-front')) {
      card.current?.querySelector('.treatment-close')?.focus();
    }
  }, [expanded]);

  return <article ref={card}
    className={`treatment flip-treatment inner-service-flip${expanded ? ' is-expanded' : ''}`}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setExpanded(true); }}
    onPointerLeave={event => { if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) setExpanded(false); }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}
    onKeyDown={event => {
      if (event.key === 'Escape') {
        setExpanded(false);
        event.currentTarget.querySelector('.treatment-front')?.focus();
      }
    }}
  >
    <button type="button" className="treatment-front" tabIndex={expanded ? -1 : 0} aria-hidden={expanded || undefined} aria-expanded={expanded} aria-label={`Explore ${service.title}`} onClick={() => setExpanded(!expanded)}>
      <span className="service-art"><ServiceIcon /><span className="service-art-accent"><ServiceIcon sparkle /></span></span>
      <span className="service-title">{service.title}</span>
      <span className="service-hint">Explore treatment <ServiceIcon arrow /></span>
    </button>
    <div className="treatment-back" hidden={!expanded}>
      <button type="button" className="treatment-close" aria-label={`Close ${service.title} details`} onClick={event => {
        setExpanded(false);
        event.currentTarget.closest('article')?.querySelector('.treatment-front')?.focus();
      }}>×</button>
      <h3>{service.title}</h3>
      <ul>{service.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      <Link className="service-read-more" href={`/services/${service.slug}`}>Read more <span><ServiceIcon arrow /></span></Link>
    </div>
  </article>;
}
