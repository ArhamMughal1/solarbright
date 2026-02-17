import { Metadata } from 'next'
import Hero from '@/components/Solar/Hero'
import Features from '@/components/Solar/Features'
import HowItWorks from '@/components/Solar/HowItWorks'
import Benefits from '@/components/Solar/Benefits'
import Pricing from '@/components/Solar/Pricing'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/Solar/FAQ'
import { JsonLd } from '@/components/SEO/JsonLd'

// Enhanced metadata for home page
export const metadata: Metadata = {
  title: 'SolarBright Energy - #1 Solar Panel Installation Company | Save Up to 70%',
  description:
    'Transform your home with clean, renewable solar energy. Expert solar panel installation with 25-year warranty. Save up to 70% on electricity bills. Free consultation & quote. Serving CA, AZ, TX, and more.',
  keywords: [
    'solar panel installation',
    'solar energy company',
    'residential solar panels',
    'commercial solar installation',
    'solar power systems',
    'solar panel cost',
    'solar installers near me',
    'renewable energy',
    'solar panel warranty',
    'solar financing',
  ],
  openGraph: {
    title: 'SolarBright Energy - Professional Solar Panel Installation',
    description:
      'Save up to 70% on energy bills with professional solar installation. Free consultation available.',
    url: 'https://solarbright.com',
    siteName: 'SolarBright Energy',
    images: [
      {
        url: '/images/og-home-solar.png',
        width: 1200,
        height: 630,
        alt: 'SolarBright Solar Panel Installation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarBright Energy - Solar Panel Installation',
    description: 'Save up to 70% on electricity with professional solar installation.',
    images: ['/images/twitter-home-solar.png'],
  },
  alternates: {
    canonical: 'https://solarbright.com',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SolarBright Energy - Solar Panel Installation',
          description:
            'Professional solar panel installation services for homes and businesses.',
          url: 'https://solarbright.com',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://solarbright.com',
              },
            ],
          },
        }}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Solar Panel Installation',
          provider: {
            '@type': 'Organization',
            name: 'SolarBright Energy',
          },
          description: 'Professional solar panel installation services',
          areaServed: {
            '@type': 'Country',
            name: 'United States',
          },
          offers: {
            '@type': 'Offer',
            description: 'Free consultation and quote',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500',
          },
        }}
      />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
    </>
  )
}
