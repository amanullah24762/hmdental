/**
 * testimonials: Array<{ id?: string, quote: string, author?: string }>
 * heading?: string
 * description?: string
 * Supply only approved testimonial content. No verification or ratings are inferred.
 * This component needs no client-side JavaScript.
 */
export default function TestimonialsSection({ testimonials = [], heading, description }) {
  const entries = testimonials.filter(item => (
    item && typeof item.quote === 'string' && item.quote.trim()
  ));

  if (!entries.length) return null;

  return (
    <section className="clinic-testimonials" aria-label={heading || 'Testimonials'}>
      {(heading || description) && (
        <header className="clinic-testimonials-header">
          {heading && <h2>{heading}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      <ul className="clinic-testimonials-grid">
        {entries.map((item, index) => (
          <li key={item.id ?? index}>
            <figure className="clinic-testimonial-card">
              {Number.isInteger(item.rating) && item.rating >= 1 && item.rating <= 5 && <div className="patient-review-stars" aria-label={`${item.rating} out of 5 stars`}><span aria-hidden="true">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span></div>}
              <blockquote><p>{item.quote}</p></blockquote>
              {typeof item.author === 'string' && item.author.trim() && (
                <figcaption><span>{item.author}</span>{item.sourceURL && <a className="patient-review-source" href={item.sourceURL} target="_blank" rel="noreferrer">Google reviews ↗</a>}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
      <style>{`
        .clinic-testimonials {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          padding: clamp(24px, 5vw, 64px) clamp(16px, 4vw, 40px);
          color: #252d3d;
          background: #f5f8fc;
          overflow-wrap: anywhere;
        }
        .clinic-testimonials .clinic-testimonials-header {
          max-width: 680px;
          margin: 0 auto 28px;
          text-align: center;
        }
        .clinic-testimonials .clinic-testimonials-header h2 {
          margin: 0 0 12px;
          color: #252d3d;
          font-size: clamp(24px, 4vw, 36px);
          line-height: 1.25;
        }
        .clinic-testimonials .clinic-testimonials-header p {
          margin: 0;
          color: #475569;
          line-height: 1.7;
        }
        .clinic-testimonials .clinic-testimonials-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 20px;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0;
          list-style: none;
        }
        .clinic-testimonials .clinic-testimonials-grid > li { min-width: 0; }
        .clinic-testimonials .clinic-testimonial-card {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          min-width: 0;
          margin: 0;
          padding: clamp(20px, 3vw, 28px);
          border: 1px solid #d7dee8;
          border-top: 3px solid #3158ad;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 4px 16px rgb(37 45 61 / 4%);
        }
        .clinic-testimonials blockquote {
          flex: 1;
          margin: 0;
          padding: 0;
          border: 0;
          color: #252d3d;
          font: inherit;
          line-height: 1.8;
        }
        .clinic-testimonials blockquote p {
          margin: 0;
          white-space: pre-line;
        }
        .clinic-testimonials figcaption {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #e3e8ef;
          color: #3158ad;
          font-weight: 600;
          line-height: 1.5;
        }
        @media (min-width: 640px) {
          .clinic-testimonials .clinic-testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .clinic-testimonials .clinic-testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
