'use client'

import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]'
    const columns = Math.floor(window.innerWidth / 20)
    
    // Clear existing content
    container.innerHTML = ''

    const createColumn = (x: number) => {
      const column = document.createElement('div')
      column.className = 'absolute top-0 flex flex-col opacity-20'
      column.style.left = `${x * 20}px`
      
      const animateColumn = () => {
        column.innerHTML = ''
        const height = Math.random() * 100 + 50
        
        for (let i = 0; i < height / 20; i++) {
          const char = document.createElement('div')
          char.textContent = chars[Math.floor(Math.random() * chars.length)]
          char.className = 'text-primary font-mono text-sm leading-5'
          char.style.animationDelay = `${i * 0.1}s`
          column.appendChild(char)
        }
        
        setTimeout(animateColumn, Math.random() * 3000 + 2000)
      }
      
      animateColumn()
      return column
    }

    // Create columns
    for (let i = 0; i < columns; i++) {
      container.appendChild(createColumn(i))
    }

    const handleResize = () => {
      const newColumns = Math.floor(window.innerWidth / 20)
      if (newColumns !== columns) {
        // Recreate on resize
        container.innerHTML = ''
        for (let i = 0; i < newColumns; i++) {
          container.appendChild(createColumn(i))
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

    return (
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      />
    )
  }

  export default MatrixRain