import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Affiliates from '../components/Affiliates'

// Server-side function to read gear from JSON file
export function getStaticProps() {
  try {
    const gearPath = path.join(process.cwd(), 'data', 'affiliates.json')
    const gearData = fs.readFileSync(gearPath, 'utf8')
    const affiliates = JSON.parse(gearData)

    return {
      props: {
        affiliates
      }
    }
  } catch (error) {
    console.error('Error reading affiliates.json:', error)
    // Return fallback data if file doesn't exist or can't be read
    return {
      props: {
        affiliates: {
          categories: []
        }
      }
    }
  }
}

export default function AffiliatesPage({ affiliates }) {
  return (
    <>
      <Head>
        <title>GEAR - Singh Moto Vlogs</title>
        <meta name="description" content="Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend. Based on real-world testing and experience." />
        <meta name="keywords" content="motorcycle gear, vlogging equipment, camera gear, riding gear, gear recommendations, Singh Moto Vlogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="GEAR - Singh Moto Vlogs" />
        <meta property="og:description" content="Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend." />
        <meta property="og:image" content="/profile_pic.jpg" />
        <meta property="og:url" content="https://singhmotovlogs.com/gear" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEAR - Singh Moto Vlogs" />
        <meta name="twitter:description" content="Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend." />
        <meta name="twitter:image" content="/profile_pic.jpg" />
      </Head>

      <main className="min-h-screen">
        <Affiliates affiliates={affiliates} />
      </main>
    </>
  )
}
