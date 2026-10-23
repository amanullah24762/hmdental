'use client';

import { useEffect, useRef } from 'react';

// Mount once, after the page content, alongside the existing BookingWidget.
// At integration, move any existing bottom-fixed launcher above this bar or
// hide that duplicate launcher on mobile. Do not mount a second booking dialog.
export default function MobileContactBar() {
  const barRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const spacer = spacerRef.current;
    if (!bar || !spacer) return;

    const updateSpace = () => {
      spacer.style.height = `${Math.ceil(bar.getBoundingClientRect().height)}px`;
    };
    updateSpace();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateSpace) : null;
    observer?.observe(bar);
    window.addEventListener('resize', updateSpace);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateSpace);
    };
  }, []);

  function requestAppointment(event) {
    // Existing BookingAction / BookingWidget event contract.
    window.dispatchEvent(new CustomEvent('family-dental:request-appointment', {
      detail: { service: '', trigger: event.currentTarget },
    }));
  }

  return (
    <>
      <div ref={spacerRef} className="mobile-contact-space" aria-hidden="true" />
      <nav ref={barRef} className="mobile-contact-bar" aria-label="Clinic contact actions">
        <a href="tel:+923086878587" aria-label="Call Clinic at 0308 6878587">
          Call Clinic
        </a>
        <button type="button" onClick={requestAppointment} aria-haspopup="dialog">
          Book a Visit
        </button>
      </nav>
      <style jsx>{`
        .mobile-contact-space,
        .mobile-contact-bar { display: none; }

        @media screen and (max-width: 767px) {
          .mobile-contact-space {
            display: block;
            height: calc(72px + env(safe-area-inset-bottom, 0px));
          }
          .mobile-contact-bar {
            position: fixed;
            inset-inline: 0;
            bottom: 0;
            z-index: 5;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 8px;
            box-sizing: border-box;
            padding: 10px max(12px, env(safe-area-inset-right, 0px))
              calc(10px + env(safe-area-inset-bottom, 0px))
              max(12px, env(safe-area-inset-left, 0px));
            background: #fff;
            border-top: 1px solid #d7dee8;
            box-shadow: 0 -2px 12px rgb(0 0 0 / 8%);
          }
          .mobile-contact-bar a,
          .mobile-contact-bar button {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            min-width: 0;
            min-height: 48px;
            padding: 8px;
            border: 1px solid #3158ad;
            border-radius: 6px;
            font: inherit;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.3;
            text-align: center;
            text-decoration: none;
            overflow-wrap: anywhere;
            cursor: pointer;
          }
          .mobile-contact-bar a { color: #3158ad; background: #fff; }
          .mobile-contact-bar button { color: #fff; background: #3158ad; }
          .mobile-contact-bar :focus-visible {
            outline: 3px solid #243e78;
            outline-offset: 3px;
          }
          :global(body:has(dialog[open])) .mobile-contact-bar,
          :global(body:has([role='dialog'][aria-modal='true']:not([hidden]))) .mobile-contact-bar {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}
