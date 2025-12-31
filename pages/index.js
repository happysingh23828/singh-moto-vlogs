import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Links from '../components/Links'
import Footer from '../components/Footer'

// Server-side function to read stats from JSON file
export function getStaticProps() {
  try {
    const statsPath = path.join(process.cwd(), 'data', 'stats.json')
    const statsData = fs.readFileSync(statsPath, 'utf8')
    const stats = JSON.parse(statsData)

    return {
      props: {
        stats
      }
    }
  } catch (error) {
    console.error('Error reading stats.json:', error)
    // Return fallback data if file doesn't exist or can't be read
    return {
      props: {
        stats: {
          youtube: {
            title: "Singh Moto Vlogs",
            avatar: "/profile_pic.jpg",
            subscribers: 0,
            views: 0
          },
          instagram: {
            followers: 1220,
            posts: 0
          },
          lastUpdated: new Date().toISOString()
        }
      }
    }
  }
}

export default function HomePage({ stats }) {
  return (
    <>
      <Head>
        <title>Singh Moto Vlogs - Motorcycle • Travel • Daily Vlogs</title>
        <meta name="description" content="Premium creator portfolio showcasing motorcycle adventures, travel vlogs, and daily content creation." />
        <meta name="keywords" content="motorcycle, travel, vlogs, creator, Singh Moto Vlogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />

      <main className="min-h-screen pt-16" style={{ backgroundColor: '#0f0f0f', color: '#f5f5f5' }}>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats stats={stats} />

        {/* About Section */}
        <About />

        {/* Links Section */}
        <Links />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
