import { useState } from 'react'

export default function Affiliates({ affiliates }) {
  const [expandedCategories, setExpandedCategories] = useState({})

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white via-purple-50 to-pink-50">
          {/* Animated background elements matching homepage */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8 shadow-lg">
              <span className="text-3xl">🏍️</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
              GEAR
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              A curated collection of equipment and tools I personally use and recommend for motorcycle vlogging and travel.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personally Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Updated Regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Categories */}
        <div className="space-y-6">
          {affiliates.categories.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              className={`bg-white rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'ring-2 ring-orange-200 bg-gradient-to-br from-orange-50/50 to-red-50/50' : ''
              }`}
            >
              {/* Category Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className={`w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left hover:bg-gray-50/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300 touch-manipulation ${
                  index === 0 ? 'hover:bg-orange-50/50' : ''
                }`}
                aria-expanded={expandedCategories[category.id] || false}
                aria-controls={`category-${category.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-700">
                        {category.items.length} items
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                      expandedCategories[category.id] ? 'rotate-180 bg-gray-100' : 'bg-gray-50'
                    }`}>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Category Content */}
              {expandedCategories[category.id] && (
                <div id={`category-${category.id}`} className="border-t border-gray-100">
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="text-gray-900 font-medium">{item.name}</span>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium text-sm underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
                            aria-label={`View ${item.name}`}
                          >
                            View →
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Affiliate Disclaimer */}
        <section className="mt-16">
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Affiliate Disclosure
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Some links on this page are affiliate links. If you click on them and make a purchase, I may receive a small commission at no extra cost to you. This helps support the creation of free content on this site. All recommendations are based on genuine personal use and experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="max-w-md mx-auto">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need Gear Recommendations?
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions about specific gear or need recommendations for your setup?
              </p>
              <a
                href="mailto:singh.motovlogs@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-400/50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl">🏍️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Singh Moto Vlogs
            </h3>
          </div>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Capturing the thrill of the ride, one adventure at a time.
            Join our motorcycle community and explore the world on two wheels.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="/affiliates" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">Gear</span>
              🏍️
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">Contact</span>
              📧
            </a>
            <a href="#social" className="text-gray-400 hover:text-white transition-colors duration-200">
              <span className="sr-only">Social Media</span>
              📱
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-2">
              © 2025 Singh Moto Vlogs. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ for the motorcycle community
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
