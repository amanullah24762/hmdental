const MESSAGE_TYPES = {
  info: { label: 'Information', color: '#244784', background: '#eef4fc' },
  success: { label: 'Success', color: '#176044', background: '#edf8f2' },
  error: { label: 'Error', color: '#922b32', background: '#fff1f2' },
};

/** Displays caller-supplied text; does not infer booking or confirmation status. */
export default function InlineMessage({ type = 'info', message, id }) {
  if (typeof message !== 'string' || !message.trim()) return null;

  const variant = Object.prototype.hasOwnProperty.call(MESSAGE_TYPES, type) ? type : 'info';
  const appearance = MESSAGE_TYPES[variant];

  return (
    <div
      id={id}
      className="clinic-inline-message"
      role={variant === 'error' ? 'alert' : 'status'}
      aria-atomic="true"
      style={{ color: appearance.color, backgroundColor: appearance.background }}
    >
      <strong>{appearance.label}: </strong>
      <span>{message}</span>
      <style>{`
        .clinic-inline-message {
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          padding: 12px 16px;
          border: 1px solid currentColor;
          border-inline-start-width: 4px;
          border-radius: 6px;
          font: inherit;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }
        .clinic-inline-message > strong { font-weight: 600; }
        .clinic-inline-message > span { white-space: pre-line; }
      `}</style>
    </div>
  );
}
