import Image from 'next/image'

export default function Hero({ avatar, title }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white via-purple-50 to-pink-50">
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Profile Image */}
        <div className="mb-10">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin opacity-75 blur-sm" style={{animationDuration: '8s'}}></div>

            {/* Main border */}
            <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full p-1 shadow-inner">
                <Image
                  src={avatar || '/profile_pic.jpg'}
                  alt={title}
                  width={160}
                  height={160}
                  className="w-full h-full rounded-full object-cover shadow-lg"
                  priority
                  onError={(e) => {
                    e.target.src = '/profile_pic.jpg'
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-xs font-bold">🏍️</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
              <span className="text-white text-xs font-bold">📹</span>
            </div>
          </div>
        </div>

        {/* Enhanced Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text animate-pulse">{title}</span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-xl sm:text-3xl text-gray-700 mb-12 font-light tracking-wide">
          Motorcycle • Travel • Daily Vlogs
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#stats"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View My Stats
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#about"
            className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn My Story
            </span>
          </a>
        </div>

      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
