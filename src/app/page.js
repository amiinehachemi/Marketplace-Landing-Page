'use client'

import { Sparkles, Rocket, Play, Calendar, Menu, X, Zap, Monitor, Target, FileText, Mic, ImageIcon, Mail, Link, BarChart3, Grid3X3, Users, Twitter, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-400 rounded-sm flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">AI Trial Hub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">How It Works</a>
            <a href="/apps" className="text-gray-700 hover:text-gray-900 font-medium">Apps</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          </nav>

          {/* Desktop CTA Button */}
          <a href="/signup" className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            Start Free
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">How It Works</a>
              <a href="/apps" className="text-gray-700 hover:text-gray-900 font-medium">Apps</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors w-full mt-4 block text-center">
                Start Free
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">AI Marketplace • Free Trials • Every Week</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Test Real AI Apps Before You Integrate.
              </h1>
              <p className="text-lg sm:text-xl text-teal-600 font-semibold mb-4">
                Validate in Minutes, Not Months
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Validate your business issues or solutions within minutes depending on the use case. I built this marketplace for businesses to test AI tools before making critical decisions—free trials, vendor-neutral, built to fit your stack.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Validate Your Issues</span>
                </a>
                <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">See How It Works</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/me.jpeg"
                      alt="User 1"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/user1.jpg"
                      alt="User 2"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/user2.jpg"
                      alt="User 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Trusted by growing teams</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/me.jpeg"
                  alt="AI Trial Hub Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trial new AI apps in three simple steps.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Fresh AI Every Week */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Fresh AI Every Week
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get access to new, cutting-edge AI tools designed to solve real problems. Validate your business issues or solutions within minutes depending on the use case, delivered weekly.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Test Drive for Free */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Validate Issues Fast
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Validate your business issues or solutions within minutes depending on the use case. Share feedback and help shape what ships next.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Ready to Integrate */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Ready to Integrate
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clean APIs, docs, and easy handoff so successful pilots can scale in your stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Apps Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore My Latest AI Apps
            </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Validate your business issues or solutions within minutes depending on the use case. Try these AI tools now—no cost, no lock-in. Perfect for businesses evaluating AI solutions.
              </p>
          </div>

          {/* AI App Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Card 1: AI Content Summarizer */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    New
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      AI Content Summarizer
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Instantly condense articles into key takeaways.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Meeting Note Genie */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mic className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Meeting Note Genie
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Turn calls into action items and next steps.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Brand Visual Assistant */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Updated
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Brand Visual Assistant
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Create on-brand visuals from simple prompts.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Inbox Triage AI */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    New
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Inbox Triage AI
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Prioritize, draft, and clear your inbox faster.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Workflow Automator */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Link className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Workflow Automator
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Chain tools and automate with AI logic.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Insight Dashboard */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="absolute -top-2 -left-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Updated
                  </span>
                </div>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Insight Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      From data to decisions, instantly.
                    </p>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Try Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse All Apps Button */}
          <div className="text-center">
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-medium flex items-center space-x-2 mx-auto transition-colors shadow-sm hover:shadow-md">
              <Grid3X3 className="w-5 h-5" />
              <span>Browse All Apps</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Card 1: Stay Ahead of the Curve */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-8 lg:mb-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/stay-ahead-of-the-curve.png"
                    alt="Stay Ahead of the Curve"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Stay Ahead of the Curve
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Access the latest AI advancements before anyone else, giving your business an edge without the R&D cost.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Risk-Free Innovation */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Risk-Free Innovation
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Explore new tech without upfront investment. Test, learn, and only adopt what truly works for you.
                </p>
              </div>
              
              {/* Image */}
              <div className="order-2">
                <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px] rounded-xl overflow-hidden">
                  <Image
                    src="/risk-free-innovation.png"
                    alt="Risk-Free Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Testimonial 1: Lena Ortiz */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/lena.jpg"
                    alt="Lena Ortiz"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-bold text-gray-900 mb-4">
                  "I trialed two apps and cut reporting time in half."
                </blockquote>
                
                {/* Name and Title */}
                <div className="text-gray-600">
                  <div className="font-medium">Lena Ortiz</div>
                  <div className="text-sm">Ops Manager</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2: Chris Yang */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/user1.jpg"
                    alt="Chris Yang"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-bold text-gray-900 mb-4">
                  "Free pilots helped us find real wins fast."
                </blockquote>
                
                {/* Name and Title */}
                <div className="text-gray-600">
                  <div className="font-medium">Chris Yang</div>
                  <div className="text-sm">Product Lead</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3: Emma Schmidt */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                {/* Profile Picture */}
                <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/ava.jpg"
                    alt="Emma Schmidt"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-bold text-gray-900 mb-4">
                  "Simple tools my teams actually use."
                </blockquote>
                
                {/* Name and Title */}
                <div className="text-gray-600">
                  <div className="font-medium">Emma Schmidt</div>
                  <div className="text-sm">CTO</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by Statement */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/me.jpeg"
                    alt="User 1"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/user1.jpg"
                    alt="User 2"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/user2.jpg"
                    alt="User 3"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/user3.jpg"
                    alt="User 4"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Trusted by growing teams</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" style={{backgroundColor: '#ffd166'}}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Innovate? Your Free AI Journey Starts Here.
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses trialing fresh AI apps weekly free, fast, and vendor-neutral marketplace.
          </p>
          
          {/* CTA Button */}
          <a href="/signup" className="text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-sm hover:shadow-md inline-block" style={{backgroundColor: '#0b86a7'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#0a6b85'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0b86a7'}>
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-2 lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-400 rounded-sm flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">AI Trial Hub</span>
              </div>
              <p className="text-gray-600 max-w-sm">
                AI marketplace for businesses to validate their issues or solutions within minutes depending on the use case. Trial real AI apps before integrating—weekly, free.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Apps</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start md:justify-end lg:justify-end space-x-6 md:col-span-1 lg:col-span-1">
              <a href="https://x.com/amiinehachemi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/amiinehachemi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/amiinehachemi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <p className="mb-4 sm:mb-0">&copy; 2025 Trial AI Marketplace. All rights reserved.</p>
            <p>Made for teams evaluating AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}