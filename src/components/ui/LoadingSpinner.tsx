'use client'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-darker">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-primary font-mono text-sm">
          <span className="loading-dots">Inicializando sistema</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-dark rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
        </div>
        
        {/* ASCII Art Logo */}
        <div className="text-primary font-mono text-xs text-center mt-8 opacity-70">
          <pre>{`
██    ██ ███████ ███████     ██      ██ ███    ██ ██    ██ ██   ██ 
 ██  ██  ██      ██          ██      ██ ████   ██ ██    ██ ██   ██ 
  ████   █████   ███████     ██      ██ ██ ██  ██ ██    ██  █████  
   ██    ██           ██     ██      ██ ██  ██ ██ ██    ██ ██   ██ 
   ██    ███████ ███████     ███████ ██ ██   ████  ██████  ██   ██ 
          `}</pre>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner