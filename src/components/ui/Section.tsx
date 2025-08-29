import React from 'react'

interface SectionProps {
  id?: string
  highlight: string
  title: string
  description: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, highlight, title, description, children }) => (
  <section id={id} className="py-20 bg-darker">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-primary">{highlight}</span> {title}
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">{description}</p>
      </div>
      {children}
    </div>
  </section>
)

export default Section
