import './globals.css';
import './booking.css';
import './navigation.css';
import './alignment.css';
import './hm-clinic.css';
import BookingWidget from './components/BookingWidget';
import MobileContactBar from './components/MobileContactBar';

export const metadata = {
  title: 'H&M Dental Care | Website Concept',
  description: 'A family-focused dental website concept for H&M Dental Care in Kharian, Pakistan. Explore care categories and contact the clinic.',
  robots: { index: false, follow: false },
  icons: { icon: '/images/hm-dental-logo.jpeg' },
};

export default function RootLayout({ children }) {
  // Grammarly adds body attributes before hydration; suppress only this element's mismatch.
  return <html lang="en"><body suppressHydrationWarning>{children}<BookingWidget /><MobileContactBar /></body></html>;
}
