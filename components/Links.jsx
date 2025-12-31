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
    stats: '3.2K+ subscribers'
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
    stats: '1.2K+ followers'
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
    name: 'GEAR',
    url: '/gear',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    description: 'Curated gear list with personal recommendations',
    stats: 'Cameras • Tools • Gear'
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

export default function Links() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow my journey across all platforms and let's connect
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== 'Email' && link.name !== 'GEAR' ? '_blank' : undefined}
              rel={link.name !== 'Email' && link.name !== 'GEAR' ? 'noopener noreferrer' : undefined}
              className="group block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${link.gradient} p-6 relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>

                    {/* Title and Stats */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {link.name}
                      </h3>
                      <p className="text-white/90 text-sm font-medium">
                        {link.stats}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {link.description}
                </p>

                {/* Action indicator */}
                <div className="flex items-center text-sm font-medium text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {link.name === 'Email' ? 'Send message' : 'Visit profile'}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether it's brand partnerships, collaborations, or just connecting with a fellow rider,
              I'd love to hear from you!
            </p>
            <a
              href="mailto:singh.motovlogs@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Let's Create Something Amazing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
