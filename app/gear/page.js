import fs from 'fs'
import path from 'path'
import Navigation from '../../components/Navigation'
import Affiliates from '../../components/Affiliates'

// Server-side function to read gear from JSON file
export function generateStaticParams() {
  return []
}

export async function generateMetadata() {
  return {
    title: 'GEAR - Singh Moto Vlogs',
    description: 'Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend. Based on real-world testing and experience.',
    keywords: 'motorcycle gear, vlogging equipment, camera gear, riding gear, gear recommendations, Singh Moto Vlogs',
    openGraph: {
      title: 'GEAR - Singh Moto Vlogs',
      description: 'Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend.',
      image: '/profile_pic.jpg',
      url: 'https://singhmotovlogs.com/gear',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GEAR - Singh Moto Vlogs',
      description: 'Curated list of motorcycle gear, vlogging equipment, and travel essentials I personally use and recommend.',
      image: '/profile_pic.jpg',
    },
  }
}

async function getAffiliates() {
  try {
    const gearPath = path.join(process.cwd(), 'data', 'affiliates.json')
    const gearData = fs.readFileSync(gearPath, 'utf8')
    return JSON.parse(gearData)
  } catch (error) {
    console.error('Error reading affiliates.json:', error)
    return { categories: [] }
  }
}

export default async function GearPage() {
  const affiliates = await getAffiliates()

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <main className="min-h-screen pt-16">
        <Affiliates affiliates={affiliates} />
      </main>
    </div>
  )
}
