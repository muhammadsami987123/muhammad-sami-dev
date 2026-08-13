import type { VisualKey } from '@/data/projects';

const PALETTE: Record<VisualKey, { from: string; to: string; accent: string }> = {
  flow: { from: '#0b1220', to: '#111827', accent: '#60a5fa' },
  commerce: { from: '#0f1117', to: '#141a17', accent: '#34d399' },
  suite: { from: '#0b1220', to: '#161226', accent: '#a78bfa' },
  travel: { from: '#0a1017', to: '#12202a', accent: '#38bdf8' },
  aviation: { from: '#0c0d10', to: '#17181d', accent: '#d4d4d8' },
  octet: { from: '#0d0b14', to: '#171526', accent: '#c084fc' },
  voice: { from: '#0a0f18', to: '#101a26', accent: '#22d3ee' },
  automotive: { from: '#0d0b0b', to: '#1a1414', accent: '#f59e0b' },
  bazaar: { from: '#100c0a', to: '#1c1512', accent: '#fb923c' },
  hive: { from: '#0f0d08', to: '#1b1710', accent: '#fbbf24' },
  terminal: { from: '#0a0d0b', to: '#111a14', accent: '#4ade80' },
  archive: { from: '#0c0c0e', to: '#16161a', accent: '#71717a' },
};

/** Deterministic — never use Math.random here, it would break hydration. */
function Motif({ variant, accent }: { variant: VisualKey; accent: string }) {
  switch (variant) {
    case 'flow':
      return (
        <g>
          {[
            [70, 70],
            [70, 155],
            [200, 112],
            [318, 70],
            [318, 155],
          ].map(([x, y], i) => (
            <rect
              key={i}
              x={x - 34}
              y={y - 17}
              width="68"
              height="34"
              rx="8"
              fill="none"
              stroke={accent}
              strokeOpacity={i === 2 ? 0.9 : 0.42}
              strokeWidth={i === 2 ? 1.6 : 1}
            />
          ))}
          <path
            d="M104 70 C150 70 154 112 166 112 M104 155 C150 155 154 112 166 112 M234 112 C246 112 250 70 284 70 M234 112 C246 112 250 155 284 155"
            fill="none"
            stroke={accent}
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {[70, 155].map((y) => (
            <circle key={y} cx="104" cy={y} r="2.5" fill={accent} fillOpacity="0.8" />
          ))}
          <circle cx="200" cy="112" r="4" fill={accent} />
        </g>
      );

    case 'commerce':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={48 + i * 74}
              y="58"
              width="58"
              height="72"
              rx="8"
              fill="none"
              stroke={accent}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <rect
              key={`b-${i}`}
              x={58 + i * 74}
              y="112"
              width={34 - i * 6}
              height="4"
              rx="2"
              fill={accent}
              fillOpacity="0.5"
            />
          ))}
          <rect x="252" y="52" width="104" height="120" rx="12" fill={accent} fillOpacity="0.06" stroke={accent} strokeOpacity="0.45" strokeWidth="1" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`m-${i}`}
              x={i % 2 === 0 ? 264 : 288}
              y={70 + i * 22}
              width={i % 2 === 0 ? 56 : 56}
              height="12"
              rx="6"
              fill={accent}
              fillOpacity={i % 2 === 0 ? 0.28 : 0.14}
            />
          ))}
          <text x="264" y="160" fontSize="8" fill={accent} fillOpacity="0.55" letterSpacing="2">
            EN · UR · AR
          </text>
        </g>
      );

    case 'suite':
      return (
        <g>
          {Array.from({ length: 24 }, (_, i) => {
            const col = i % 8;
            const row = Math.floor(i / 8);
            const lit = [0, 3, 5, 9, 12, 14, 17, 20, 23].includes(i);
            return (
              <rect
                key={i}
                x={44 + col * 40}
                y={56 + row * 40}
                width="30"
                height="30"
                rx="6"
                fill={accent}
                fillOpacity={lit ? 0.22 : 0.05}
                stroke={accent}
                strokeOpacity={lit ? 0.6 : 0.18}
                strokeWidth="1"
              />
            );
          })}
          <path d="M44 178 H356" stroke={accent} strokeOpacity="0.25" strokeWidth="1" />
          <path d="M44 178 H150" stroke={accent} strokeOpacity="0.75" strokeWidth="2" />
        </g>
      );

    case 'travel':
      return (
        <g>
          <circle cx="200" cy="200" r="120" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
          <circle cx="200" cy="200" r="152" fill="none" stroke={accent} strokeOpacity="0.16" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="120" ry="42" fill="none" stroke={accent} strokeOpacity="0.22" strokeWidth="1" />
          <path
            d="M62 132 C130 62 270 62 338 132"
            fill="none"
            stroke={accent}
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeDasharray="5 6"
          />
          {[
            [62, 132],
            [200, 82],
            [338, 132],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 1 ? 5 : 3.5} fill={accent} fillOpacity={i === 1 ? 1 : 0.7} />
          ))}
          <circle cx="200" cy="82" r="12" fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="1" />
        </g>
      );

    case 'aviation':
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M0 ${150 + i * 16} H400`}
              stroke={accent}
              strokeOpacity={0.06 + i * 0.04}
              strokeWidth="1"
            />
          ))}
          <path
            d="M40 168 C140 168 210 96 360 58"
            fill="none"
            stroke={accent}
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeDasharray="3 7"
          />
          <g transform="translate(346 62) rotate(-18)">
            <path d="M0 0 L-34 7 L-26 0 L-34 -7 Z" fill={accent} fillOpacity="0.9" />
            <path d="M-16 0 L-24 -14 L-18 -14 Z" fill={accent} fillOpacity="0.55" />
            <path d="M-16 0 L-24 14 L-18 14 Z" fill={accent} fillOpacity="0.55" />
          </g>
          <circle cx="40" cy="168" r="3" fill={accent} fillOpacity="0.7" />
          <text x="40" y="196" fontSize="8" fill={accent} fillOpacity="0.45" letterSpacing="4">
            PRIVATE SKY CHARTER
          </text>
        </g>
      );

    case 'octet':
      return (
        <g>
          <circle cx="200" cy="112" r="76" fill="none" stroke={accent} strokeOpacity="0.22" strokeWidth="1" />
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * Math.PI * 2) / 8 - Math.PI / 2;
            const x = 200 + Math.cos(angle) * 76;
            const y = 112 + Math.sin(angle) * 76;
            return (
              <g key={i}>
                <line x1="200" y1="112" x2={x} y2={y} stroke={accent} strokeOpacity="0.2" strokeWidth="1" />
                <circle cx={x} cy={y} r="11" fill={accent} fillOpacity="0.12" stroke={accent} strokeOpacity="0.65" strokeWidth="1" />
                <circle cx={x} cy={y} r="3" fill={accent} fillOpacity="0.85" />
              </g>
            );
          })}
          <circle cx="200" cy="112" r="20" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.6" strokeWidth="1" />
          <text x="200" y="116" fontSize="11" textAnchor="middle" fill={accent} fillOpacity="0.9" letterSpacing="1">
            8
          </text>
        </g>
      );

    case 'voice':
      return (
        <g>
          {Array.from({ length: 26 }, (_, i) => {
            const heights = [8, 16, 30, 46, 28, 60, 38, 72, 44, 26, 54, 34, 18, 40, 66, 30, 50, 22, 36, 58, 24, 42, 14, 28, 18, 10];
            const h = heights[i];
            return (
              <rect
                key={i}
                x={34 + i * 8}
                y={112 - h / 2}
                width="3"
                height={h}
                rx="1.5"
                fill={accent}
                fillOpacity={h > 40 ? 0.85 : 0.4}
              />
            );
          })}
          <rect x="252" y="56" width="112" height="112" rx="10" fill={accent} fillOpacity="0.05" stroke={accent} strokeOpacity="0.4" strokeWidth="1" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={`c-${i}`}
              x={264 + (i === 1 || i === 2 ? 12 : 0)}
              y={74 + i * 18}
              width={[62, 44, 52, 36, 70][i]}
              height="5"
              rx="2.5"
              fill={accent}
              fillOpacity={0.5 - i * 0.06}
            />
          ))}
        </g>
      );

    case 'automotive':
      return (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M${-40 + i * 30} 190 L${120 + i * 62} 44`}
              stroke={accent}
              strokeOpacity={0.1 + i * 0.06}
              strokeWidth={i === 4 ? 1.6 : 1}
            />
          ))}
          <path
            d="M76 146 L108 112 L182 106 L228 84 L296 92 L324 118 L322 146 Z"
            fill={accent}
            fillOpacity="0.08"
            stroke={accent}
            strokeOpacity="0.7"
            strokeWidth="1.3"
          />
          <circle cx="132" cy="148" r="15" fill="none" stroke={accent} strokeOpacity="0.8" strokeWidth="1.5" />
          <circle cx="278" cy="148" r="15" fill="none" stroke={accent} strokeOpacity="0.8" strokeWidth="1.5" />
          <path d="M40 172 H360" stroke={accent} strokeOpacity="0.35" strokeWidth="1" />
        </g>
      );

    case 'bazaar':
      return (
        <g>
          <path d="M56 84 H344 L330 108 H70 Z" fill={accent} fillOpacity="0.16" stroke={accent} strokeOpacity="0.5" strokeWidth="1" />
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              d={`M${70 + i * 32.5} 108 q16 14 32.5 0`}
              fill="none"
              stroke={accent}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`s-${i}`}
              x={74 + i * 66}
              y="128"
              width="52"
              height="44"
              rx="6"
              fill="none"
              stroke={accent}
              strokeOpacity="0.32"
              strokeWidth="1"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect key={`t-${i}`} x={84 + i * 66} y="146" width={32 - i * 4} height="4" rx="2" fill={accent} fillOpacity="0.45" />
          ))}
        </g>
      );

    case 'hive':
      return (
        <g>
          {Array.from({ length: 7 }, (_, i) => {
            const positions: [number, number][] = [
              [200, 112],
              [200, 62],
              [243, 87],
              [243, 137],
              [200, 162],
              [157, 137],
              [157, 87],
            ];
            const [cx, cy] = positions[i];
            const pts = Array.from({ length: 6 }, (_, k) => {
              const a = (k * Math.PI) / 3 - Math.PI / 2;
              return `${(cx + Math.cos(a) * 26).toFixed(1)},${(cy + Math.sin(a) * 26).toFixed(1)}`;
            }).join(' ');
            return (
              <polygon
                key={i}
                points={pts}
                fill={accent}
                fillOpacity={i === 0 ? 0.2 : 0.06}
                stroke={accent}
                strokeOpacity={i === 0 ? 0.8 : 0.35}
                strokeWidth="1"
              />
            );
          })}
          <circle cx="200" cy="112" r="4" fill={accent} />
        </g>
      );

    case 'terminal':
      return (
        <g>
          <rect x="52" y="48" width="296" height="128" rx="10" fill={accent} fillOpacity="0.04" stroke={accent} strokeOpacity="0.4" strokeWidth="1" />
          <path d="M52 70 H348" stroke={accent} strokeOpacity="0.28" strokeWidth="1" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={68 + i * 14} cy="59" r="3" fill={accent} fillOpacity={0.5 - i * 0.12} />
          ))}
          <path d="M70 92 l10 8 l-10 8" fill="none" stroke={accent} strokeOpacity="0.85" strokeWidth="1.6" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`l-${i}`}
              x={i === 0 ? 90 : 70}
              y={i === 0 ? 96 : 116 + (i - 1) * 18}
              width={[84, 148, 108, 132][i]}
              height="5"
              rx="2.5"
              fill={accent}
              fillOpacity={0.55 - i * 0.1}
            />
          ))}
        </g>
      );

    default:
      return (
        <g>
          {Array.from({ length: 5 }, (_, i) => (
            <rect
              key={i}
              x={62 + i * 56}
              y={72 + (i % 2) * 18}
              width="44"
              height={64 - (i % 2) * 18}
              rx="6"
              fill={accent}
              fillOpacity="0.07"
              stroke={accent}
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          ))}
          <path d="M62 168 H338" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
        </g>
      );
  }
}

/** Keeps long project names inside the 400px canvas without measuring text. */
function titleSize(length: number) {
  if (length > 20) return 17;
  if (length > 16) return 20;
  if (length > 11) return 25;
  return 30;
}

/**
 * Generative cover art for projects that have no real screenshot.
 * Designed as project artwork — typography first, motif second — never as a fake screenshot.
 */
export default function ProjectVisual({
  variant,
  label,
  title,
  subtitle,
  className = '',
}: {
  variant: VisualKey;
  label: string;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const { from, to, accent } = PALETTE[variant] ?? PALETTE.archive;
  const uid = `pv-${variant}`;
  const coverTitle = (title ?? label).toUpperCase();
  const coverSubtitle = subtitle?.toUpperCase();

  return (
    <svg
      viewBox="0 0 400 225"
      className={className}
      role="img"
      aria-label={`${label} — generated project cover artwork`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-scrim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} stopOpacity="0" />
          <stop offset="55%" stopColor={from} stopOpacity="0.72" />
          <stop offset="100%" stopColor={from} stopOpacity="0.94" />
        </linearGradient>
        <pattern id={`${uid}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 H0 V20" fill="none" stroke={accent} strokeOpacity="0.07" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="400" height="225" fill={`url(#${uid}-bg)`} />
      <rect width="400" height="225" fill={`url(#${uid}-grid)`} />
      <rect width="400" height="225" fill={`url(#${uid}-glow)`} />

      <g transform="translate(20 -18) scale(0.9)" opacity="0.9">
        <Motif variant={variant} accent={accent} />
      </g>

      <rect x="0" y="112" width="400" height="113" fill={`url(#${uid}-scrim)`} />
      <path d="M24 148 H72" stroke={accent} strokeOpacity="0.8" strokeWidth="2" />

      <text
        x="24"
        y={coverSubtitle ? 182 : 190}
        fontSize={titleSize(coverTitle.length)}
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="1.5"
      >
        {coverTitle}
      </text>
      {coverSubtitle && (
        <text x="24" y="202" fontSize="8" fontWeight="600" fill={accent} fillOpacity="0.9" letterSpacing="3">
          {coverSubtitle}
        </text>
      )}

      <text x="376" y="26" fontSize="6" textAnchor="end" fill="#ffffff" fillOpacity="0.28" letterSpacing="2.4">
        PROJECT COVER
      </text>
      <rect x="0" y="0" width="400" height="225" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
    </svg>
  );
}
