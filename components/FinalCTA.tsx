export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Take Your Mental Wellness to the Next Level with AI
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of people who have transformed their mental health with our AI-powered support system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-ai-orange px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-ai-orange transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
