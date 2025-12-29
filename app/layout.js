import './globals.css'

export const metadata = {
  title: 'Singh Moto Vlogs - Motorcycle • Travel • Daily Vlogs',
  description: 'Premium creator portfolio showcasing motorcycle adventures, travel vlogs, and daily content creation.',
  keywords: 'motorcycle, travel, vlogs, creator, Singh Moto Vlogs',
  authors: [{ name: 'Singh Moto Vlogs' }],
  openGraph: {
    title: 'Singh Moto Vlogs',
    description: 'Motorcycle • Travel • Daily Vlogs',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

