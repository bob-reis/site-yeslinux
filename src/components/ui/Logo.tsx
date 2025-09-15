import React from 'react'

interface LogoProps {
  href?: string
  'aria-label'?: string
  className?: string
}

const Logo: React.FC<LogoProps> = ({ href = '/#inicio', className = '', ...rest }) => (
  <a
    href={href}
    className={`font-mono text-2xl font-bold neon-text-primary ${className}`}
    {...rest}
  >
    <span className="text-primary">YES</span>
    <span className="text-white">LINUX</span>
  </a>
)

export default Logo
