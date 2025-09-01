import React from 'react'

interface HackerCardProps {
  title: string
  description?: string
  items?: string[]
}

const HackerCard: React.FC<HackerCardProps> = ({ title, description, items }) => (
  <article className="card-cyber rounded-lg p-6">
    <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
    {description && <p className="text-text-muted mb-3">{description}</p>}
    {items && items.length > 0 && (
      <ul className="list-disc list-inside space-y-1 text-text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </article>
)

export default HackerCard
