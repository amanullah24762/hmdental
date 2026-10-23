'use client';

import { useId, useState } from 'react';

function FAQItem({ question, answer }) {
  const id = useId();
  const [expanded, setExpanded] = useState(false);
  const questionId = `${id}-question`;
  const answerId = `${id}-answer`;

  return (
    <div className="faq-accordion-item">
      <button
        id={questionId}
        type="button"
        className="faq-accordion-question"
        aria-expanded={expanded}
        aria-controls={answerId}
        onClick={() => setExpanded(current => !current)}
      >
        <span>{question}</span>
        <span className="faq-accordion-indicator" aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>
      <div id={answerId} hidden={!expanded} className="faq-accordion-answer">
        {answer}
      </div>
      <style jsx>{`
        .faq-accordion-item {
          min-width: 0;
          border: 1px solid #d7dee8;
          border-radius: 6px;
          background: #fff;
          color: #252d3d;
        }
        .faq-accordion-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-sizing: border-box;
          width: 100%;
          min-height: 48px;
          padding: 16px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: inherit;
          font: inherit;
          font-weight: 600;
          line-height: 1.5;
          text-align: start;
          cursor: pointer;
        }
        .faq-accordion-question > span:first-child {
          min-width: 0;
          overflow-wrap: anywhere;
        }
        .faq-accordion-question:focus-visible {
          outline: 3px solid #3158ad;
          outline-offset: 3px;
        }
        .faq-accordion-indicator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 28px;
          height: 28px;
          border-radius: 4px;
          background: #3158ad;
          color: #fff;
          font-size: 20px;
          line-height: 1;
        }
        .faq-accordion-answer {
          padding: 0 16px 16px;
          line-height: 1.7;
          overflow-wrap: anywhere;
          overflow-x: auto;
        }
        .faq-accordion-answer[hidden] { display: none; }
        .faq-accordion-answer :global(img) {
          max-width: 100%;
          height: auto;
        }
        .faq-accordion-answer :global(a) {
          color: #3158ad;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .faq-accordion-answer :global(a:focus-visible) {
          outline: 3px solid #3158ad;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

/**
 * items: [{ id?: string, question: string, answer: ReactNode }]
 * Supply a unique, stable id for each item if the list can reorder or change.
 * Static lists may omit ids, including lists with repeated question text.
 * Content is rendered as React content, never injected as raw HTML.
 */
export default function FAQAccordion({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <FAQItem key={item.id != null ? `id:${item.id}` : `position:${index}`} question={item.question} answer={item.answer} />
      ))}
      <style jsx>{`
        .faq-accordion {
          display: grid;
          gap: 12px;
          min-width: 0;
          width: 100%;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
