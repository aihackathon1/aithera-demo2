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

  return (
    <section id="features" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
