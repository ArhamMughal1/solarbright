'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'How much can I save with solar?', a: 'Most homeowners save 50-70% on electricity bills, averaging $1,200-$2,000 per year.' },
    { q: 'What is the installation timeline?', a: 'After permits are approved, installation takes 1-2 days. Total process is 4-8 weeks.' },
    { q: 'Do solar panels work in cloudy weather?', a: 'Yes! Panels still generate power on cloudy days, though at reduced capacity.' },
    { q: 'What financing options are available?', a: 'We offer $0 down financing, loans, leases, and cash purchase options.' },
    { q: 'How long do solar panels last?', a: 'Solar panels last 25-30 years with minimal maintenance and come with 25-year warranties.' },
  ]

  return (
    <section className="py-20" id="faq">
      <div className="container px-4 max-w-3xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-secondary rounded-xl border border-border overflow-hidden" data-aos="fade-up" data-aos-delay={i * 50}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 border-t border-border">
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
