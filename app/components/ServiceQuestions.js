import { treatmentFAQs } from './treatmentQuestionData';

export default function TreatmentFAQs({ service }) {
  const questions = treatmentFAQs[service.slug] || [];
  if (!questions.length) return null;
  return <section className="treatment-faqs" aria-label={`${service.title} questions`}>
    <h3>Questions about {service.title}</h3>
    {questions.map(([question, answer]) => <details key={question}>
      <summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>
    </details>)}
  </section>;
}
