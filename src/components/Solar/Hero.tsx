'use client'

import { Sun, Zap, Shield, TrendingDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-yellow-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900" />
        
        {/* Animated circles */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Solar panel pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <Sun className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                #1 Solar Installation Company
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Power Your Home with
              <span className="block text-green-600 dark:text-green-400 mt-2">
                Clean Solar Energy
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Save up to <span className="font-bold text-green-600 dark:text-green-400">70% on electricity bills</span> while helping the planet. 
              Expert installation, 25-year warranty, and $0 down financing available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-green-500/50 transition-all group"
              >
                Get Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:+18005673700"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-secondary border-2 border-green-500 text-green-600 dark:text-green-400 font-semibold rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (800) 567-3700
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">5,000+</p>
                <p className="text-sm text-muted-foreground">Installations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">4.9★</p>
                <p className="text-sm text-muted-foreground">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">25 Years</p>
                <p className="text-sm text-muted-foreground">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right: Visual/Cards */}
          <div className="relative" data-aos="fade-left">
            {/* Main solar panel image placeholder */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/20 backdrop-blur-sm">
              {/* SVG Solar Panel Illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Solar Panel Grid */}
                  <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                    {[0, 1, 2, 3].map((row) =>
                      [0, 1, 2, 3].map((col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={10 + col * 45}
                          y={10 + row * 45}
                          width="40"
                          height="40"
                          fill="url(#solarGradient)"
                          stroke="#059669"
                          strokeWidth="2"
                          rx="2"
                        />
                      ))
                    )}
                  </g>
                  
                  {/* Sun */}
                  <circle cx="170" cy="30" r="20" fill="#FCD34D" className="animate-pulse" />
                  
                  {/* Sun rays */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1="170"
                      y1="30"
                      x2={170 + Math.cos(angle * Math.PI / 180) * 35}
                      y2={30 + Math.sin(angle * Math.PI / 180) * 35}
                      stroke="#FCD34D"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating benefit cards */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-secondary p-4 rounded-2xl shadow-2xl border border-border" data-aos="zoom-in" data-aos-delay="200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">70% Savings</p>
                  <p className="text-sm text-muted-foreground">On Energy Bills</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary p-4 rounded-2xl shadow-2xl border border-border" data-aos="zoom-in" data-aos-delay="400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold">25-Year Warranty</p>
                  <p className="text-sm text-muted-foreground">Full Coverage</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-12 bg-white dark:bg-secondary p-4 rounded-2xl shadow-2xl border border-border" data-aos="zoom-in" data-aos-delay="600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Clean Energy</p>
                  <p className="text-sm text-muted-foreground">100% Renewable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
