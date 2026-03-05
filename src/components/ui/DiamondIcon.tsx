interface DiamondIconProps {
  className?: string;
}

export function DiamondIcon({ className = 'h-5 w-5' }: DiamondIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="diamond-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2FFE" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#D4A537" />
        </linearGradient>
      </defs>
      {/* Top facets */}
      <path d="M12 2L4 8L12 22L20 8L12 2Z" fill="url(#diamond-grad)" opacity="0.9" />
      {/* Left facet highlight */}
      <path d="M12 2L4 8L12 10L12 2Z" fill="white" opacity="0.3" />
      {/* Right facet highlight */}
      <path d="M12 2L20 8L12 10L12 2Z" fill="white" opacity="0.15" />
      {/* Center line */}
      <path d="M4 8L20 8L12 22L4 8Z" fill="url(#diamond-grad)" opacity="0.7" />
      {/* Bright center */}
      <path d="M12 10L8 8L12 22L16 8L12 10Z" fill="white" opacity="0.2" />
    </svg>
  );
}
