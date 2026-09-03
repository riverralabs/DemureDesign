export function FloralCluster({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 420"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="var(--flora-pink)"
        d="M-20 90 C40 40, 70 120, 40 190 C20 240, -10 280, -40 250 C-20 200, -30 140, -20 90Z"
      />
      <path
        fill="var(--flora-pink)"
        opacity="0.7"
        d="M300 30 C340 -10, 390 80, 350 140 C320 180, 280 160, 270 110 C265 70, 280 50, 300 30Z"
      />

      <g transform="translate(168 118)">
        {Array.from({ length: 5 }, (_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-36"
            rx="22"
            ry="40"
            fill="var(--flora-green)"
            transform={`rotate(${i * 72})`}
          />
        ))}
        <circle r="16" fill="#2A4A38" />
      </g>

      <g transform="translate(118 278)">
        {Array.from({ length: 5 }, (_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-58"
            rx="34"
            ry="62"
            fill="var(--sun)"
            transform={`rotate(${i * 72})`}
          />
        ))}
        <circle r="28" fill="#D4847A" />
        <circle r="12" fill="#C96B63" />
      </g>
    </svg>
  );
}
