function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Function to format numbers with commas (for smaller numbers like subscribers/followers)
function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Stats({ stats }) {

  const youtubeStats = [
    {
      label: 'Subscribers',
      value: formatNumberWithCommas(stats?.youtube?.subscribers || 3240),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" style={{ color: 'var(--text-light)' }} viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      label: 'Total Views',
      value: formatNumber(stats?.youtube?.views || 390516),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" style={{ color: 'var(--text-light)' }} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    }
  ]

  const instagramStats = [
    {
      label: 'Followers',
      value: formatNumberWithCommas(stats?.instagram?.followers || 1257),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" style={{ color: 'var(--text-light)' }} viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.609.043 6.298.104c-1.31.061-2.205.265-2.99.565a5.893 5.893 0 0 0-2.137.884A5.893 5.893 0 0 0 .57 3.635c-.3.785-.504 1.68-.565 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.104 5.719c.061 1.31.265 2.205.565 2.99a5.893 5.893 0 0 0 .884 2.137 5.893 5.893 0 0 0 2.137.884c.785.3 1.68.504 2.99.565 1.31.061 2.097.104 5.719.104s4.408-.043 5.719-.104c1.31-.061 2.205-.265 2.99-.565a5.893 5.893 0 0 0 2.137-.884 5.893 5.893 0 0 0 .884-2.137c.3-.785.504-1.68.565-2.99.061-1.31.104-2.097.104-5.719s-.043-4.408-.104-5.719c-.061-1.31-.265-2.205-.565-2.99a5.893 5.893 0 0 0-.884-2.137A5.893 5.893 0 0 0 21.005.569c-.785-.3-1.68-.504-2.99-.565C16.425.043 15.638 0 12.017 0zm0 1.864c3.539 0 3.955.014 5.351.078 1.297.062 1.996.276 2.455.458a4.029 4.029 0 0 1 1.453 1.453c.182.459.396 1.158.458 2.455.064 1.396.078 1.812.078 5.351s-.014 3.955-.078 5.351c-.062 1.297-.276 1.996-.458 2.455a4.029 4.029 0 0 1-1.453 1.453c-.459.182-1.158.396-2.455.458-1.396.064-1.812.078-5.351.078s-3.955-.014-5.351-.078c-1.297-.062-1.996-.276-2.455-.458a4.029 4.029 0 0 1-1.453-1.453c-.182-.459-.396-1.158-.458-2.455C1.879 15.972 1.865 15.556 1.865 12.017s.014-3.955.078-5.351c.062-1.297.276-1.996.458-2.455a4.029 4.029 0 0 1 1.453-1.453c.459-.182 1.158-.396 2.455-.458 1.396-.064 1.812-.078 5.351-.078zm0 2.796a7.151 7.151 0 1 0 0 14.302 7.151 7.151 0 0 0 0-14.302zm0 11.772a4.621 4.621 0 1 1 0-9.242 4.621 4.621 0 0 1 0 9.242zm7.717-10.286a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z"/>
        </svg>
      ),
    },
    {
      label: 'Total Views',
      value: formatNumber(stats?.instagram?.views || 0),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" style={{ color: 'var(--text-light)' }} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    }
  ]

  return (
    <section className="py-20 px-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            Social Media Stats
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Growing community across platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* YouTube Card */}
          <a
            href="https://www.youtube.com/@singh_moto_vlogs"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              border: '1px solid #ff0000',
              boxShadow: '0 8px 32px rgba(255, 0, 0, 0.1)'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 100, 50, 0.1) 100%)'
                 }}></div>

            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ff0000' }}>
                    <svg className="w-6 h-6" fill="currentColor" style={{ color: 'white' }} viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-light)' }}>YouTube</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{formatNumberWithCommas(stats?.youtube?.videos || 0)} videos</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75" style={{ color: 'var(--accent)' }}>▶ Watch</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {youtubeStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
                    <div className="text-2xl font-bold mb-1" style={{ color: 'var(--accent)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/singh_moto_vlogs"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              border: '1px solid #e4405f',
              boxShadow: '0 8px 32px rgba(228, 64, 95, 0.1)'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'linear-gradient(135deg, rgba(228, 64, 95, 0.1) 0%, rgba(142, 68, 173, 0.1) 100%)'
                 }}></div>

            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                    <svg className="w-6 h-6" fill="currentColor" style={{ color: 'white' }} viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.609.043 6.298.104c-1.31.061-2.205.265-2.99.565a5.893 5.893 0 0 0-2.137.884A5.893 5.893 0 0 0 .57 3.635c-.3.785-.504 1.68-.565 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.104 5.719c.061 1.31.265 2.205.565 2.99a5.893 5.893 0 0 0 .884 2.137 5.893 5.893 0 0 0 2.137.884c.785.3 1.68.504 2.99.565 1.31.061 2.097.104 5.719.104s4.408-.043 5.719-.104c1.31-.061 2.205-.265 2.99-.565a5.893 5.893 0 0 0 2.137-.884 5.893 5.893 0 0 0 .884-2.137c.3-.785.504-1.68.565-2.99.061-1.31.104-2.097.104-5.719s-.043-4.408-.104-5.719c-.061-1.31-.265-2.205-.565-2.99a5.893 5.893 0 0 0-.884-2.137A5.893 5.893 0 0 0 21.005.569c-.785-.3-1.68-.504-2.99-.565C16.425.043 15.638 0 12.017 0zm0 1.864c3.539 0 3.955.014 5.351.078 1.297.062 1.996.276 2.455.458a4.029 4.029 0 0 1 1.453 1.453c.182.459.396 1.158.458 2.455.064 1.396.078 1.812.078 5.351s-.014 3.955-.078 5.351c-.062 1.297-.276 1.996-.458 2.455a4.029 4.029 0 0 1-1.453 1.453c-.459.182-1.158.396-2.455.458-1.396.064-1.812.078-5.351.078s-3.955-.014-5.351-.078c-1.297-.062-1.996-.276-2.455-.458a4.029 4.029 0 0 1-1.453-1.453c-.182-.459-.396-1.158-.458-2.455C1.879 15.972 1.865 15.556 1.865 12.017s.014-3.955.078-5.351c.062-1.297.276-1.996.458-2.455a4.029 4.029 0 0 1 1.453-1.453c.459-.182 1.158-.396 2.455-.458 1.396-.064 1.812-.078 5.351-.078zm0 2.796a7.151 7.151 0 1 0 0 14.302 7.151 7.151 0 0 0 0-14.302zm0 11.772a4.621 4.621 0 1 1 0-9.242 4.621 4.621 0 0 1 0 9.242zm7.717-10.286a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-light)' }}>Instagram</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{formatNumberWithCommas(stats?.instagram?.posts || 0)} posts</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75" style={{ color: '#e4405f' }}>📸 Follow</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {instagramStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
                    <div className="text-2xl font-bold mb-1" style={{ color: '#e4405f' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

