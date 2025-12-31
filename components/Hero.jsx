export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center px-10 py-20">
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-2">
          Singh Moto Vlogs
        </h1>
        <p className="text-lg sm:text-xl mb-5" style={{ color: 'var(--text-muted)' }}>
          Riding Stories • Long Distance • Real India 🇮🇳
        </p>
        <p className="highlight text-lg sm:text-xl mb-8">
          4200 KM Rides | Weekly Moto Vlogs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://www.youtube.com/@singh_moto_vlogs" target="_blank" rel="noopener noreferrer" className="btn">
            ▶ Watch on YouTube
          </a>
          <a href="mailto:singh.motovlogs@gmail.com" className="btn secondary">
            🤝 Work With Me
          </a>
        </div>
      </div>
    </section>
  )
}
