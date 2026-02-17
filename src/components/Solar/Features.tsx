'use client'

import { Sun, Shield, TrendingDown, Zap, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Premium Solar Panels',
    description: 'High-efficiency panels with 25+ year lifespan and maximum energy output',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Comprehensive coverage on panels, inverters, and installation workmanship',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: TrendingDown,
    title: 'Up to 70% Savings',
    description: 'Reduce your monthly electricity bills while increasing home value',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Fast Installation',
    description: 'Professional installation completed in 1-2 days with minimal disruption',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified installers with 10+ years experience and thousands of projects',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Top-Rated Service',
    description: '4.9★ rating on Google with 500+ verified customer reviews',
    color: 'from-emerald-500 to-teal-600',
  },
]

export default function Features() {
  return (
    <section className="py-20" id="features">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20 rounded-full bg-green-500/5">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for <span className="text-green-600 dark:text-green-400">Solar Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to installation and beyond, we handle everything
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-secondary/50 p-8 rounded-2xl border border-border hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
