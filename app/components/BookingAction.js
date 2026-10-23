'use client';

export const BOOKING_EVENT = 'family-dental:request-appointment';

export function requestBooking(service = '', trigger = document.activeElement) {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT, { detail: { service, trigger } }));
}

export default function BookingAction({ service = '', children = 'Book a Visit ↗', className = 'button', ...props }) {
  return <button {...props} type="button" className={className} onClick={event => requestBooking(service, event.currentTarget)}>{children}</button>;
}
