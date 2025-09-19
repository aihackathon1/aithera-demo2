export default function Stats() {
  const stats = [
    {
      number: "87%",
      description: "feel reduced stress",
      icon: "😌",
      color: "text-ai-green"
    },
    {
      number: "400+",
      description: "Hours of guided sessions",
      icon: "⏱️",
      color: "text-ai-purple"
    },
    {
      number: "100,000+",
      description: "minutes of support provided",
      icon: "💬",
      color: "text-ai-orange"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Making a <span className="gradient-text">Real Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI therapist has helped thousands of people improve their mental wellness and find peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-5xl font-bold ${stat.color} mb-4`}>
                {stat.number}
              </div>
              <p className="text-gray-600 text-lg font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
