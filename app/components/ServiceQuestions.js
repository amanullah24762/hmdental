import { treatmentFAQs } from './treatmentQuestionData';

export default function TreatmentFAQs({ service, headingLevel = 'h3' }) {
  const Heading = headingLevel === 'h2' ? 'h2' : 'h3';
  const questions = treatmentFAQs[service.slug] || [];
  if (!questions.length) return null;
  return <section className="treatment-faqs" aria-label={`${service.title} questions`}>
    <Heading>Questions about {service.title}</Heading>
    {questions.map(([question, answer]) => <details key={question}>
      <summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>
    </details>)}
  </section>;
}
