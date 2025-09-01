export const fadeInUp = (options?: { delay?: number; y?: number; duration?: number }) => {
  const { delay = 0, y = 50, duration = 0.8 } = options || {}
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay },
    viewport: { once: true as const },
  }
}

