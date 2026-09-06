export default function PlantelBackdrop() {
  return (
    <div className="plab-backdrop" aria-hidden="true">
      <svg
        className="plab-backdrop__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="plabGrid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
          <radialGradient id="plabFade">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="plabMask">
            <rect width="1440" height="900" fill="url(#plabFade)" />
          </mask>
        </defs>

        {/* grade sutil, desbotando nas bordas */}
        <rect width="1440" height="900" fill="url(#plabGrid)" opacity="0.045" mask="url(#plabMask)" />

        {/* retas longas */}
        <line x1="0" y1="180" x2="1440" y2="180" stroke="#5EBC36" strokeWidth="1" opacity="0.07" />
        <line x1="0" y1="640" x2="1440" y2="640" stroke="#5EBC36" strokeWidth="1" opacity="0.05" />
        <line x1="240" y1="0" x2="240" y2="900" stroke="#ffffff" strokeWidth="1" opacity="0.03" />
        <line x1="1150" y1="0" x2="1150" y2="900" stroke="#ffffff" strokeWidth="1" opacity="0.03" />

        {/* figuras geométricas em contorno */}
        <circle cx="1180" cy="200" r="120" fill="none" stroke="#5EBC36" strokeWidth="1" opacity="0.09" />
        <circle cx="1180" cy="200" r="74" fill="none" stroke="#5EBC36" strokeWidth="1" opacity="0.06" />
        <rect x="120" y="560" width="150" height="150" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.05" transform="rotate(15 195 635)" />
        <polygon points="700,720 760,830 640,830" fill="none" stroke="#5EBC36" strokeWidth="1" opacity="0.07" />

        {/* pontos de luz retangulares */}
        <g fill="#5EBC36">
          <rect x="300" y="120" width="3" height="3" opacity="0.5" />
          <rect x="880" y="90" width="2" height="2" opacity="0.35" />
          <rect x="1090" y="330" width="3" height="3" opacity="0.45" />
          <rect x="180" y="400" width="2" height="2" opacity="0.3" />
          <rect x="620" y="250" width="3" height="3" opacity="0.4" />
          <rect x="1320" y="520" width="2" height="2" opacity="0.35" />
          <rect x="420" y="700" width="3" height="3" opacity="0.4" />
          <rect x="960" y="620" width="2" height="2" opacity="0.3" />
          <rect x="760" y="450" width="2" height="2" opacity="0.35" />
        </g>
        <g fill="#ffffff">
          <rect x="520" y="180" width="2" height="2" opacity="0.25" />
          <rect x="1240" y="710" width="2" height="2" opacity="0.2" />
          <rect x="340" y="820" width="2" height="2" opacity="0.22" />
        </g>
      </svg>
    </div>
  );
}