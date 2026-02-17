'use client'

import { DollarSign, Home, Leaf, TrendingUp } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Go <span className="text-green-600">Solar?</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: DollarSign, title: 'Save Money', text: 'Reduce bills by up to 70%' },
                { icon: Home, title: 'Increase Value', text: 'Boost home value by 4%' },
                { icon: Leaf, title: 'Help Environment', text: 'Reduce carbon footprint' },
                { icon: TrendingUp, title: 'ROI in 5-7 Years', text: 'Fast payback period' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-green-500/10 rounded-3xl" data-aos="fade-left" />
        </div>
      </div>
    </section>
  )
}
