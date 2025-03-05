'use client'
import Typed from 'typed.js'

import { useEffect, useRef } from 'react'

export const ResumeText = () => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const typed = new Typed(ref.current, {
      backDelay: 200,
      backSpeed: 100,
      cursorChar: '_',
      loop: true,
      strings: ['kemiao^100 about ^500', 'taik ^1000', 'blog ^2000'],
      typeSpeed: 150,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={ref}>resume</span>
}
