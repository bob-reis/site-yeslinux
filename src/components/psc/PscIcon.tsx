import React from 'react'

type Props = Readonly<{ name: string; color?: string; className?: string; size?: number }>

const UserIcon = ({ className, common }: { className?: string; common: any }) => (
  <svg viewBox="0 0 24 24" className={className} {...common}>
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 22a7.5 7.5 0 0 1 13 0" />
  </svg>
)

export default function PscIcon({ name, color = '#00ff41', className, size = 20 }: Props) {
  const common = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  switch (name) {
    case 'password':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
        </svg>
      )
    case 'browser':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18" />
        </svg>
      )
    case 'email':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )
    case 'messaging':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      )
    case 'social':
      return <UserIcon className={className} common={common} />
    case 'network':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h6m6 0h6M12 3v6m0 6v6" />
        </svg>
      )
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'computer':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8m-12-4h16" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M9 22V12h6v10" />
        </svg>
      )
    case 'finance':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M3 20h18M5 20V8l6-3 6 3v12M9 13h6" />
        </svg>
      )
    case 'human':
      return <UserIcon className={className} common={common} />
    case 'physical':
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
