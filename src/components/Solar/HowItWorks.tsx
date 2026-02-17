'use client'

export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Free Consultation', description: 'Schedule a no-obligation consultation with our solar experts' },
    { number: '02', title: 'Custom Design', description: 'We design a personalized solar system for your property' },
    { number: '03', title: 'Installation', description: 'Professional installation completed in 1-2 days' },
    { number: '04', title: 'Start Saving', description: 'Begin enjoying lower energy bills immediately' },
  ]

  return (
    <section className="py-20 bg-secondary/30" id="how-it-works">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple <span className="text-green-600 dark:text-green-400">4-Step Process</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="text-6xl font-bold text-green-500/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
