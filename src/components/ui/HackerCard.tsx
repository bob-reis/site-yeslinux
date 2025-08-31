import React from 'react'

interface HackerCardProps {
  title: string
  description: string
}

const HackerCard: React.FC<HackerCardProps> = ({ title, description }) => (
  <div className="card-cyber rounded-lg p-6" role="article">
    <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
    <p className="text-text-muted">{description}</p>
  </div>
)

export default HackerCard
