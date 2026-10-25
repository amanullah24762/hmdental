import Link from 'next/link';
import { Shell } from './components/InnerPages';

export default function NotFound() {
  return <Shell title="Page not found"><section className="inner-section container"><h2>Let’s get you to the right place.</h2><p>This page may have moved. Browse our services or contact the clinic for help.</p><Link className="button" href="/services"><span>Explore services</span><span className="action-arrow" aria-hidden="true">↗</span></Link></section></Shell>;
}
