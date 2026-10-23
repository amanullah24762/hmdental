import { notFound } from 'next/navigation';
import { services } from '../../components/services';
import { ServicePage } from '../../components/InnerPages';
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const service = services.find(s => s.slug === slug); return { title: `${service?.title || 'Service not found'} | H&M Dental Care` }; }
export default async function Page({ params }) { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) notFound(); return <ServicePage service={service} />; }
