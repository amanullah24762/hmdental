'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { services } from './services';
import BookingAction from './BookingAction';
import { clinic } from './clinic';
export default function SiteHeader() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(null);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    function close(event) { if (!header.current?.contains(event.target)) { setOpen(null); setMobile(false); } }
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  function dropdown(label, entries) {
    return <div className="nav-dropdown" onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) setOpen(label); }} onMouseLeave={event => { if (window.matchMedia('(hover: hover)').matches && !event.currentTarget.contains(document.activeElement)) setOpen(null); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(null); }}>
      <button type="button" className="dropdown-toggle" aria-expanded={open === label} aria-controls={`dropdown-${label}`} onClick={event => {
        const mouseClick = event.detail > 0 && window.matchMedia('(hover: hover)').matches;
        setOpen(current => mouseClick ? label : current === label ? null : label);
      }} onKeyDown={event => {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          setOpen(label);
          const dropdown = event.currentTarget.parentElement;
          requestAnimationFrame(() => dropdown.querySelector('.dropdown-panel a')?.focus());
        }
      }}>{label}<span aria-hidden="true">⌄</span></button>
      <div id={`dropdown-${label}`} className="dropdown-panel" hidden={open !== label}>{entries.map(([title, href]) => <Link key={href} href={href} onClick={() => { setOpen(null); setMobile(false); }}>{title}</Link>)}</div>
    </div>;
  }
  return <header ref={header} className="header site-header" onKeyDown={e => { if (e.key === 'Escape') { const button = e.target.closest('.nav-dropdown')?.querySelector('button'); setOpen(null); if (button) button.focus(); else { setMobile(false); toggle.current?.focus(); } } }}><div className="nav-wrap"><Link className="brand" href="/" aria-label="H&M Dental Care home"><img className="brand-logo" src="/images/hm-dental-logo.jpeg" alt="" width="72" height="48" /><span>H&amp;M Dental Care<span className="brand-sub">PINDI SULTAN PUR</span></span></Link><button ref={toggle} className={`menu-button ${mobile ? 'is-open' : ''}`} aria-label="Toggle navigation" aria-expanded={mobile} aria-controls="site-navigation" onClick={() => setMobile(!mobile)}><span /><span /></button><nav id="site-navigation" className={`site-navigation ${mobile ? 'is-open' : ''}`} aria-label="Main navigation"><Link href="/" onClick={() => setMobile(false)}>Home</Link>{dropdown('Pages', [['About our clinic', '/about'], ['Our dentists', '/#doctors'], ['Free consultation', '/#promotion'], ['Services', '/services'], ['FAQ', '/faq']])}{dropdown('Services', [...services.slice(0, 5).map(s => [s.title, `/services/${s.slug}`]), ['View all services →', '/services']])}<Link href="/#contact" onClick={() => setMobile(false)}>Contact</Link></nav><div className="header-contact-actions"><a href={clinic.telephone}>Call the Clinic</a><BookingAction className="button nav-cta">Book a Visit ↗</BookingAction></div></div></header>;
}
