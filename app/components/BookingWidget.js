'use client';

import { useEffect, useRef, useState } from 'react';
import { services } from './services';

import { clinic } from './clinic';
import { BOOKING_EVENT } from './BookingAction';
const clinicNumber = clinic.whatsappNumber;
function localDate() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
function validCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(`${value}T12:00:00`);
  return Number.isFinite(parsed.getTime()) && parsed.getFullYear() === year && parsed.getMonth() + 1 === month && parsed.getDate() === day;
}
const options = [...services, { slug: 'help-me-choose', title: 'Not sure? Help me choose' }];
const symbols = ['✧', '✦', '⌁', '✧', '+', '♧', '+', '◇', '?'];

export default function BookingWidget() {
  const dialog = useRef(null);
  const heading = useRef(null);
  const trigger = useRef(null);
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(null);
  const [requestedTopic, setRequestedTopic] = useState('');
  const returnFocus = useRef(null);
  const [prepared, setPrepared] = useState(false);
  const [today, setToday] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const messageField = useRef(null);

  function open(request = '', opener = document.activeElement) {
    returnFocus.current = opener;
    const aliases = { 'dental consultation': 'dentist-consultation', 'general dental check-ups': 'dentist-consultation', 'root canal treatment': 'root-canals' };
    const match = services.find(item => item.title.toLowerCase() === request.toLowerCase() || item.slug === request || item.slug === aliases[request.toLowerCase()]);
    setService(match?.title || (request ? options[options.length - 1].title : ''));
    setRequestedTopic(match ? '' : request);
    setStep(1);
    setPrepared(false);
    setCopyStatus('');
    setToday(localDate());
    setError(null);
    if (!dialog.current?.open) dialog.current?.showModal();
    requestAnimationFrame(() => heading.current?.focus());
  }

  useEffect(() => {
    const handle = event => open(event.detail?.service || '', event.detail?.trigger);
    window.addEventListener(BOOKING_EVENT, handle);
    return () => window.removeEventListener(BOOKING_EVENT, handle);
  }, []);

  function fail(field, message, targetStep = step) {
    setPrepared(false);
    setStep(targetStep);
    setError({ field, message });
    requestAnimationFrame(() => dialog.current?.querySelector('[data-booking-field="' + field + '"]')?.focus());
  }

  function fieldProps(field) {
    return { 'data-booking-field': field, 'aria-invalid': error?.field === field || undefined, 'aria-describedby': error?.field === field ? 'booking-field-error' : undefined };
  }

  function clearError(field) { setError(current => current?.field === field ? null : current); }

  function move(next) {
    setError(null);
    setPrepared(false);
    setCopyStatus('');
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus());
  }

  const formattedDate = validCalendarDate(date) ? new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const message = `Hello H&M Dental Care! I would like to request an appointment.\n\nName: ${name.trim()}\nMobile: ${mobile.trim()}\nService: ${service}${requestedTopic ? ` (Enquiry: ${requestedTopic})` : ''}\nPreferred date: ${formattedDate}\nPreferred time: ${time}\n\nI would like to ask about your free consultation offer. Please confirm availability. Thank you!`;
  const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;

  function next(event) {
    event.preventDefault();
    const minimum = localDate();
    setToday(minimum);
    if (!options.some(option => option.title === service)) { fail('service', 'Please choose a service, or select “Help me choose”.', 1); return; }
    if (step >= 2 && (!validCalendarDate(date) || date < minimum)) { fail('date', 'Please choose a valid date today or in the future.', 2); return; }
    if (step >= 2 && !['Morning', 'Afternoon', 'Evening'].includes(time)) { fail('time', 'Please choose your preferred time.', 2); return; }
    if (step < 3) { move(step + 1); return; }
    if (!name.trim()) { fail('name', 'Please enter your name.'); return; }
    const phoneText = mobile.trim();
    const digits = phoneText.replace(/\D/g, '');
    if (!/^\+?\d(?:[ .-]?\d){9,14}$/.test(phoneText) || digits.length < 10 || digits.length > 15) { fail('mobile', 'Please enter a valid mobile number, for example 0308 6878587.'); return; }
    setError(null);
    setPrepared(true);
    // The visitor reviews and sends the message in WhatsApp.
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  }

  async function copyMessage() {
    try { await navigator.clipboard.writeText(message); setCopyStatus('Appointment request copied.'); }
    catch { messageField.current?.focus(); messageField.current?.select(); setCopyStatus('Select and copy your message below.'); }
  }

  function containTab(event) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(dialog.current.querySelectorAll('a[href], button, input, select, textarea, summary, [tabindex]'))
      .filter(element => !element.disabled && element.tabIndex >= 0 && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden')
      .filter(element => {
        if (element.type !== 'radio') return true;
        const group = Array.from(dialog.current.querySelectorAll('input[type="radio"]')).filter(radio => radio.name === element.name);
        return element === (group.find(radio => radio.checked) || group[0]);
      });
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); heading.current?.focus(); return; }
    if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }

  return <>
    <button ref={trigger} type="button" className="booking-launcher" onClick={event => open('', event.currentTarget)}><span className="booking-launcher-icon" aria-hidden="true">▦</span><span>Book a Visit<small>Your smile starts here</small></span><span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onKeyDown={containTab} onClose={() => { const target = returnFocus.current; (target?.isConnected && target.getClientRects().length ? target : trigger.current)?.focus(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientY < rect.top || event.clientX > rect.right || event.clientY > rect.bottom) dialog.current?.close(); } }}>
      <div className="booking-layout">
        <aside className="booking-welcome">
          <span className="booking-clinic">H&M DENTAL CARE · PINDI SULTAN PUR</span>
          <span className="booking-welcome-art" aria-hidden="true">✧</span>
          <h2>A little care.<br /> A brighter<br /><em>beginning.</em></h2>
          <p>Let’s find a time for your smile. Share a few details and start a conversation with our clinic.</p>
          <div className="booking-reassurance"><span>✓ &nbsp; No account needed</span><span>✓ &nbsp; Just three simple steps</span><span>✓ &nbsp; Confirm directly with the clinic</span></div>
          <a href={clinic.telephone}>Prefer to call? <strong>{clinic.phone} ↗</strong></a>
        </aside>
        <div className="booking-main">
          <button className="booking-close" type="button" aria-label="Close booking" onClick={() => dialog.current?.close()}>×</button>
          <div className="booking-step-label">LET’S PLAN YOUR VISIT <span>Step {step} of 3</span></div>
          <ol className="booking-progress" aria-label="Booking progress">{['Your care', 'Your time', 'Your details'].map((label, i) => <li key={label} className={step >= i + 1 ? 'is-active' : ''} aria-current={step === i + 1 ? 'step' : undefined}><span>{step > i + 1 ? '✓' : i + 1}</span>{label}</li>)}</ol>
          <h2 id="booking-title" ref={heading} tabIndex={-1}>{step === 1 ? 'What brings you in?' : step === 2 ? 'When suits you best?' : 'Let’s make the introduction.'}</h2>
          <p className="booking-subtitle">{step === 1 ? 'Choose a service. It’s okay if you’re not sure yet.' : step === 2 ? 'Choose your preference. The clinic will confirm availability.' : 'Your request will open in WhatsApp for you to review and send.'}</p>
          <form onSubmit={next} noValidate>
            {step === 1 && <fieldset className="booking-options"><legend className="booking-sr-only">Choose your dental service</legend>{options.map((option, i) => <label key={option.slug} className={`booking-option ${service === option.title ? 'is-selected' : ''}`}><input type="radio" name="booking-service" {...fieldProps('service')} aria-labelledby={`booking-service-${option.slug}`} value={option.title} checked={service === option.title} onChange={() => { setService(option.title); setRequestedTopic(''); clearError('service'); }} /><span className="booking-option-symbol" aria-hidden="true">{symbols[i % symbols.length]}</span><span id={`booking-service-${option.slug}`}>{option.title}</span><span className="booking-option-check" aria-hidden="true">{service === option.title ? '✓' : ''}</span></label>)}</fieldset>}
            {step === 2 && <div className="booking-schedule"><label className="booking-field">Preferred date<input type="date" {...fieldProps('date')} value={date} min={today} required onChange={e => { setDate(e.target.value); clearError('date'); }} /></label><fieldset className="booking-times"><legend>Preferred time of day</legend>{[['Morning', 'Start your day with a smile', '☀'], ['Afternoon', 'A little time for yourself', '◷'], ['Evening', 'Find a moment after your day', '☾']].map(([label, text, icon]) => <label key={label} className={time === label ? 'is-selected' : ''}><input type="radio" name="booking-time" {...fieldProps('time')} aria-labelledby={`booking-time-${label}`} value={label} checked={time === label} onChange={() => { setTime(label); clearError('time'); }} /><span aria-hidden="true">{icon}</span><span><strong id={`booking-time-${label}`}>{label}</strong><small>{text}</small></span><span className="booking-option-check" aria-hidden="true">{time === label ? '✓' : ''}</span></label>)}</fieldset><p className="booking-info">These are preferences, not live appointment slots. Opening hours and your final appointment time will be confirmed by the clinic.</p></div>}
            {step === 3 && <div className="booking-details"><div className="booking-summary"><span>YOUR VISIT AT A GLANCE</span><strong>{service}</strong>{requestedTopic && <p>Enquiry: {requestedTopic}</p>}<p>{formattedDate} · {time}</p><button type="button" onClick={() => move(1)}>Edit preferences ↗</button></div><label className="booking-field">Your name<input name="name" {...fieldProps('name')} autoComplete="name" placeholder="Enter your name" value={name} maxLength={80} required onChange={e => { setName(e.target.value); setPrepared(false); clearError('name'); setCopyStatus(''); }} /></label><label className="booking-field">Mobile number<input name="tel" {...fieldProps('mobile')} type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 0308 6878587" value={mobile} maxLength={24} required onChange={e => { setMobile(e.target.value); setPrepared(false); clearError('mobile'); setCopyStatus(''); }} /></label><p className="booking-info">Your details are included in the WhatsApp message. You choose when to send it. Your appointment is confirmed only after the clinic replies.</p></div>}
            {error && <p id="booking-field-error" className="booking-error" role="alert">{error.message}</p>}
            <div className="booking-actions">{step > 1 && <button type="button" className="booking-back" onClick={() => move(step - 1)}>← Back</button>}<button type="submit" className="booking-next">{step === 3 ? 'Continue to WhatsApp' : 'Continue'} <span aria-hidden="true">↗</span></button></div>
            {prepared && step === 3 && <div className="booking-ready"><p role="status"><strong>Your message is ready.</strong> Send it in WhatsApp, then wait for the clinic to confirm your visit.</p><button type="submit" className="booking-reopen">Open WhatsApp again ↗</button><details><summary>Prefer to copy your request?</summary><textarea ref={messageField} aria-label="Your appointment request" value={message} readOnly rows={7} /><button type="button" onClick={copyMessage}>Copy message</button><p role="status">{copyStatus}</p></details></div>}
          </form>
          <p className="booking-bottom-note">No payment required to send an enquiry.</p>
        </div>
      </div>
    </dialog>
  </>;
}
