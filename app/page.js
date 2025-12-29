import fs from 'fs'
import path from 'path'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Links from '../components/Links'

// Server-side function to read stats from JSON file
function getStats() {
  try {
    const statsPath = path.join(process.cwd(), 'data', 'stats.json')
    const statsData = fs.readFileSync(statsPath, 'utf8')
    return JSON.parse(statsData)
  } catch (error) {
    console.error('Error reading stats.json:', error)
    // Return fallback data if file doesn't exist or can't be read
    return {
      youtube: {
        title: "Singh Moto Vlogs",
        avatar: "/placeholder-avatar.jpg",
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

export default function HomePage() {
  // Read stats on server-side
  const stats = getStats()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        avatar={stats.youtube.avatar}
        title={stats.youtube.title}
      />

      {/* Stats Section */}
      <Stats
        youtube={stats.youtube}
        instagram={stats.instagram}
        lastUpdated={stats.lastUpdated}
      />

      {/* About Section */}
      <About />

      {/* Links Section */}
      <Links />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Singh Moto Vlogs. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with ❤️ for the motorcycle community
          </p>
        </div>
      </footer>
    </main>
  )
}

