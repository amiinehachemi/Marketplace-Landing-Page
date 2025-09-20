'use client'

import { Check, Sparkles, Target, Zap, Calendar, Link, BarChart3, Handshake, Shield, FileText, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-400 rounded-sm flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">AI Trial Hub</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/apps" className="text-gray-700 hover:text-gray-900 font-medium">Apps</a>
            <a href="/about" className="bg-teal-500 text-white px-4 py-2 rounded-lg font-medium">About</a>
            <a href="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Start Free
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-sm text-gray-600 font-medium">About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Helping businesses test AI safely, simply, and fast
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            I design a risk-free path for businesses to adopt AI: validate with real tasks, measure impact, and integrate only what works. Built for companies to test AI solutions before making critical decisions.
          </p>

          {/* Key Features */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Trials on featured apps</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Weekly drops of new apps</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Security-minded evaluations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* First Row - Mission and How We Help */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Our Mission Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Make AI adoption practical for every team by removing guesswork with structured trials, guided pilots, and expert support.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Fast</div>
                  <div className="text-sm text-gray-600">Trial setup</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Curated</div>
                  <div className="text-sm text-gray-600">AI tools</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Minutes</div>
                  <div className="text-sm text-gray-600">Avg. time to validate</div>
                </div>
              </div>
            </div>

            {/* How We Help Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How I help</h2>
              
              {/* Bullet Points */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">1-Click trials on featured apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Weekly drops of new apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Business-first evaluation metrics</span>
                </li>
              </ul>

              {/* Testimonial */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">OL</span>
                  </div>
                  <div>
                    <blockquote className="text-gray-900 font-medium mb-2">
                      "I validated two AI tools in minutes."
                    </blockquote>
                    <cite className="text-sm text-gray-600">Ops Lead, mid-market SaaS</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Four Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Outcome-driven */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Outcome-driven</h3>
              <p className="text-gray-600 text-sm">
                Every listing includes success metrics to ensure ROI clarity.
              </p>
            </div>

            {/* Partner-first */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Partner-first</h3>
              <p className="text-gray-600 text-sm">
                I work with your stack and your process, not against it. My platform helps businesses test AI solutions before making expensive decisions.
              </p>
            </div>

            {/* Trust & security */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trust & security</h3>
              <p className="text-gray-600 text-sm">
                Security notes and data handling are transparent in every app.
              </p>
            </div>

            {/* Simple by design */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Simple by design</h3>
              <p className="text-gray-600 text-sm">
                From signup to pilot, the flow is streamlined and guided.
              </p>
            </div>
          </div>

          {/* Third Row - Need Help and What You Get */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Need Help Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Need help?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Get a quick read on which apps fit your use case. You can validate your business issue or solution within minutes depending on the use case. I'll map a short trial plan and next steps for your business to test before making decisions.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-start">
                <a href="https://calendly.com/amiinehachemi/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Book 15 min to get free consultation</span>
                </a>
              </div>
            </div>

            {/* What You Get Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What you get</h2>
              
              {/* Bullet Points */}
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Trials on featured apps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Weekly drops of new apps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Clear next steps to integrate what works</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
