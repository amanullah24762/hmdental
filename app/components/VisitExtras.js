'use client';
import { useState } from 'react';
import BookingAction from './BookingAction';
import ContactTools from './ContactTools';
import { clinic } from './clinic';

export function VisitPlanner({ initialService = '' }) {
  return <section className="visit-planner" aria-labelledby="planner-heading"><div className="planner-intro"><span className="extra-kicker">Let’s plan your visit</span><h2 id="planner-heading">A little preparation.<br />An easier first step.</h2><p>Choose your service, preferred date and time in our appointment request form.</p><div className="planner-contact"><span>Speak to the clinic</span><a href={clinic.telephone}>{clinic.phone} ↗</a><small>Call to confirm opening hours and availability.</small></div></div><div className="planner-request"><h3>{initialService || 'Your next visit starts here'}</h3><p>Prepare a WhatsApp request, review it, and send it to the clinic. Your appointment is confirmed only when the clinic replies.</p><BookingAction service={initialService}>Request an appointment ↗</BookingAction><p className="planner-note">No account or payment required to send an enquiry. You can also copy your request in the booking popup.</p></div></section>;
}

export function VisitChecklist() {
  const [checked, setChecked] = useState([]);
  const items = ['Write down the questions I want to ask', 'Ask which previous dental records to bring', 'Confirm the consultation fee and appointment time', 'Check the clinic location and plan my journey'];
  return <section className="visit-checklist"><div><span className="extra-kicker">Your first visit</span><h2>Feel a little<br />more prepared.</h2><p>A simple checklist for your next conversation with the clinic.</p><span className="checklist-count" role="status">{checked.length} of {items.length} ready</span><div className="checklist-track" aria-hidden="true"><span style={{ width: `${checked.length / items.length * 100}%` }} /></div></div><div>{items.map((item,i) => <label key={item} className={checked.includes(i) ? 'is-checked' : ''}><input type="checkbox" checked={checked.includes(i)} onChange={e => setChecked(e.target.checked ? [...checked,i] : checked.filter(n => n !== i))} /><span>{item}</span></label>)}{checked.length === items.length && <p className="checklist-done" role="status">Your checklist is complete. You’re ready to make the call.</p>}</div></section>;
}

export function VisitLocation() {
 return <section className="visit-location"><div><span className="extra-kicker">Close to home</span><h2>Find your way<br />to a familiar smile.</h2><p>{clinic.address}</p><a className="button" href={clinic.mapURL} target="_blank" rel="noreferrer">Get directions ↗</a><ContactTools /></div><div className="location-details"><article><span>01</span><div><h3>Call before you visit</h3><p>Confirm your appointment time and the dentist’s availability.</p></div></article><article><span>02</span><div><h3>Plan your arrival</h3><p>Find us on Kharian Dinga Road, Kharian. Open the Google Maps link for directions to the clinic.</p></div></article><article><span>03</span><div><h3>Need a little help?</h3><p>Call <a href={clinic.telephone}>{clinic.phone}</a> for directions or appointment enquiries.</p></div></article></div></section>;
}
