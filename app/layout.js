import './globals.css';
import './booking.css';
import './navigation.css';
import './alignment.css';
import './hm-clinic.css';
import './inner-pages.css';
import './mobile-layout.css';
import BookingWidget from './components/BookingWidget';
import MobileContactBar from './components/MobileContactBar';
import { clinic } from './components/clinic';

export const metadata = {
  title: 'H&M Dental Care | Dental Clinic in Kharian',
  description: 'Visit H&M Dental Care on Kharian Dinga Road. Meet Dr. Hamza Anwar Chaudhary and Dr. Maham Raza, explore dental services and request an appointment.',
  robots: { index: true, follow: true },
  icons: { icon: '/images/hm-dental-logo.webp' },
};

export default function RootLayout({ children }) {
  // Grammarly adds body attributes before hydration; suppress only this element's mismatch.
  const clinicData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinic.name,
    telephone: clinic.telephone.replace('tel:', ''),
    address: { '@type': 'PostalAddress', streetAddress: 'QRMV+52Q, Kharian Dinga Rd', addressLocality: 'Kharian', addressCountry: 'PK' },
    hasMap: clinic.mapURL,
  };
  return <html lang="en"><body suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicData).replace(/</g, '\\u003c') }} />{children}<BookingWidget /><MobileContactBar /></body></html>;
}
