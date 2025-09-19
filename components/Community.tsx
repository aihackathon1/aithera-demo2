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

  return (
    <section id="community" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our <span className="gradient-text">Supportive Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals who understand your journey and are here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityCards.map((card, index) => (
            <div key={index} className="group">
              <div className={`${card.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
