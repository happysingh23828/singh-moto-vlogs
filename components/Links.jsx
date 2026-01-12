// Function to format numbers with commas
function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Links({ stats }) {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@singh_moto_vlogs',
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      gradient: 'from-red-500 to-red-600',
      description: 'Watch motorcycle adventures & travel vlogs',
      stats: formatNumberWithCommas(stats?.youtube?.subscribers || 0) + ' subscribers'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/singh_moto_vlogs',
      icon: (
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.609.043 6.298.104c-1.31.061-2.205.265-2.99.565a5.893 5.893 0 0 0-2.137.884A5.893 5.893 0 0 0 .57 3.635c-.3.785-.504 1.68-.565 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.104 5.719c.061 1.31.265 2.205.565 2.99a5.893 5.893 0 0 0 .884 2.137 5.893 5.893 0 0 0 2.137.884c.785.3 1.68.504 2.99.565 1.31.061 2.097.104 5.719.104s4.408-.043 5.719-.104c1.31-.061 2.205-.265 2.99-.565a5.893 5.893 0 0 0 2.137-.884 5.893 5.893 0 0 0 .884-2.137c.3-.785.504-1.68.565-2.99.061-1.31.104-2.097.104-5.719s-.043-4.408-.104-5.719c-.061-1.31-.265-2.205-.565-2.99a5.893 5.893 0 0 0-.884-2.137A5.893 5.893 0 0 0 21.005.569c-.785-.3-1.68-.504-2.99-.565C16.425.043 15.638 0 12.017 0zm0 1.864c3.539 0 3.955.014 5.351.078 1.297.062 1.996.276 2.455.458a4.029 4.029 0 0 1 1.453 1.453c.182.459.396 1.158.458 2.455.064 1.396.078 1.812.078 5.351s-.014 3.955-.078 5.351c-.062 1.297-.276 1.996-.458 2.455a4.029 4.029 0 0 1-1.453 1.453c-.459.182-1.158.396-2.455.458-1.396.064-1.812.078-5.351.078s-3.955-.014-5.351-.078c-1.297-.062-1.996-.276-2.455-.458a4.029 4.029 0 0 1-1.453-1.453c-.182-.459-.396-1.158-.458-2.455C1.879 15.972 1.865 15.556 1.865 12.017s.014-3.955.078-5.351c.062-1.297.276-1.996.458-2.455a4.029 4.029 0 0 1 1.453-1.453c.459-.182 1.158-.396 2.455-.458 1.396-.064 1.812-.078 5.351-.078zm0 2.796a7.151 7.151 0 1 0 0 14.302 7.151 7.151 0 0 0 0-14.302zm0 11.772a4.621 4.621 0 1 1 0-9.242 4.621 4.621 0 0 1 0 9.242zm7.717-10.286a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z"/>
        </svg>
      ),
      gradient: 'from-pink-500 via-purple-500 to-pink-600',
      description: 'Daily photos & behind-the-scenes content',
      stats: formatNumberWithCommas(stats?.instagram?.followers || 0) + ' followers'
    },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61585615797386',
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-600',
    description: 'Community discussions & updates',
    stats: 'Join the community'
  },
  {
    name: 'Email',
    url: 'mailto:singh.motovlogs@gmail.com',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-gray-600 to-gray-700',
    description: 'Collaboration & business inquiries',
    stats: 'Get in touch'
  }
]

  // Function to get platform-specific colors
  function getPlatformColor(platform) {
    const colors = {
      'YouTube': '#dc2626', // Red
      'Instagram': '#e4405f', // Instagram pink
      'Facebook': '#1877f2', // Facebook blue
      'Email': '#6b7280' // Gray
    }
    return colors[platform] || 'var(--accent)'
  }
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            Connect With Me
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Follow my journey across all platforms and let's connect
          </p>
        </div>

        {/* Compact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== 'Email' && link.name !== 'GEAR' ? '_blank' : undefined}
              rel={link.name !== 'Email' && link.name !== 'GEAR' ? 'noopener noreferrer' : undefined}
              className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/50"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333'
              }}
            >
              {/* Platform Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: getPlatformColor(link.name) }}>
                {link.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold truncate" style={{ color: 'var(--text-light)' }}>
                    {link.name}
                  </h3>
                  <div className="text-sm opacity-75" style={{ color: 'var(--accent)' }}>
                    {link.stats}
                  </div>
                </div>
                <p className="text-sm mt-1 truncate" style={{ color: 'var(--text-muted)' }}>
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" style={{ color: getPlatformColor(link.name) }} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Compact Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 p-6 rounded-xl" style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #333'
          }}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" style={{ color: 'var(--text-light)' }} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-light)' }}>
                  Let's Collaborate!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Drop me a message
                </p>
              </div>
            </div>
            <a href="mailto:singh.motovlogs@gmail.com" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
