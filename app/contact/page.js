import { Shell } from '../components/InnerPages';
import { clinic } from '../components/clinic';
import ContactTools from '../components/ContactTools';
import BookingAction from '../components/BookingAction';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact & Appointments',
  description: 'Call H&M Dental Care in Kharian on 0308 6878587, request an appointment through WhatsApp or get directions to the clinic.',
});

export default function ContactPage() {
  const whatsapp = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent('Hello H&M Dental Care, I would like to arrange an appointment. Please share your available timings.')}`;
  return <Shell title="Let’s plan your visit" kind="contact">
    <section className="inner-section container">
      <div className="inner-concerns">
        <article><p className="eyebrow">Speak to our team</p><h2>Call the clinic</h2><p>Ask about dentist availability, consultation fees and opening hours before you travel.</p><a className="button" href={clinic.telephone}>{clinic.phone} ↗</a></article>
        <article><p className="eyebrow">Message us</p><h2>WhatsApp</h2><p>Send your preferred day and service. The clinic will reply to confirm a suitable time.</p><a className="button" href={whatsapp} target="_blank" rel="noreferrer"><span>Start a conversation</span><span className="action-arrow" aria-hidden="true">↗</span></a></article>
        <article><p className="eyebrow">Find the clinic</p><h2>Visit Kharian</h2><p>{clinic.address}</p><a className="button" href={clinic.mapURL} target="_blank" rel="noreferrer"><span>Get directions</span><span className="action-arrow" aria-hidden="true">↗</span></a></article>
      </div>
      <ContactTools />
    </section>
    <section className="inner-section inner-tint"><div className="container">
      <div className="inner-heading"><span>Appointments</span><h2>Three simple steps to your visit</h2></div>
      <div className="inner-visit-steps">
        <div><span>01</span><p>Choose a service and your preferred date in the appointment form.</p></div>
        <div><span>02</span><p>Review your request, then send it to the clinic through WhatsApp.</p></div>
        <div><span>03</span><p>Wait for the clinic to confirm your appointment before travelling.</p></div>
      </div>
      <div className="inner-note"><h3>Ready to arrange a visit?</h3><p>Online requests do not reserve a time automatically. For a same-day visit, please call the clinic.</p><BookingAction className="button">Request an appointment ↗</BookingAction></div>
    </div></section>
    <section className="inner-section container"><h2>Before you arrive</h2><p>Bring any previous dental records you have, and confirm your appointment time and consultation fee with the clinic.</p><div className="clinic-map-frame"><iframe className="map-embed" title="H&M Dental Care location" src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`} width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>
  </Shell>;
}
