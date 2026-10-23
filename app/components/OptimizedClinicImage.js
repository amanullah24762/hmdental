'use client';
import { useState } from 'react';
import Image from 'next/image';
import ImageFallback from './ImageFallback';

/** Keep the existing image frame, including when the source fails. */
export default function OptimizedClinicImage({ src, alt, className = '', priority = false, width = 1600, height = 1067 }) {
  const [failedSource, setFailedSource] = useState(null);
  if (failedSource === src) return <ImageFallback alt={alt} className={`clinic-image-fallback ${className}`} />;
  return <Image
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
    sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1200px) 60vw, 800px"
    quality={75}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
    onError={() => setFailedSource(src)}
  />;
}
