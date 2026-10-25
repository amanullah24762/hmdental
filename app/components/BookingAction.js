'use client';

export const BOOKING_EVENT = 'family-dental:request-appointment';

export function requestBooking(service = '', trigger = document.activeElement) {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT, { detail: { service, trigger } }));
}

export default function BookingAction({ service = '', children = 'Book a Visit ↗', className = 'button', ...props }) {
  const hasArrow = typeof children === 'string' && /[↗→]$/.test(children.trim());
  return <button {...props} type="button" className={className} onClick={event => requestBooking(service, event.currentTarget)}>{hasArrow ? <><span>{children.trim().slice(0, -1).trim()}</span><span className="action-arrow" aria-hidden="true">{children.trim().slice(-1)}</span></> : children}</button>;
}
