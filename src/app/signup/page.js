'use client'

import { Rocket, Check, Mail, Calendar, Lock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyWebsite: '',
    industry: '',
    challenges: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-400 rounded-sm flex items-center justify-center">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">AI Trial Hub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/apps" className="text-gray-700 hover:text-gray-900 font-medium">Apps</a>
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">How It Works</Link>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Start Free
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 mb-6">
              <Rocket className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 font-medium">Enhanced Access</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Want More AI Validation? Get Unlimited Access
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Already validating business issues with AI? Get unlimited requests, priority support, and exclusive access to new tools before anyone else.
            </p>
          </div>

          {/* Form and Sidebar Layout */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="companyWebsite"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="www.google.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="e.g., Technology, Healthcare"
                        required
                      />
                    </div>
                  </div>

                  {/* Challenges Textarea */}
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                      What challenges are you ready to solve?
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                      placeholder="Describe the business challenges you're looking to address ..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
                  >
                    <Rocket className="w-5 h-5" />
                    <span>Upgrade My Access</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="space-y-6">
              {/* What You Get Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Unlimited AI test requests</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Priority access to new tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Dedicated support</span>
                  </li>
                </ul>
              </div>

              {/* Need Help Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <a href="mailto:amiinehachemi@gmail.com" className="text-gray-600 hover:text-teal-600">Email us at amiinehachemi@gmail.com</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <a href="https://calendly.com/amiinehachemi/30min" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600">Book a 30-min free consultation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Feature Sections */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {/* Unlimited Validation */}
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited Validation</h3>
                  <p className="text-gray-600">Validate your business issues or solutions within minutes depending on the use case. No restrictions.</p>
                </div>
              </div>
            </div>

            {/* Priority Access */}
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Priority Access</h3>
                  <p className="text-gray-600">Get first access to new AI tools before public release.</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  )
}
