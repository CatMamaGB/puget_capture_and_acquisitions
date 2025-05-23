import Link from 'next/link'
import { IconBriefcase, IconClipboardCheck, IconCompass } from '@tabler/icons-react'

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col h-full">
      <div className="text-blue-600 mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-6 flex-grow">{description}</p>
      <Link 
        href={href}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </Link>
    </article>
  );
}

export default function Services() {
  const services = [
    {
      title: 'GSA Schedule Services',
      description: 'Expert guidance through GSA Schedule preparation, submission, and maintenance. We help you navigate the complex process with confidence.',
      href: '/services/gsa-schedule',
      icon: <IconBriefcase size={32} />,
    },
    {
      title: 'Contract Management Services',
      description: 'Comprehensive support for federal contract compliance and optimization. Keep your contracts in good standing and maximize their value.',
      href: '/services/contract-management',
      icon: <IconClipboardCheck size={32} />,
    },
    {
      title: 'Federal Advisory Services',
      description: 'Strategic guidance for success in the federal marketplace. Make informed decisions and capture the right opportunities for your business.',
      href: '/services/federal-advisory',
      icon: <IconCompass size={32} />,
    },
  ];

  return (
    <section 
      className="max-w-7xl mx-auto py-16 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 
          id="services-heading" 
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Our Services
        </h2>
        <p className="text-lg text-gray-700">
          Comprehensive support for your federal contracting journey, from initial market 
          entry to long-term growth and compliance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.href}
            {...service}
          />
        ))}
      </div>
    </section>
  )
} 