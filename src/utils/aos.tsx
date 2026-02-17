'use client'

import { useEffect, useState, ReactNode } from 'react'

interface AoscompoProps {
  children: ReactNode
}

/**
 * AOS Component Wrapper
 * Optimized to prevent hydration errors and reduce bundle size
 * AOS is loaded dynamically only on client-side
 */
const Aoscompo = ({ children }: AoscompoProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensure component is mounted before initializing AOS
    setMounted(true)

    // Dynamic import to reduce initial bundle size
    import('aos').then((AOS) => {
      import('aos/dist/aos.css')
      
      AOS.default.init({
        duration: 800,
        once: true, // Animation occurs only once for better performance
        offset: 100,
        easing: 'ease-in-out',
        delay: 0,
        disable: false,
        startEvent: 'load',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      })

      // Refresh AOS on route changes
      AOS.default.refresh()
    })

    // Cleanup function
    return () => {
      import('aos').then((AOS) => {
        AOS.default.refresh()
      })
    }
  }, [])

  // Prevent hydration mismatch by rendering children only after mount
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}

export default Aoscompo
