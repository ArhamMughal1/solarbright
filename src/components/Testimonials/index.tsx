'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  date: string
  text: string
  image: string
  verified: boolean
  googleReview: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'San Diego, CA',
    rating: 5,
    date: '2 weeks ago',
    text: "Absolutely thrilled with our solar installation! The SolarBright team was professional, efficient, and our energy bills have dropped by 75%. Best investment we've ever made for our home.",
    image: '/images/testimonials/person1.jpg',
    verified: true,
    googleReview: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    rating: 5,
    date: '1 month ago',
    text: 'From consultation to installation, everything was seamless. The panels look great on our roof and we\'re already seeing significant savings. Highly recommend SolarBright!',
    image: '/images/testimonials/person2.jpg',
    verified: true,
    googleReview: true,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Phoenix, AZ',
    rating: 5,
    date: '3 weeks ago',
    text: 'The team went above and beyond! They handled all the permits, installed in 2 days, and our system has been running flawlessly. Amazing customer service throughout the entire process.',
    image: '/images/testimonials/person3.jpg',
    verified: true,
    googleReview: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Austin, TX',
    rating: 5,
    date: '1 week ago',
    text: 'Solar panels paid for themselves faster than expected thanks to the tax credits and energy savings. SolarBright made going green easy and affordable. Couldn\'t be happier!',
    image: '/images/testimonials/person4.jpg',
    verified: true,
    googleReview: true,
  },
  {
    id: 5,
    name: 'Jennifer Martinez',
    location: 'Denver, CO',
    rating: 5,
    date: '2 months ago',
    text: 'Outstanding experience from start to finish! Professional installation, great pricing, and excellent after-sales support. Our monthly electric bill is now practically zero!',
    image: '/images/testimonials/person5.jpg',
    verified: true,
    googleReview: true,
  },
  {
    id: 6,
    name: 'Robert Williams',
    location: 'Seattle, WA',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best decision for our business! Commercial installation was quick and the ROI has been incredible. The monitoring system makes it easy to track our energy production.',
    image: '/images/testimonials/person6.jpg',
    verified: true,
    googleReview: true,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  // Calculate average rating
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <section className="relative py-20 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20 rounded-full bg-green-500/5">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-green-600 dark:text-green-400">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have made the switch to clean, renewable solar energy
          </p>

          {/* Google Reviews Badge */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-secondary rounded-full shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{averageRating}</span> on Google ({testimonials.length}+ reviews)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-secondary rounded-full shadow-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div className="text-left">
                <p className="font-semibold">Verified Reviews</p>
                <p className="text-xs text-muted-foreground">100% Authentic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-secondary/50 p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-green-500/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                {/* Google Badge */}
                {testimonial.googleReview && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Posted on Google • {testimonial.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-secondary border border-border rounded-full hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerPage) === idx
                      ? 'bg-green-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-secondary border border-border rounded-full hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our happy customers?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-green-500/50 transition-all"
          >
            Get Your Free Quote Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
