import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { doctors } from '../../components/doctors';
import { clinic } from '../../components/clinic';
import { Shell } from '../../components/InnerPages';
import BookingAction from '../../components/BookingAction';
import { createPageMetadata } from '../../lib/seo';

export function generateStaticParams() {
  return doctors.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = doctors.find(item => item.slug === slug);
  if (!doctor) notFound();
  return createPageMetadata({ title: doctor.name, description: doctor.introduction });
}

export default async function DoctorProfile({ params }) {
  const { slug } = await params;
  const doctor = doctors.find(item => item.slug === slug);
  if (!doctor) notFound();
  const colleague = doctors.find(item => item.slug !== slug);
  const whatsapp = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(`Hello H&M Dental Care, I would like to request a consultation with ${doctor.name}. Please confirm availability.`)}`;
  return <Shell title={doctor.name} kind="doctor-profile">
    <section className="container inner-section doctor-profile">
      <aside>
        <Image className="doctor-profile-photo" src={doctor.image} alt={doctor.name} width={1122} height={1402} sizes="(max-width: 700px) 90vw, 400px" priority />
        <div className="doctor-profile-summary"><p className="eyebrow">H&amp;M Dental Care</p><h2>{doctor.title}</h2><p>Kharian, Pakistan</p><BookingAction className="button" service={`Consultation with ${doctor.name}`}>Request an appointment ↗</BookingAction></div>
      </aside>
      <div className="doctor-profile-content">
        <Link className="text-link" href="/doctors">← All dentists</Link>
        <section><p className="eyebrow">Meet your dentist</p><h2>About {doctor.name}</h2><p>{doctor.introduction}</p></section>
        <section><h2>Your consultation</h2><p>Use your visit to explain your concerns, discuss your dental history and ask about the care options available to you.</p><ul><li>Discuss the reason for your visit and any questions you have.</li><li>Ask which assessment or treatment may be appropriate.</li><li>Confirm treatment arrangements, fees and follow-up with your dentist.</li></ul></section>
        <section className="inner-note"><h2>Arrange a visit</h2><p>Request {doctor.name} when contacting the clinic. The team will confirm the dentist’s availability and your appointment time.</p><div className="appointment-help-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer"><span>Message on WhatsApp</span><span className="action-arrow" aria-hidden="true">↗</span></a><a className="button doctor-call-button" href={clinic.telephone}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>Call {clinic.phone}</a></div></section>
        <section><h2>Clinic location</h2><p>{clinic.address}</p><a className="text-link" href={clinic.mapURL} target="_blank" rel="noreferrer"><span>Get directions</span><span className="action-arrow" aria-hidden="true">↗</span></a></section>
        <section><h2>Before your appointment</h2><p>Ask which previous records to bring, confirm the consultation fee and share your preferred day with the clinic. Appointment requests are confirmed directly by the clinic.</p></section>
        <Link className="doctor-colleague" href={`/doctors/${colleague.slug}`}><span>Also at H&amp;M Dental Care</span><strong>{colleague.name} ↗</strong><span>{colleague.title}</span></Link>
      </div>
    </section>
  </Shell>;
}
