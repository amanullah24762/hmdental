'use client';

import BookingAction from './BookingAction';
import { clinic } from './clinic';

// Original clinic promotion and separate portrait crops from the supplied Facebook post.
const promotionImage = '/images/hm-free-consultation.jpg';
const doctors = [
  { name: 'Dr. Hamza Anwar Chaudhary', title: 'Dental Surgeon', initials: 'H', image: '/images/dr-hamza-portrait.png' },
  { name: 'Dr. Maham Raza', title: 'Lady Dental Surgeon', initials: 'MR', image: '/images/dr-maham-raza-portrait.png' },
];

export function ConsultationPromotion() {
  return <section id="promotion" className="container hm-promotion" aria-labelledby="promotion-title">
    <div className="hm-promotion-art">
      <img src={promotionImage || '/images/hm-dental-logo.jpeg'} alt={promotionImage ? 'H&M Dental Care free consultation promotion with Dr. Hamza Anwar Chaudhary and Dr. Maham Raza' : 'H&M Dental Care logo'} width={1080} height={promotionImage ? 1424 : 1080} />
    </div>
    <div className="hm-promotion-copy">
      <p className="eyebrow">H&amp;M Dental Care · Special offer</p>
      <h2 id="promotion-title">Your smile starts with<br /><em>a free consultation.</em></h2>
      <p>Meet Dental Surgeon Dr. Hamza Anwar Chaudhary and Lady Dental Surgeon Dr. Maham Raza. Share your dental concerns, ask your questions, and discuss your next steps.</p>
      <div className="hm-offer-doctors"><span>Dr. Hamza Anwar Chaudhary</span><span>Dr. Maham Raza</span></div>
      <BookingAction className="button button-light" service="Free consultation">Request a free consultation ↗</BookingAction>
      <a className="hm-offer-phone" href={clinic.telephone}>Call {clinic.phone}</a>
      <small>Contact the clinic to confirm offer availability and your appointment.</small>
    </div>
  </section>;
}

export default function ClinicTeam() {
  return <section id="doctors" className="container section hm-team" aria-labelledby="doctors-title">
    <div className="section-heading"><div><p className="eyebrow">Meet your dentists</p><h2 id="doctors-title">Two familiar faces.<br /><em>Care for your smile.</em></h2></div><p className="section-aside">Meet the doctors at H&amp;M Dental Care in Pindi Sultan Pur. Arrange a visit and start a conversation about your dental care.</p></div>
    <div className="hm-doctor-grid">{doctors.map(doctor => <article className="hm-doctor-card" key={doctor.name}>
      {doctor.image ? <img className="hm-doctor-photo" src={doctor.image} alt={doctor.name} width={1122} height={1402} loading="lazy" /> : <div className="hm-doctor-initials" aria-hidden="true">{doctor.initials}</div>}
      <div className="hm-doctor-info"><p className="eyebrow">H&amp;M Dental Care</p><h3>{doctor.name}</h3><p>{doctor.title}</p><BookingAction className="text-link" service={`Free consultation with ${doctor.name}`}>Request an appointment ↗</BookingAction></div>
    </article>)}</div>
  </section>;
}
