import './globals.css'

export const metadata = {
  title: 'Happy Singh - Digital Creator | Motorcycle Travel Vlogs',
  description: 'Join Happy Singh on epic motorcycle adventures, travel explorations, and daily vlogging. Ride • Travel • Explore from Bengaluru, India 🇮🇳',
  keywords: 'motorcycle, travel, vlogs, content creator, happy singh, singh moto vlogs, bengaluru, india, adventure, riding',
  authors: [{ name: 'Happy Singh' }],
  creator: 'Happy Singh',
  publisher: 'Singh Moto Vlogs',
  robots: 'index, follow',
  openGraph: {
    title: 'Happy Singh - Digital Creator | Motorcycle Travel Vlogs',
    description: 'Join Happy Singh on epic motorcycle adventures, travel explorations, and daily vlogging from Bengaluru, India 🇮🇳',
    url: 'https://singhmotovlogs.com',
    siteName: 'Singh Moto Vlogs',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://singhmotovlogs.com/profile_pic.jpg',
        width: 1200,
        height: 630,
        alt: 'Happy Singh - Motorcycle Travel Content Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Singh - Digital Creator | Motorcycle Travel Vlogs',
    description: 'Join Happy Singh on epic motorcycle adventures, travel explorations, and daily vlogging from Bengaluru, India 🇮🇳',
    images: ['https://singhmotovlogs.com/profile_pic.jpg'],
    creator: '@singh_moto_vlogs',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/profile_pic.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/profile_pic.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Happy Singh',
    alternateName: 'Singh Moto Vlogs',
    description: 'Digital content creator specializing in motorcycle travel vlogs, adventure content, and travel explorations from Bengaluru, India',
    image: 'https://singhmotovlogs.com/profile_pic.jpg',
    url: 'https://singhmotovlogs.com',
    sameAs: [
      'https://www.youtube.com/@singh_moto_vlogs',
      'https://www.instagram.com/singh_moto_vlogs',
      'https://www.facebook.com/profile.php?id=61585615797386'
    ],
    knowsAbout: [
      'Motorcycle Travel',
      'Content Creation',
      'Travel Vlogging',
      'Adventure Photography',
      'Digital Marketing'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'India'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'email',
      email: 'singh.motovlogs@gmail.com'
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Favicon links for better browser support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/jpeg" sizes="192x192" href="/profile_pic.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/profile_pic.jpg" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

