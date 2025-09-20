'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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
              <Link href="/" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/#features" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="/#community" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Community
              </Link>
              <Link href="/mood-tracking" className="text-gray-700 hover:text-ai-purple px-3 py-2 text-sm font-medium transition-colors">
                Mood Tracking
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white text-sm font-medium">U</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/dashboard" className="btn-dashboard">
                Dashboard
              </Link>
            </motion.div>
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile menu button and Dashboard */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/dashboard" className="btn-dashboard text-sm">
                Dashboard
              </Link>
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-ai-purple focus:outline-none focus:text-ai-purple"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link href="/" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                    Home
                  </Link>
                  <Link href="/#about" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                    About Us
                  </Link>
                  <Link href="/#features" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                    Features
                  </Link>
                  <Link href="/#community" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                    Community
                  </Link>
                  <Link href="/mood-tracking" className="text-gray-700 hover:text-ai-purple block px-3 py-2 text-base font-medium">
                    Mood Tracking
                  </Link>
                </motion.div>
                <motion.div 
                  className="pt-4 pb-3 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="flex items-center px-3 space-x-3">
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white text-sm font-medium">U</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/dashboard" className="btn-dashboard text-sm">
                        Dashboard
                      </Link>
                    </motion.div>
                    <motion.button 
                      className="btn-secondary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign In
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
