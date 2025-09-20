'use client'

import { Search, Star, Play, Home, Filter, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AppsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedCompatibility, setSelectedCompatibility] = useState('')
  const [selectedTrial, setSelectedTrial] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [appsPerPage] = useState(6)

  const apps = [
    {
      id: 1,
      badge: 'Featured',
      rating: 4.8,
      trials: 'Popular',
      title: 'AI Content Summarizer',
      description: 'Instantly condense articles into key takeaways',
      compatibility: ['Works with Slack', '1-Click Trial'],
      category: 'Content & Marketing',
      industry: 'SaaS',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      badge: 'New This Week',
      rating: 4.6,
      trials: 'Active',
      title: 'Support Chatbot Pro',
      description: 'Turn calls into action items and next steps',
      compatibility: ['Zendesk', 'Guided Pilot'],
      category: 'Support & Ops',
      industry: 'E-commerce',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      badge: 'Popular',
      rating: 4.7,
      trials: '980',
      title: 'Lead Scoring AI',
      description: 'Create on-brand visuals from simple prompts',
      compatibility: ['HubSpot', 'API Available'],
      category: 'Sales & CRM',
      industry: 'SaaS',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      badge: 'Featured',
      rating: 4.9,
      trials: 'Trending',
      title: 'Document Extractor',
      description: 'Prioritize, draft, and clear your inbox faster',
      compatibility: ['API', '1-Click Trial'],
      category: 'Data & Analytics',
      industry: 'Healthcare',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      badge: 'New This Week',
      rating: 4.5,
      trials: '520',
      title: 'Email Writer AI',
      description: 'Chain tools and automate with AI logic',
      compatibility: ['Gmail', '1-Click Trial'],
      category: 'Content & Marketing',
      industry: 'Finance',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      badge: 'Popular',
      rating: 4.6,
      trials: '860',
      title: 'Security Log Analyzer',
      description: 'From data to decisions, instantly',
      compatibility: ['SIEM', 'Guided Pilot'],
      category: 'Security & IT',
      industry: 'SaaS',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      badge: 'Featured',
      rating: 4.7,
      trials: '890',
      title: 'Sales Pipeline Optimizer',
      description: 'Optimize your sales process with AI insights',
      compatibility: ['Works with Salesforce', '1-Click Trial'],
      category: 'Sales & CRM',
      industry: 'E-commerce',
      image: '/api/placeholder/300/200'
    },
    {
      id: 8,
      badge: 'New This Week',
      rating: 4.4,
      trials: '650',
      title: 'Customer Sentiment Analyzer',
      description: 'Analyze customer feedback and sentiment',
      compatibility: ['API Available', 'Guided Pilot'],
      category: 'Data & Analytics',
      industry: 'Healthcare',
      image: '/api/placeholder/300/200'
    },
    {
      id: 9,
      badge: 'Popular',
      rating: 4.8,
      trials: 'Hot',
      title: 'Marketing Campaign AI',
      description: 'Create and optimize marketing campaigns',
      compatibility: ['Works with HubSpot', '1-Click Trial'],
      category: 'Content & Marketing',
      industry: 'Finance',
      image: '/api/placeholder/300/200'
    }
  ]

  // Filter apps based on search and filters
  const filteredApps = apps.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = !selectedCategory || app.category === selectedCategory
    const matchesIndustry = !selectedIndustry || app.industry === selectedIndustry
    const matchesCompatibility = !selectedCompatibility || app.compatibility.includes(selectedCompatibility)
    const matchesTrial = !selectedTrial || app.compatibility.includes(selectedTrial)
    
    return matchesSearch && matchesCategory && matchesIndustry && matchesCompatibility && matchesTrial
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredApps.length / appsPerPage)
  const startIndex = (currentPage - 1) * appsPerPage
  const endIndex = startIndex + appsPerPage
  const currentApps = filteredApps.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleFilterChange = (filterType, value) => {
    setCurrentPage(1)
    switch(filterType) {
      case 'category':
        setSelectedCategory(value)
        break
      case 'industry':
        setSelectedIndustry(value)
        break
      case 'compatibility':
        setSelectedCompatibility(value)
        break
      case 'trial':
        setSelectedTrial(value)
        break
      default:
        break
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-400 rounded-sm flex items-center justify-center">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">AI Trial Hub</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/apps" className="text-teal-600 font-medium">Apps</a>
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">How It Works</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Start Free
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore AI Apps You Can Validate Issues With
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Validate your business issues or solutions within minutes depending on the use case. Browse featured tools, launch instant trials, and catch new drops every week.
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search apps, use cases, or vendors"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Filters</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700">Sort: Most Popular</span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Content Layout */}
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="category"
                        value=""
                        checked={selectedCategory === ''}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">All</span>
                    </label>
                    {['Content & Marketing', 'Sales & CRM', 'Support & Ops', 'Data & Analytics', 'Security & IT'].map((category) => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => handleFilterChange('category', e.target.value)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Industry */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Industry</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="industry"
                        value=""
                        checked={selectedIndustry === ''}
                        onChange={(e) => handleFilterChange('industry', e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">All</span>
                    </label>
                    {['SaaS', 'E-commerce', 'Healthcare', 'Finance'].map((industry) => (
                      <label key={industry} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="industry"
                          value={industry}
                          checked={selectedIndustry === industry}
                          onChange={(e) => handleFilterChange('industry', e.target.value)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Compatibility */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Compatibility</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="compatibility"
                        value=""
                        checked={selectedCompatibility === ''}
                        onChange={(e) => handleFilterChange('compatibility', e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">All</span>
                    </label>
                    {['Works with Slack', 'Works with HubSpot', 'Works with Salesforce', 'API Available'].map((compatibility) => (
                      <label key={compatibility} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="compatibility"
                          value={compatibility}
                          checked={selectedCompatibility === compatibility}
                          onChange={(e) => handleFilterChange('compatibility', e.target.value)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{compatibility}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Trial */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Trial</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="trial"
                        value=""
                        checked={selectedTrial === ''}
                        onChange={(e) => handleFilterChange('trial', e.target.value)}
                        className="text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">All</span>
                    </label>
                    {['1-Click Trial', 'Guided Pilot'].map((trial) => (
                      <label key={trial} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="trial"
                          value={trial}
                          checked={selectedTrial === trial}
                          onChange={(e) => handleFilterChange('trial', e.target.value)}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{trial}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - App Cards */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentApps.map((app) => (
                  <div key={app.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    {/* Badge */}
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        app.badge === 'Featured' ? 'bg-teal-100 text-teal-800' :
                        app.badge === 'New This Week' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {app.badge}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{app.rating}</span>
                      </div>
                    </div>

                    {/* Trials Count */}
                    <div className="text-sm text-gray-500 mb-4">
                      {app.trials} trials
                    </div>

                    {/* App Image Placeholder */}
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">App Preview</span>
                    </div>

                    {/* App Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {app.description}
                    </p>

                    {/* Compatibility Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.compatibility.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                        <Play className="w-4 h-4" />
                        <span>Try Now</span>
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &lt;
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-teal-500 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
