import { DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { JsonLd } from '@/components/SEO/JsonLd'
import FloatingChat from '@/components/FloatingChat'
import WhatsAppChat from '@/components/WhatsAppChat'

// Optimize font loading with display swap
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

// Comprehensive metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://solarbright.com'), // Update with your actual domain
  title: {
    default: 'SolarBright Energy - Professional Solar Panel Installation Services',
    template: '%s | SolarBright Energy',
  },
  description:
    'Transform your home or business with clean, renewable solar energy. SolarBright offers expert solar panel installation, maintenance, and energy solutions. Save money while saving the planet. Free consultation available.',
  keywords: [
    'solar panel installation',
    'solar energy',
    'residential solar',
    'commercial solar',
    'solar panels',
    'renewable energy',
    'solar power',
    'solar installation near me',
    'solar energy company',
    'green energy',
    'solar panel cost',
    'solar installers',
  ],
  authors: [{ name: 'SolarBright Energy Team' }],
  creator: 'SolarBright Energy',
  publisher: 'SolarBright Energy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solarbright.com',
    siteName: 'SolarBright Energy',
    title: 'SolarBright Energy - Professional Solar Panel Installation',
    description:
      'Expert solar panel installation for homes and businesses. Save up to 70% on energy bills with clean, renewable solar power.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SolarBright Energy Solar Installations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolarBright Energy - Solar Panel Installation',
    description:
      'Professional solar installation services. Save money and the planet with renewable energy.',
    images: ['/images/twitter-image.png'],
    creator: '@solarbright', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://solarbright.com',
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
}

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        
        {/* Structured Data - Organization */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SolarBright Energy',
            url: 'https://solarbright.com',
            logo: 'https://solarbright.com/images/logo/logo.png',
            description:
              'Leading solar panel installation company providing residential and commercial renewable energy solutions.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Green Energy Blvd',
              addressLocality: 'San Diego',
              addressRegion: 'CA',
              postalCode: '92101',
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-800-SOLAR-00',
              contactType: 'Customer Service',
              email: 'info@solarbright.com',
              availableLanguage: ['English'],
              areaServed: 'US',
            },
            sameAs: [
              'https://facebook.com/solarbright',
              'https://twitter.com/solarbright',
              'https://linkedin.com/company/solarbright',
              'https://instagram.com/solarbright',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '500',
            },
          }}
        />

        {/* Structured Data - Website */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'SolarBright Energy',
            url: 'https://solarbright.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://solarbright.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }}
        />

        {/* Structured Data - Local Business */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SolarBright Energy',
            image: 'https://solarbright.com/images/logo/logo.png',
            '@id': 'https://solarbright.com',
            url: 'https://solarbright.com',
            telephone: '+1-800-SOLAR-00',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Green Energy Blvd',
              addressLocality: 'San Diego',
              addressRegion: 'CA',
              postalCode: '92101',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 32.7157,
              longitude: -117.1611,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '500',
            },
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
          disableTransitionOnChange={false}
        >
          <Aoscompo>
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <FloatingChat />
          <WhatsAppChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
