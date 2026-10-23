'use client';
import SiteFooter from './components/SiteFooter';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SiteHeader from './components/SiteHeader';
import ContactTools from './components/ContactTools';
import { services } from './components/services';
import ClinicTeam, { ConsultationPromotion } from './components/ClinicTeam';
import { clinic } from './components/clinic';
import { requestBooking } from './components/BookingAction';
import ImageFallback from './components/ImageFallback';

const MAP = clinic.mapURL;
const PHONE = clinic.telephone;
const ADDRESS = clinic.address;
const treatments = services.map(service => [service.title, service.text, service.icon]);
const photos = {
  hero: '/images/pakistani-hero.webp',
  room: '/images/pakistani-room.webp',
  care: '/images/pakistani-care.webp',
  visit: '/images/pakistani-visit.webp',
};

function Icon({ name = 'tooth', className = '' }) {
  const paths = {
    tooth: <path d="M12 5C8 2 3 4 4 10c.5 3 2 10 4 10 2 0 1-7 4-7s2 7 4 7c2 0 3.5-7 4-10 1-6-4-8-8-5Zm0 0 3 1" />,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    heart: <path d="m12 20-8-8C-2 5 7 0 12 7c5-7 14-2 8 5Z" />,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M20 2v4m-2-2h4" /></>,
    plus: <><rect x="4" y="4" width="16" height="16" rx="5" /><path d="M12 8v8m-4-4h8" /></>,
    leaf: <><path d="M20 4C6 2 2 9 6 16s16 3 14-12Z" /><path d="m4 21 11-12" /></>,
    chat: <><path d="M20 11a8 8 0 0 1-8 8H5l-3 3V11a9 9 0 0 1 18 0Z" /><path d="M7 10h8m-8 4h5" /></>,
    phone: <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-2 4C10 22 2 14 3 5Z" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.tooth}</svg>;
}

function Brand() {
  return <a className="brand" href="#home" aria-label="H&M Dental Care home"><img className="brand-logo" src="/images/hm-dental-logo.webp" alt="" width="72" height="48" /><span>H&amp;M Dental Care</span></a>;
}

function Photo({ src, alt, className = '', priority = false }) {
  const [failedSource, setFailedSource] = useState(null);
  return <div className={`photo ${className}`}>
    {failedSource === src ? <ImageFallback alt={alt} className="photo-fallback" /> : <Image src={src} alt={alt} width={1600} height={1067} sizes={priority ? '100vw' : '(max-width: 560px) 100vw, (max-width: 800px) 60vw, 600px'} quality={75} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" onError={() => setFailedSource(src)} />}
  </div>;
}

function HeroParticleNetwork() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const hero = canvas?.closest('.hero');
    if (!canvas || !context || !hero) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Keep a lighter network on phones; static rendering respects motion/data preferences.
    const mobileNetwork = window.matchMedia('(pointer: coarse)').matches;
    const saveData = navigator.connection?.saveData === true;
    let width = 0;
    let height = 0;
    let particles = [];
    let frame = 0;
    let lastTime = 0;
    let visible = true;
    let disposed = false;
    const pointer = { x: 0, y: 0, active: false };

    function draw(delta = 0) {
      context.clearRect(0, 0, width, height);
      const now = performance.now();
      particles = particles.filter(particle => !particle.expiresAt || particle.expiresAt > now);
      const distanceLimit = width < 600 ? 150 : width <= 1100 ? 195 : 190;
      for (const particle of particles) {
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        // Re-enter outside the visible frame so the network never hits a wall.
        if (particle.x < -distanceLimit) particle.x = width + distanceLimit;
        if (particle.x > width + distanceLimit) particle.x = -distanceLimit;
        if (particle.y < -distanceLimit) particle.y = height + distanceLimit;
        if (particle.y > height + distanceLimit) particle.y = -distanceLimit;
      }
      context.lineWidth = .7;
      for (let i = 0; i < particles.length; i++) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const squared = dx * dx + dy * dy;
          if (squared >= distanceLimit * distanceLimit) continue;
          const proximity = 1 - Math.sqrt(squared) / distanceLimit;
          context.strokeStyle = `rgba(255,255,255,${proximity * .34})`;
          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.stroke();
        }
        if (pointer.active && !reducedMotion.matches) {
          const distance = Math.hypot(first.x - pointer.x, first.y - pointer.y);
          if (distance < 155) {
            context.strokeStyle = `rgba(255,255,255,${(1 - distance / 155) * .32})`;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }
        context.fillStyle = `rgba(255,255,255,${first.opacity})`;
        context.beginPath();
        context.arc(first.x, first.y, first.radius, 0, Math.PI * 2);
        context.fill();
      }
    }

    function tick(time) {
      frame = 0;
      if (disposed || !visible || document.hidden || reducedMotion.matches || saveData) return;
      if (lastTime && time - lastTime < 1000 / (mobileNetwork ? 20 : 30)) { frame = requestAnimationFrame(tick); return; }
      const delta = lastTime ? Math.min((time - lastTime) / 1000, .05) : 0;
      lastTime = time;
      draw(delta);
      frame = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      if (disposed) return;
      draw();
      if (visible && !document.hidden && !reducedMotion.matches && !saveData) frame = requestAnimationFrame(tick);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const previousWidth = width;
      const previousHeight = height;
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, mobileNetwork ? 1 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const minimumCount = mobileNetwork ? 20 : 24;
      const count = Math.min(mobileNetwork ? 28 : 45, Math.max(minimumCount, Math.round(width * height / 24000)));
      if (previousWidth && previousHeight) {
        for (const particle of particles) {
          particle.x *= width / previousWidth;
          particle.y *= height / previousHeight;
        }
      }
      particles = particles.slice(0, count);
      while (particles.length < count) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 24 + Math.random() * 36;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: .7 + Math.random() * 2.1,
          opacity: .25 + Math.random() * .25,
        });
      }
      syncAnimation();
    }

    function movePointer(event) {
      if (event.pointerType === 'touch' || reducedMotion.matches) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }
    function clearPointer() { pointer.active = false; }
    function addNetwork(event) {
      if (event.target.closest('a, button, input, select, textarea, summary, [role="button"]')) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > width || y > height) return;
      // Every click creates a fresh connected cluster. Older click-created
      // particles retire gradually to keep repeated interactions responsive.
      const expiresAt = performance.now() + 45000;
      for (let index = 0; index < 2; index++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 55;
        const direction = Math.random() * Math.PI * 2;
        const speed = 24 + Math.random() * 36;
        particles.push({
          x: Math.max(0, Math.min(width, x + Math.cos(angle) * spread)),
          y: Math.max(0, Math.min(height, y + Math.sin(angle) * spread)),
          vx: Math.cos(direction) * speed,
          vy: Math.sin(direction) * speed,
          radius: 1 + Math.random() * 2,
          opacity: .25 + Math.random() * .25,
          expiresAt,
        });
      }
      const overflow = particles.length - (mobileNetwork ? 32 : 60);
      if (overflow > 0) {
        let removed = 0;
        particles = particles.filter(particle => {
          if (particle.expiresAt && removed < overflow) { removed++; return false; }
          return true;
        });
      }
      draw();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncAnimation();
    });
    visibilityObserver.observe(hero);
    hero.addEventListener('pointermove', movePointer, { passive: true });
    hero.addEventListener('pointerleave', clearPointer);
    hero.addEventListener('click', addNetwork);
    document.addEventListener('visibilitychange', syncAnimation);
    reducedMotion.addEventListener('change', syncAnimation);
    resize();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      hero.removeEventListener('pointermove', movePointer);
      hero.removeEventListener('pointerleave', clearPointer);
      hero.removeEventListener('click', addNetwork);
      document.removeEventListener('visibilitychange', syncAnimation);
      reducedMotion.removeEventListener('change', syncAnimation);
    };
  }, []);
  return <canvas ref={canvasRef} className="hero-particle-canvas" aria-hidden="true" />;
}

function TreatmentCard({ title, description, icon, onInquire }) {
  const [expanded, setExpanded] = useState(false);
  const card = useRef(null);
  useEffect(() => {
    if (expanded && document.activeElement === card.current?.querySelector('.treatment-front')) {
      card.current?.querySelector('.treatment-close')?.focus();
    }
  }, [expanded]);
  const topics = Object.fromEntries(services.map(service => [service.title, service.items]));
  return <article ref={card} className={`treatment flip-treatment${expanded ? ' is-expanded' : ''}`} onPointerEnter={event => { if (event.pointerType === 'mouse') setExpanded(true); }} onPointerLeave={event => { if (event.pointerType === 'mouse' && !document.querySelector('.booking-dialog[open]') && !event.currentTarget.contains(document.activeElement)) setExpanded(false); }} onBlur={event => { if (!document.querySelector('.booking-dialog[open]') && !event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }} onKeyDown={event => { if (event.key === 'Escape') { setExpanded(false); event.currentTarget.querySelector('.treatment-front')?.focus(); } }}>
    <button type="button" className="treatment-front" tabIndex={expanded ? -1 : 0} aria-hidden={expanded || undefined} aria-expanded={expanded} aria-label={`Explore ${title}`} onClick={() => setExpanded(!expanded)}>
      <Image sizes="(max-width: 380px) 90vw, (max-width: 900px) 45vw, 380px" className="service-card-image" src={services.find(service => service.title === title)?.image} alt={`${title} illustration`} width={800} height={600} loading="lazy" decoding="async" />
      <span className="service-title">{title}</span>
      <span className="service-hint">Explore treatment <Icon name="arrow" /></span>
    </button>
    <div className="treatment-back" hidden={!expanded}>
      <button type="button" className="treatment-close" aria-label={`Close ${title} details`} onClick={() => { setExpanded(false); requestAnimationFrame(() => card.current?.querySelector('.treatment-front')?.focus()); }}>×</button>
      <h3>{title}</h3>
      <ul>{(topics[title] || [description]).map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
      <button type="button" className="service-read-more" onClick={event => onInquire(title, event.currentTarget)}>Read more <span><Icon name="arrow" /></span></button>
    </div>
  </article>;
}

function SmileComparison() {
  const [position, setPosition] = useState(50);
  const [unavailable, setUnavailable] = useState(false);
  return <div className="smile-comparison-block">
    <div className="comparison-heading"><div><p className="eyebrow">Explore the difference</p><h3>A brighter perspective.</h3></div><p>Move the slider to compare the reference images.</p></div>
    {unavailable ? <div className="comparison-unavailable" role="status"><Icon name="spark" /><p>The comparison images are currently unavailable.</p><a href={PHONE} className="text-link">Ask the clinic about smile options <Icon name="arrow" /></a></div> : <div className="smile-comparison" style={{ '--comparison-position': `${position}%` }}>
      <Image width={1600} height={681} sizes="(max-width: 1200px) 100vw, 1180px" className="comparison-image" src="https://alqarndentalconsultants.pk/wp-content/uploads/2021/03/after.jpg" alt="Illustrative teeth-whitening reference, after view" loading="lazy" onError={() => setUnavailable(true)} />
      <div className="comparison-before"><Image width={1600} height={681} sizes="(max-width: 1200px) 100vw, 1180px" className="comparison-image" src="https://alqarndentalconsultants.pk/wp-content/uploads/2021/03/Before.jpg" alt="Illustrative teeth-whitening reference, before view" loading="lazy" onError={() => setUnavailable(true)} /></div>
      <span className="comparison-label comparison-label-before">Before</span><span className="comparison-label comparison-label-after">After</span>
      <div className="comparison-divider" aria-hidden="true"><span>‹ <span>›</span></span></div>
      <input className="comparison-range" type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label="Before and after image comparison" aria-valuetext={`${position}% before image visible`} />
    </div>}
    {/* <p className="comparison-disclaimer">Illustrative reference images from <a href="https://alqarndentalconsultants.pk/" target="_blank" rel="noreferrer">Al-Qaran Dental Consultants</a>, not H&M Dental Care patient results. Individual outcomes vary; discuss suitability with your dentist.</p> */}
  </div>;
}

function CareShowcase() {
  const [selected, setSelected] = useState(0);
  const options = [
    { label: 'Your first visit', title: 'A little reassurance.', accent: 'A whole lot of care.', text: 'Meet your dentist, share your concerns, and make space for every question. Your smile story starts with a conversation.', image: photos.hero, icon: 'chat', tag: 'LET’S GET TO KNOW YOUR SMILE', steps: ['Share your concerns', 'Discuss your options', 'Plan your next step'] },
    { label: 'A brighter smile', title: 'Your smile.', accent: 'Your kind of confidence.', text: 'Curious about the appearance of your smile? Talk with the clinic about your goals and the options that may suit you.', image: photos.care, icon: 'spark', tag: 'EXPLORE THE POSSIBILITIES', steps: ['Tell us your goals', 'Ask about suitability', 'Understand your choices'] },
    { label: 'For the family', title: 'Little smiles.', accent: 'Big moments.', text: 'From a child’s first hello to a parent’s next visit, make dental conversations part of looking after the whole family.', image: photos.room, icon: 'heart', tag: 'EVERY GENERATION IS WELCOME', steps: ['Plan a family visit', 'Talk through concerns', 'Take it one smile at a time'] },
  ];
  const current = options[selected];
  return <section className="care-showcase container" aria-labelledby="showcase-title">
    <div className="showcase-heading"><div><p className="eyebrow"><span className="mini-line" /> A different kind of dental experience</p><h2 id="showcase-title">There’s a person<br />behind <em>every smile.</em></h2></div><p>Find your starting point.<br />We’ll help you start the conversation.</p></div>
    <div className="showcase-tabs" role="group" aria-label="Explore your dental visit">{options.map((option, index) => <button key={option.label} type="button" aria-pressed={selected === index} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)}><Icon name={option.icon} /><span>{option.label}</span><span className="tab-number">0{index + 1}</span></button>)}</div>
    <div className="showcase-stage" key={selected}>
      <div className="showcase-photo"><Photo src={current.image} alt={`Dental care illustration: ${current.label}`} /><span className="showcase-photo-label"><span /> MADE FOR MOMENTS LIKE THESE</span><span className="showcase-photo-number">0{selected + 1}</span></div>
      <div className="showcase-copy"><span className="showcase-symbol"><Icon name={current.icon} /></span><p className="eyebrow">{current.tag}</p><h3>{current.title}<br /><em>{current.accent}</em></h3><p>{current.text}</p><div className="showcase-steps">{current.steps.map((step, index) => <div key={step}><span>0{index + 1}</span>{step}</div>)}</div><a className="button" href={PHONE}>Let’s talk about your visit <Icon name="arrow" /></a><small>Treatment availability and suitability are confirmed by the clinic.</small></div>
    </div>
  </section>;
}

export default function Home() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const nodes = document.querySelectorAll('[data-reveal], .treatment, .steps article, .gallery figure, .trust-item');
    nodes.forEach(node => { node.classList.add('reveal-ready'); observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  function inquire(value = '', opener = document.activeElement) { requestBooking(value, opener); }
  const links = [['Home', 'home'], ['About', 'about'], ['Treatments', 'treatments'], ['Patient Care', 'patient-care'], ['FAQs', 'faq'], ['Contact', 'contact']];
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="topbar"><span>A little care. A lot to smile about.</span><a href={PHONE}>Kharian, Pakistan <span className="top-divider">/</span> {clinic.phone}</a></div>
    <SiteHeader />
    <main id="main">
      <section id="home" className="hero">
        <Photo src="https://alqarndentalconsultants.pk/wp-content/uploads/2021/05/Image-new.jpg" alt="Smiling woman during a dental visit, from the reference website" className="hero-background" priority />
        <HeroParticleNetwork />
        <div className="container hero-inner">
          <div className="hero-copy hero-reference-card">
            <p className="eyebrow">H&M Dental Care · Kharian</p>
            <h1>A little care.<br /><em>A brighter smile.</em></h1>
            <div className="hero-care-columns"><div><span className="hero-care-icon"><Icon name="heart" /></span><h2>For your family</h2><p>A welcoming first step for every generation. Share your questions and plan your next dental visit.</p></div><div><span className="hero-care-icon"><Icon name="chat" /></span><h2>Care starts here</h2><p>Talk about your smile, explore available treatment options, and understand what comes next.</p></div></div>
            <div className="hero-primary-actions"><button className="button" onClick={event => inquire('', event.currentTarget)}>Book an Appointment <Icon name="arrow" /></button><a className="hero-services-link" href="#treatments">Explore our services <span aria-hidden="true">↗</span></a></div>
            <div className="hero-smile-badge"><strong>Smile</strong><span>A little brighter.</span></div>
          </div>
          <div className="hero-visit-strip"><span className="hero-strip-icon"><Icon name="tooth" /></span><p><span>LET’S PLAN YOUR VISIT</span> Your next smile starts with a conversation.</p><a href={PHONE}><Icon name="phone" /> {clinic.phone} <Icon name="arrow" /></a></div>
        </div>
      </section>
      <div className="smile-ribbon" aria-hidden="true"><div>{[0, 1, 2, 3].map(item => <span key={item}>YOUR SMILE, OUR STARTING POINT <span className="ribbon-star">✳</span> CARE FOR EVERY GENERATION <span className="ribbon-star">✳</span> KHARIAN <span className="ribbon-star">✳</span></span>)}</div></div>
      <nav className="container visit-shortcuts" aria-label="Find what you need">
        <a href="#promotion"><span className="shortcut-icon"><Icon name="chat" /></span><span><strong>Free consultation</strong><small>Start with a conversation</small></span><span aria-hidden="true">↗</span></a>
        <a href="#doctors"><span className="shortcut-icon"><Icon name="heart" /></span><span><strong>Meet your dentists</strong><small>Get to know your care team</small></span><span aria-hidden="true">↗</span></a>
        <a href="#contact"><span className="shortcut-icon"><Icon name="pin" /></span><span><strong>Visit our clinic</strong><small>Find us in Kharian</small></span><span aria-hidden="true">↗</span></a>
      </nav>
      <ConsultationPromotion />
      <ClinicTeam />
      <CareShowcase />
      <section className="trust-band" aria-label="Our care concept"><div className="container trust-grid">{[['heart', 'For the whole family', 'Every age. Every kind of smile.'], ['spark', 'A welcoming setting', 'A fresh, thoughtful care concept.'], ['chat', 'Clarity at every step', 'Questions deserve clear answers.'], ['leaf', 'Your comfort matters', 'A little reassurance goes a long way.']].map(([icon, title, text]) => <div className="trust-item" key={title}><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
      <section id="treatments" className="section container" data-reveal><div className="section-heading"><div><p className="eyebrow">Our services</p><h2>A wide range of<br /><em>dental care.</em></h2></div><div className="section-aside"><p>From everyday questions to your next steps, explore a more considered approach to dental care.</p><p className="disclaimer">Contact the clinic to discuss treatment suitability and appointment availability.</p></div></div><div className="treatment-grid">{treatments.slice(0, 6).map(([title, description, icon]) => <TreatmentCard key={title} title={title} description={description} icon={icon} onInquire={inquire} />)}</div><div className="home-services-more"><a className="button" href="/services">View more services <Icon name="arrow" /></a></div></section>
      <section id="about" className="about-section"><div className="container about-grid" data-reveal><div className="about-art"><Photo src={photos.room} alt="Illustration of a Pakistani dentist welcoming a mother and daughter" className="about-photo" /><div className="about-stamp"><Icon name="tooth" /><span>Thoughtful care.<br /><em>Human connection.</em></span></div></div><div className="about-copy"><p className="eyebrow">The heart of the experience</p><h2>A familiar place.<br /><em>A friendly welcome.</em></h2><p className="large-copy">A dental visit should begin with a conversation, not a feeling of uncertainty.</p><p>Explore dental care for your family in Kharian. Contact the clinic to discuss your concerns, ask about treatment options, and plan your next visit.</p><div className="about-points"><span><Icon name="heart" /> A thoughtful welcome for adults and children</span><span><Icon name="chat" /> Clear conversations about your dental needs</span></div><a className="text-link" href="#patient-care">Discover the patient experience <span>↗</span></a></div></div></section>
      <section id="patient-care" className="patient-journey">
        <div className="container patient-journey-grid">
          <div className="patient-journey-copy" data-reveal><p className="eyebrow section-pill">Your care, step by step</p><h2>Let’s take care of<br /><em>your dental concerns.</em></h2><ol className="journey-list"><li><span>01</span><p>Explore the dental care categories and choose what you’d like to discuss.</p></li><li><span>02</span><p>Call the clinic to ask your questions and arrange a suitable appointment.</p></li><li><span>03</span><p>Meet your dentist, discuss an assessment, and understand your next steps.</p></li></ol><button className="button journey-cta" onClick={event => inquire('', event.currentTarget)}>Arrange your visit <Icon name="arrow" /></button></div>
          <div className="patient-journey-art" data-reveal><span className="journey-ring journey-ring-one" aria-hidden="true" /><span className="journey-ring journey-ring-two" aria-hidden="true" /><Photo src={photos.care} alt="Illustration of a Pakistani dentist discussing care with a patient" className="journey-portrait" /><div className="journey-photo-note"><Icon name="heart" /><span>Good conversations.<br /><strong>Confident next steps.</strong></span></div></div>
        </div>
      </section>
      <section className="care-sequence" aria-labelledby="sequence-heading"><div className="container">
        <div className="sequence-heading" data-reveal><p className="eyebrow section-pill">The sequence</p><h2 id="sequence-heading">Your journey to a healthier smile.</h2><span className="sequence-heading-mark" aria-hidden="true"><Icon name="tooth" /></span></div>
        <div className="sequence-grid">{[
          ['Initial consultation', 'Share your concerns and dental history. Ask the clinic about an assessment and the care options available to you.', 'Dental Consultation'],
          ['Your treatment plan', 'Discuss the recommended options, appointment arrangements, and costs with your dentist before deciding how to proceed.', 'Treatment Planning'],
          ['Care beyond your visit', 'Ask about aftercare, follow-up appointments, and the everyday habits that can help you look after your smile.', 'Follow-up Care'],
        ].map(([title, text, topic], index) => <article className="sequence-card" key={title} data-reveal><div className="sequence-number-row"><span className="sequence-number"><span>0{index + 1}</span></span><span className="sequence-connector" aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><button className="sequence-read-more" onClick={event => inquire(topic, event.currentTarget)}>Read more <span><Icon name="arrow" /></span></button></article>)}</div>
        <SmileComparison />
      </div></section>
      {/* <section className="gallery-section"><div className="container" data-reveal><div className="section-heading"><div><p className="eyebrow">A glimpse of the feeling</p><h2>More comfort.<br /><em>More reasons to smile.</em></h2></div><p className="section-aside">Light-filled spaces. Attentive conversations. A visual direction built around feeling welcome.</p></div><div className="gallery"><figure><Photo src={photos.room} alt="Illustration of a Pakistani family arriving at a dental clinic" /><figcaption><span>01</span> A welcoming space</figcaption></figure><figure><Photo src={photos.care} alt="Illustration of a Pakistani dentist explaining a dental model" /><figcaption><span>02</span> Care in the details</figcaption></figure><figure><Photo src={photos.visit} alt="Illustration of a Pakistani father and son in a clinic waiting area" /><figcaption><span>03</span> Time for your smile</figcaption></figure></div></div></section> */}
      <section id="faq" className="section container faq-section" data-reveal><div><p className="eyebrow">A little clarity</p><h2>Questions?<br /><em>Let’s talk.</em></h2><p>Getting ready for your visit should feel simple. Here is where to start.</p><button className="button" onClick={event => inquire('', event.currentTarget)}>Ask the clinic <Icon name="chat" /></button></div><div className="faq-list">{[
        ['How do I arrange an appointment?', `Call ${clinic.phone} to discuss a suitable date and time. Your appointment is confirmed directly by the clinic.`],
        ['Where is the clinic located?', ADDRESS],
        ['Which treatments can I ask about?', 'Explore the treatment categories above, then contact the clinic to confirm which services are available and appropriate for you.'],
        ['What are the opening hours and treatment fees?', 'Please call the clinic for current opening hours, consultation fees, and a treatment estimate.'],
        ['What should I bring to my first visit?', 'Ask the clinic when arranging your visit whether you should bring previous dental records, X-rays, or other information.']
      ].map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section className="container appointment-section" id="appointment" data-reveal><div className="appointment-panel"><div className="appointment-decoration" aria-hidden="true"><Icon /></div><p className="eyebrow">Let’s start with a conversation</p><h2>Your Next Smile<br /><em>Starts Here.</em></h2><p>Have a question or ready to arrange a visit?<br />Contact the clinic and take the next step at your own pace.</p><div className="appointment-actions"><button className="button button-light" onClick={event => inquire('', event.currentTarget)}>Request an Appointment <Icon name="arrow" /></button><a className="call-link" href={PHONE}><Icon name="phone" /> {clinic.phone}</a></div><a className="directions-link" href={MAP} target="_blank" rel="noreferrer">Find your way to the clinic ↗</a><small>Send your request in WhatsApp. The clinic must confirm your appointment.</small></div></section>
      <section id="contact" className="container contact-section" data-reveal><div><p className="eyebrow">A familiar place, close to home</p><h2>Find us<br /><em>in Kharian.</em></h2><p className="contact-intro">Your next conversation is just a call away.</p></div><div className="contact-card"><div className="contact-row"><span className="contact-icon"><Icon name="pin" /></span><div><h3>H&M Dental Care</h3><address>{ADDRESS}</address><ContactTools /><a className="text-link" href={MAP} target="_blank" rel="noreferrer">Get Directions <span>↗</span></a></div></div><div className="contact-row"><span className="contact-icon"><Icon name="phone" /></span><div><p className="eyebrow">Call the clinic</p><a className="phone-number" href={PHONE}>{clinic.phone}</a><p className="disclaimer">Please call to confirm opening hours and appointment arrangements.</p></div></div></div></section>
      <section className="clinic-map-section container" aria-labelledby="clinic-map-title">
        <div className="map-heading"><div><p className="eyebrow">Come say hello</p><h2 id="clinic-map-title">Your next smile.<br /><em>A little closer to home.</em></h2></div><a className="button" href={MAP} target="_blank" rel="noreferrer"><Icon name="pin" /> Get directions <Icon name="arrow" /></a></div>
        <div className="clinic-map-frame"><iframe title="Google Map — H&M Dental Care, Kharian Dinga Road, Kharian, Pakistan" src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`} width="100%" height="460" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-address-card"><span className="map-pin"><Icon name="pin" /></span><div><strong>H&M Dental Care</strong><p>{ADDRESS}</p><a href={MAP} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div></div></div>
      </section>
    </main>
    <SiteFooter />
    <a className="floating-call" href={PHONE} aria-label="Call H&M Dental Care"><Icon name="phone" /><span>Call the clinic</span></a>
  </>;
}
