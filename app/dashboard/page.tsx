'use client'

import Navigation from '@/components/Navigation'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [animatedData, setAnimatedData] = useState({
    moodComparison: [
      { mood: 'Anxious', before: 0, after: 0 },
      { mood: 'Stressed', before: 0, after: 0 },
      { mood: 'Happy', before: 0, after: 0 },
    ],
    weeklyProgress: [
      { day: 'Mon', mood: 'Anxious', score: 0 },
      { day: 'Tue', mood: 'Neutral', score: 0 },
      { day: 'Wed', mood: 'Calm', score: 0 },
      { day: 'Thu', mood: 'Happy', score: 0 },
      { day: 'Fri', mood: 'Stressed', score: 0 },
      { day: 'Sat', mood: 'Relaxed', score: 0 },
      { day: 'Sun', mood: 'Happy', score: 0 },
    ]
  });

  // Original data
  const originalMoodData = [
    { mood: 'Anxious', before: 70, after: 30 },
    { mood: 'Stressed', before: 60, after: 25 },
    { mood: 'Happy', before: 20, after: 70 },
  ];

  const originalWeeklyData = [
    { day: 'Mon', mood: 'Anxious', score: 70 },
    { day: 'Tue', mood: 'Neutral', score: 50 },
    { day: 'Wed', mood: 'Calm', score: 30 },
    { day: 'Thu', mood: 'Happy', score: 80 },
    { day: 'Fri', mood: 'Stressed', score: 60 },
    { day: 'Sat', mood: 'Relaxed', score: 20 },
    { day: 'Sun', mood: 'Happy', score: 85 },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Animate data on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData({
        moodComparison: originalMoodData,
        weeklyProgress: originalWeeklyData
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Your Progress Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how your mood has improved since using AI Therapist.
          </p>
        </motion.div>

        {/* Mood Improvement Chart */}
        <motion.div 
          className="card mb-8"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mood Improvement</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={animatedData.moodComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="mood" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E5E7EB', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar 
                  dataKey="before" 
                  fill="#EF4444" 
                  name="Before AI Therapist" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
                <Bar 
                  dataKey="after" 
                  fill="#10B981" 
                  name="After AI Therapist" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Weekly Progress Section */}
          <motion.div 
            className="card"
            variants={staggerItem}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mood Over Time</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={animatedData.weeklyProgress} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E5E7EB', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }} 
                    formatter={(value, name) => [value, 'Mood Score']}
                    labelFormatter={(label) => `Day: ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#8B5CF6', strokeWidth: 2 }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Reflections Section */}
          <motion.div 
            className="space-y-4"
            variants={staggerItem}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Journey</h2>
            
            <motion.div 
              className="card bg-red-50 border-l-4 border-red-400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm font-medium">B</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Before AI Therapist</h3>
                  <p className="text-red-700 mt-1">I often felt stressed and alone.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card bg-green-50 border-l-4 border-green-400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm font-medium">A</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">After AI Therapist</h3>
                  <p className="text-green-700 mt-1">I feel more supported and optimistic.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="card mb-8"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Achievements</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mood Entries</h3>
              <p className="text-gray-600">Logged this week</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-ai-green to-ai-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Guided Exercises</h3>
              <p className="text-gray-600">Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(251, 146, 60, 0.2)" 
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-ai-orange to-ai-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Weeks of Progress</h3>
              <p className="text-gray-600">Consistent tracking</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div 
          className="card bg-gradient-to-r from-ai-purple to-ai-green text-white text-center py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100, 
            damping: 15 
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Keep building your mental well-being</h2>
          <p className="text-xl mb-8 opacity-90">Continue your journey with AI Therapist</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              href="/" 
              className="inline-block bg-white text-ai-purple px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Chat with AI Therapist
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
