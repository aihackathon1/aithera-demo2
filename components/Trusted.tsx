export default function Trusted() {
  const logos = [
    "University A", "University B", "University C", "University D", "University E"
  ]

  return (
    <section className="py-16 bg-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Trusted by students and individuals worldwide
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-600 font-medium text-sm">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
