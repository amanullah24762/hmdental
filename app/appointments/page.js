import { Shell } from '../components/InnerPages';
import { VisitPlanner, VisitChecklist } from '../components/VisitExtras';
import { clinic } from '../components/clinic';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({ title: 'Request an Appointment', description: 'Request a dental appointment at H&M Dental Care, or contact the clinic to change an existing appointment.' });

export default function AppointmentsPage() {
  const message = 'Hello H&M Dental Care, I would like to change or cancel an existing appointment. Please help me with the next steps.';
  return <Shell title="Arrange your appointment" kind="appointments">
    <div className="container extras-stack"><VisitPlanner /><VisitChecklist />
      <section className="inner-note"><h2>Already have an appointment?</h2><p>Contact the clinic to change your time or cancel a visit. Include your name and the date of your confirmed appointment when messaging.</p><div className="appointment-help-actions"><a className="button" href={`https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer"><span>Message about my appointment</span><span className="action-arrow" aria-hidden="true">↗</span></a><a className="text-link" href={clinic.telephone}>Call {clinic.phone}</a></div><p>The clinic will confirm any changes directly with you.</p></section>
    </div>
  </Shell>;
}
