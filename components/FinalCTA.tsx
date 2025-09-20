'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUpDelay = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  };

  const fadeInUpDelayMore = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
  };

  return (
    <section className="py-20 bg-gradient-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            {...fadeInUp}
          >
            Take Your Mental Wellness to the Next Level with AI
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-12 leading-relaxed"
            {...fadeInUpDelay}
          >
            Join thousands of people who have transformed their mental health with our AI-powered support system.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeInUpDelayMore}
          >
            <motion.button 
              className="bg-white text-ai-orange px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#f3f4f6"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "white",
                color: "#ea580c",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
