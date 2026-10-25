import Link from 'next/link';
import { clinic } from './clinic';

export default function SiteFooter() {
  return <footer className="hm-footer">
    <div className="hm-footer-content">
      <Link className="hm-footer-identity" href="/" aria-label="H&M Dental Care home">
        <img src="/images/hm-dental-logo.webp" width="64" height="64" alt="" />
        <span>H&amp;M Dental Care</span>
      </Link>
      <p className="hm-footer-tagline">A little care. A brighter smile.</p>
      <nav className="hm-footer-links" aria-label="Footer navigation">
        <Link href="/about">About</Link><Link href="/services">Services</Link>
        <Link href="/doctors">Our doctors</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact</Link><Link href="/appointments">Appointments</Link><Link href="/#reviews">Patient feedback</Link>
      </nav>
      <div className="hm-footer-visit">
        <span className="hm-footer-location">VISIT US IN KHARIAN</span>
        <p>{clinic.address}</p>
        <div className="hm-footer-actions">
          <a href={clinic.telephone}><span>Call the clinic</span><strong>{clinic.phone}</strong></a>
          <a href={clinic.mapURL} target="_blank" rel="noreferrer"><span>Plan your visit</span><strong>Get directions ↗</strong></a>
        </div>
      </div>
      <div className="hm-footer-base"><small>© {new Date().getFullYear()} H&amp;M Dental Care</small><a href="#main">Back to top ↑</a></div>
    </div>
  </footer>;
}
