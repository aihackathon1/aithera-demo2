'use client';

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Compassionate AI Support",
      description: "A supportive AI to listen and guide you anytime.",
      color: "bg-ai-yellow",
      icon: "🤖"
    },
    {
      title: "Join Our Community",
      description: "Connect with others, share, and grow together.",
      color: "bg-gradient-cta",
      icon: "👥"
    },
    {
      title: "24/7 Available",
      description: "Get guidance whenever you need it, without waiting.",
      color: "bg-ai-purple",
      icon: "⏰"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="card group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
