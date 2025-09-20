'use client';

import { motion } from 'framer-motion';

export default function Community() {
  const communityCards = [
    {
      title: "Safe & Supportive Space",
      description: "A judgment-free environment for everyone",
      color: "bg-gradient-to-br from-ai-purple to-ai-purple/80",
      icon: "🛡️"
    },
    {
      title: "Celebrate Diversity",
      description: "Embrace different perspectives and experiences",
      color: "bg-gradient-to-br from-ai-green to-ai-green/80",
      icon: "🌈"
    },
    {
      title: "Stay Authentic",
      description: "Be your true self without fear",
      color: "bg-gradient-to-br from-ai-yellow to-ai-yellow/80",
      icon: "✨"
    },
    {
      title: "Learn Together",
      description: "Grow through shared experiences",
      color: "bg-gradient-to-br from-ai-orange to-ai-orange/80",
      icon: "📚"
    },
    {
      title: "Positive Energy",
      description: "Spread kindness and encouragement",
      color: "bg-gradient-to-br from-ai-red to-ai-red/80",
      icon: "💝"
    },
    {
      title: "Continuous Growth",
      description: "Always evolving and improving together",
      color: "bg-gradient-to-br from-ai-purple to-ai-green",
      icon: "🌱"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="community" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our <span className="gradient-text">Supportive Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals who understand your journey and are here to support you every step of the way.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {communityCards.map((card, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${card.color} rounded-2xl p-8 text-white shadow-lg`}>
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0] 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
