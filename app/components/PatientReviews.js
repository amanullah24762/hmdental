import { clinic } from './clinic';
import TestimonialsSection from './TestimonialsSection';
import { patientReviews, googleReviewsURL } from './reviewData';

export default function PatientReviews() {
  const feedbackURL = `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent('Hello H&M Dental Care, I would like to share feedback about my visit.\n\nMy feedback: ')}`;
  const approved = patientReviews.filter(review => review.publishApproved === true);
  return <section id="reviews" className="patient-reviews" aria-labelledby="patient-reviews-title">
    <div className="container">
      <div className="patient-reviews-heading"><div><p className="eyebrow">Patient feedback</p><h2 id="patient-reviews-title">Your experience<br /><em>matters to us.</em></h2></div><p>Visited H&amp;M Dental Care? Tell us about your experience and help our team understand what went well and what we can improve.</p></div>
      {approved.length > 0 && <TestimonialsSection testimonials={approved} />}
      <div className="patient-review-actions">
        <article><span className="eyebrow">On Google</span><h3>Explore patient reviews</h3><p>Open our Google listing and select Reviews to read feedback or share your own experience.</p><a className="button" href={googleReviewsURL} target="_blank" rel="noreferrer">Open Google listing <span className="action-arrow" aria-hidden="true">↗</span></a></article>
        <article><span className="eyebrow">Talk to our team</span><h3>Share feedback directly</h3><p>Send your feedback to the clinic on WhatsApp. We’ll ask for your permission before featuring it on this website.</p><a className="button" href={feedbackURL} target="_blank" rel="noreferrer">Send feedback <span className="action-arrow" aria-hidden="true">↗</span></a></article>
      </div>
    </div>
  </section>;
}
