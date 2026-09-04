export function FloralCluster({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 440"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="var(--flora-pink)"
        d="M48 150 C110 90, 150 170, 118 240 C96 290, 70 330, 44 300 C58 250, 40 200, 48 150Z"
      />
      <path
        fill="var(--flora-pink)"
        opacity="0.75"
        d="M300 70 C348 28, 390 120, 350 180 C322 220, 278 198, 268 148 C262 108, 278 90, 300 70Z"
      />

      <g transform="translate(248 148)">
        {Array.from({ length: 5 }, (_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-38"
            rx="22"
            ry="42"
            fill="var(--flora-green)"
            transform={`rotate(${i * 72})`}
          />
        ))}
        <circle r="16" fill="#2A4A38" />
      </g>

      <g transform="translate(168 300)">
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
