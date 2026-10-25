import { Shell } from '../components/InnerPages';
import ClinicTeam from '../components/ClinicTeam';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata({ title: 'Our Dentists', description: 'Meet Dental Surgeon Dr. Hamza Anwar Chaudhary and Lady Dental Surgeon Dr. Maham Raza at H&M Dental Care in Kharian.' });

export default function DoctorsPage() {
  return <Shell title="Meet your dentists" kind="doctors"><ClinicTeam /></Shell>;
}
