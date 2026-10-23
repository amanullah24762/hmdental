const CLINIC_NAME = 'H&M Dental Care';

/**
 * Build page metadata without assuming a public domain or social image.
 * Example: createPageMetadata({ title: 'About', description: approvedSummary })
 * Canonicals, when supplied, must be absolute HTTP(S) URLs.
 * Launch restrictions remain explicit; this helper cannot enable indexing.
 *
 * @param {{ title?: string, description?: string, canonicalUrl?: string,
 *   openGraphTitle?: string, openGraphDescription?: string }} options
 * @returns {import('next').Metadata}
 */
export function createPageMetadata({
  title,
  description,
  canonicalUrl,
  openGraphTitle,
  openGraphDescription,
} = {}) {
  const pageTitle = title?.trim() || CLINIC_NAME;
  const brandedTitle = pageTitle.toLowerCase().includes(CLINIC_NAME.toLowerCase())
    ? pageTitle
    : `${pageTitle} | ${CLINIC_NAME}`;
  const summary = description?.trim();
  const socialDescription = openGraphDescription?.trim() || summary;
  let canonical;

  if (canonicalUrl !== undefined) {
    canonical = canonicalUrl.trim();
    const parsed = new URL(canonical);
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) {
      throw new TypeError('canonicalUrl must be an absolute HTTP(S) URL without credentials.');
    }
  }

  return {
    // Avoid applying a parent title template to an already branded title.
    title: { absolute: brandedTitle },
    ...(summary ? { description: summary } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    robots: { index: false, follow: false },
    openGraph: {
      title: openGraphTitle?.trim() || brandedTitle,
      ...(socialDescription ? { description: socialDescription } : {}),
    },
  };
}
