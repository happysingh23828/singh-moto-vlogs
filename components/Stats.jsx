function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function Stats({ youtube, instagram, lastUpdated }) {
  const stats = [
    {
      label: 'YouTube Subscribers',
      value: formatNumber(youtube?.subscribers || 0),
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      gradient: 'from-red-500 to-red-600'
    },
    {
      label: 'YouTube Views',
      value: formatNumber(youtube?.views || 0),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: 'from-red-500 to-red-600'
    },
    {
      label: 'Instagram Followers',
      value: formatNumber(instagram?.followers || 0),
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.609.043 6.298.104c-1.31.061-2.205.265-2.99.565a5.893 5.893 0 0 0-2.137.884A5.893 5.893 0 0 0 .57 3.635c-.3.785-.504 1.68-.565 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.104 5.719c.061 1.31.265 2.205.565 2.99a5.893 5.893 0 0 0 .884 2.137 5.893 5.893 0 0 0 2.137.884c.785.3 1.68.504 2.99.565 1.31.061 2.097.104 5.719.104s4.408-.043 5.719-.104c1.31-.061 2.205-.265 2.99-.565a5.893 5.893 0 0 0 2.137-.884 5.893 5.893 0 0 0 .884-2.137c.3-.785.504-1.68.565-2.99.061-1.31.104-2.097.104-5.719s-.043-4.408-.104-5.719c-.061-1.31-.265-2.205-.565-2.99a5.893 5.893 0 0 0-.884-2.137A5.893 5.893 0 0 0 21.005.569c-.785-.3-1.68-.504-2.99-.565C16.425.043 15.638 0 12.017 0zm0 1.864c3.539 0 3.955.014 5.351.078 1.297.062 1.996.276 2.455.458a4.029 4.029 0 0 1 1.453 1.453c.182.459.396 1.158.458 2.455.064 1.396.078 1.812.078 5.351s-.014 3.955-.078 5.351c-.062 1.297-.276 1.996-.458 2.455a4.029 4.029 0 0 1-1.453 1.453c-.459.182-1.158.396-2.455.458-1.396.064-1.812.078-5.351.078s-3.955-.014-5.351-.078c-1.297-.062-1.996-.276-2.455-.458a4.029 4.029 0 0 1-1.453-1.453c-.182-.459-.396-1.158-.458-2.455C1.879 15.972 1.865 15.556 1.865 12.017s.014-3.955.078-5.351c.062-1.297.276-1.996.458-2.455a4.029 4.029 0 0 1 1.453-1.453c.459-.182 1.158-.396 2.455-.458 1.396-.064 1.812-.078 5.351-.078zm0 2.796a7.151 7.151 0 1 0 0 14.302 7.151 7.151 0 0 0 0-14.302zm0 11.772a4.621 4.621 0 1 1 0-9.242 4.621 4.621 0 0 1 0 9.242zm7.717-10.286a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z"/>
        </svg>
      ),
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      label: 'Instagram Posts',
      value: formatNumber(instagram?.posts || 0),
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-purple-500'
    }
  ]

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Creator Stats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time social media metrics and engagement data
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card text-center group">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Last Updated */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Last updated: {lastUpdated ? formatDate(lastUpdated) : 'Never'}
          </p>
        </div>
      </div>
    </section>
  )
}

