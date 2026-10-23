const SIZES = { small: 16, medium: 24, large: 36 };

/** size: 'small' | 'medium' | 'large'. No client-side JavaScript required. */
export default function LoadingIndicator({ label = 'Loading…', size = 'medium' }) {
  const diameter = Object.prototype.hasOwnProperty.call(SIZES, size) ? SIZES[size] : SIZES.medium;
  const statusLabel = typeof label === 'string' && label.trim() ? label : 'Loading…';

  return (
    <span className="clinic-loading-indicator" role="status" aria-live="polite" aria-atomic="true">
      <span
        className="clinic-loading-spinner"
        aria-hidden="true"
        style={{ width: diameter, height: diameter }}
      />
      <span className="clinic-loading-label">{statusLabel}</span>
      <style>{`
        .clinic-loading-indicator {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          max-width: 100%;
          min-width: 0;
          color: #3158ad;
          font: inherit;
          line-height: 1.5;
          vertical-align: middle;
        }
        .clinic-loading-indicator .clinic-loading-spinner {
          display: inline-block;
          box-sizing: border-box;
          flex-shrink: 0;
          border: 2px solid #d7dee8;
          border-top-color: #3158ad;
          border-right-color: #3158ad;
          border-radius: 50%;
          animation: clinic-loading-rotation 900ms linear infinite;
        }
        .clinic-loading-indicator .clinic-loading-label {
          min-width: 0;
          overflow-wrap: anywhere;
        }
        @keyframes clinic-loading-rotation {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .clinic-loading-indicator .clinic-loading-spinner { animation: none; }
        }
      `}</style>
    </span>
  );
}
