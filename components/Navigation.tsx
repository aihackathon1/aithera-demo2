'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">AI Therapist</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#features" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#support" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Support
              </a>
              <a href="#community" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Community
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
            <button className="btn-secondary">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-ai-purple focus:outline-none focus:text-ai-purple"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              <a href="#home" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#features" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#support" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                Support
              </a>
              <a href="#community" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                Community
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                  <button className="ml-3 btn-secondary">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
