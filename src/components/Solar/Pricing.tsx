'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    { name: 'Basic', price: '15,000', features: ['5kW System', '15 Panels', '10-Year Warranty', 'Monitoring App'] },
    { name: 'Standard', price: '25,000', features: ['10kW System', '25 Panels', '20-Year Warranty', 'Battery Backup', 'Premium Support'], featured: true },
    { name: 'Premium', price: '40,000', features: ['15kW System', '40 Panels', '25-Year Warranty', 'Battery Backup', 'EV Charger'] },
  ]

  return (
    <section className="py-20 bg-secondary/30" id="pricing">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Affordable <span className="text-green-600">Pricing Plans</span>
          </h2>
          <p className="text-muted-foreground">$0 down financing available</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-secondary p-8 rounded-2xl border-2 ${plan.featured ? 'border-green-500 shadow-2xl scale-105' : 'border-border'}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {plan.featured && <div className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full mb-4">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">${plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block text-center px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
