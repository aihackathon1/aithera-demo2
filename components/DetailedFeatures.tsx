'use client';

import { motion } from 'framer-motion';

export default function DetailedFeatures() {
  const features = [
    {
      title: "Personalized Sessions",
      description: "AI adapts to your unique needs and preferences",
      color: "bg-gradient-to-r from-ai-purple to-ai-green"
    },
    {
      title: "Smart Progress Tracking",
      description: "Monitor your mental wellness journey with insights",
      color: "bg-gradient-to-r from-ai-orange to-ai-red"
    },
    {
      title: "Real-Time Feedback",
      description: "Instant support and guidance when you need it most",
      color: "bg-gradient-to-r from-ai-yellow to-ai-orange"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-ai-purple/10 to-ai-green/10 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-ai-purple/20 to-ai-green/20 rounded-xl flex items-center justify-center">
                  <motion.div 
                    className="text-center space-y-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-ai-purple to-ai-green rounded-full mx-auto flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800">Therapy Session</h3>
                    <p className="text-sm text-gray-600">AI-powered support</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of mental wellness with our cutting-edge AI technology.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
