export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            About Singh Moto Vlogs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold gradient-text">Singh Moto Vlogs</span>, where the open road meets authentic storytelling.
              I'm passionate about capturing the thrill of motorcycle adventures, the beauty of travel destinations,
              and the everyday moments that make life extraordinary.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through my lens, you'll experience breathtaking landscapes, heart-pounding rides, and genuine connections
              with fellow travelers. Whether it's a solo journey through mountain passes or group rides with friends,
              every video tells a unique story of exploration and discovery.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Join me as I continue to push boundaries, discover new horizons, and share the pure joy of the ride.
              From sunrise mountain tops to sunset coastal highways, every mile brings a new adventure.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700">Motorcycle Enthusiast</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700">Travel Photographer</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700">Content Creator</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-gray-700">Storyteller</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Passion Driven
                </h3>

                <p className="text-gray-600 mb-6">
                  Every journey begins with a single ride. Every story starts with a single frame.
                  Every adventure awaits just beyond the horizon.
                </p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-sm text-gray-600">Miles Ridden</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-sm text-gray-600">Destinations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-gray-600">Passion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

