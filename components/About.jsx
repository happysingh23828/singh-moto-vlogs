export default function About() {
  return (
    <section className="py-20 px-5" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            Meet Happy Singh
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            A rider who found freedom on two wheels and never looked back
          </p>
        </div>

        {/* About Content */}
        <div className="about-section">
          <div>
            <h3 className="text-3xl sm:text-4xl mb-6" style={{ color: 'var(--text-light)' }}>About Me</h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              I'm Happy Singh — a rider who believes the best therapy is a long highway
              and a full tank.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              From Bengaluru to Bihar (4200 KM), solo and with my wife, I document real
              motorcycle journeys — no drama, just roads and stories.
            </p>

            <div>
              <a href="mailto:singh.motovlogs@gmail.com" className="btn">🔥 Let's Collaborate</a>
            </div>
          </div>

          <div>
            <img
              src="/profile_pic.jpg"
              alt="Happy Singh - Moto Rider"
              className="about-image hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

