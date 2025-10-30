export function EarthLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - Blue */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#blueGradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Inner continents/lines - Yellow */}
      <path
        d="M 30 25 Q 35 20, 40 25 T 50 25 Q 55 25, 60 30 L 65 35 Q 70 40, 65 45 L 60 50"
        stroke="url(#yellowGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      <path
        d="M 25 45 Q 30 50, 35 55 L 40 60 Q 45 65, 50 65 T 60 70"
        stroke="url(#yellowGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      <path
        d="M 70 55 Q 65 60, 60 65 L 55 70 Q 50 75, 45 75"
        stroke="url(#yellowGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Latitude lines - Blue */}
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="15"
        stroke="url(#blueGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="30"
        stroke="url(#blueGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      
      {/* Longitude line - Blue */}
      <ellipse
        cx="50"
        cy="50"
        rx="15"
        ry="45"
        stroke="url(#blueGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="45"
        stroke="url(#blueGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
