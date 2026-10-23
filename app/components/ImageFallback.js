export default function ImageFallback({ alt, className = '', style }) {
  return <div className={`image-fallback ${className}`} style={style} role="img" aria-label={`Image unavailable: ${alt}`}>
    <span aria-hidden="true">◇</span><strong>Image temporarily unavailable</strong>
    <small>{alt}</small>
  </div>;
}
