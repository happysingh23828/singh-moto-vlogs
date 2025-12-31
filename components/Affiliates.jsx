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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
      {/* Compact Hero Section */}
      <section className="relative overflow-hidden py-12">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight" style={{ color: 'var(--accent)' }}>
              GEAR
            </h1>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              A curated collection of equipment and tools I personally use and recommend for motorcycle vlogging and travel. Every item listed here has been tested in real-world conditions and is currently part of my gear setup.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-green-900/30 border border-green-500/30" style={{ color: '#10b981' }}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Some links are affiliate links that support this content</span>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" style={{ color: 'var(--accent)' }} viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personally Tested</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" style={{ color: 'var(--accent)' }} viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real Experience</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" style={{ color: 'var(--accent)' }} viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Updated Regularly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Categories */}
        <div className="space-y-6">
          {affiliates.categories.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #222'
              }}
            >
              {/* Category Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left focus:outline-none transition-all duration-300 touch-manipulation hover:bg-gray-800"
                aria-expanded={expandedCategories[category.id] || false}
                aria-controls={`category-${category.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text-light)' }}>{category.name}</h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                        {category.items.length} items
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                      expandedCategories[category.id] ? 'rotate-180' : ''
                    }`} style={{ backgroundColor: '#2a2a2a' }}>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        style={{ color: 'var(--text-muted)' }}
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
                <div id={`category-${category.id}`} style={{ borderTop: '1px solid #333' }}>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center justify-between py-2 last:border-b-0" style={{ borderBottom: itemIndex < category.items.length - 1 ? '1px solid #333' : 'none' }}>
                          <div className="flex items-center space-x-3">
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }}></span>
                            <span className="font-medium" style={{ color: 'var(--text-light)' }}>{item.name}</span>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sm transition-colors hover:opacity-80"
                            style={{ color: 'var(--accent)' }}
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


      </main>

    </div>
  )
}
