'use client';

import { useEffect, useState } from 'react';

// Render once in the shared layout. Override --back-to-top-bottom if needed
// to leave space for other floating controls.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Move keyboard focus to the page content before hiding this control.
    const destination = document.querySelector('main') || document.querySelector('h1');
    if (destination instanceof HTMLElement) {
      const originalTabIndex = destination.getAttribute('tabindex');
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      if (originalTabIndex === null) destination.removeAttribute('tabindex');
      else destination.setAttribute('tabindex', originalTabIndex);
    }

    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  return (
    <>
      <button
        type="button"
        className="back-to-top"
        hidden={!visible}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="m6 12 6-6 6 6M12 6v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <style jsx>{`
        .back-to-top {
          position: fixed;
          inset-inline-start: max(1rem, env(safe-area-inset-left, 0px));
          bottom: var(--back-to-top-bottom, calc(6rem + env(safe-area-inset-bottom, 0px)));
          z-index: 10;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid currentColor;
          border-radius: 50%;
          color: #fff;
          background: var(--color-primary, #3158ad);
          box-shadow: 0 3px 12px rgb(0 0 0 / 15%);
          cursor: pointer;
        }
        .back-to-top[hidden] { display: none; }
        .back-to-top:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
          box-shadow: 0 0 0 7px #243e78;
        }
        @media (hover: hover) {
          .back-to-top:hover { background: #243e78; }
        }
        @media print {
          .back-to-top { display: none; }
        }
      `}</style>
    </>
  );
}
