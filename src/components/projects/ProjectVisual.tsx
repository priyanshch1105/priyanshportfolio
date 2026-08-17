import type { Project } from "@/data/projects"

type ProjectVisualProps = {
  project: Project
}

/**
 * Generative, project-specific visuals. Each project gets a distinct
 * abstract composition (SVG) instead of a stock image — radar, shield,
 * neural net, pipeline graph or heartbeat.
 */
export function ProjectVisual({ project }: ProjectVisualProps) {
  const { accent, visual } = project
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-ink"
      style={{ background: `radial-gradient(90% 90% at 50% 50%, ${accent}14 0%, #0b0b0e 60%)` }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {visual === "radar" && <Radar accent={accent} />}
      {visual === "shield" && <Shield accent={accent} />}
      {visual === "neural" && <Neural accent={accent} />}
      {visual === "graph" && <Graph accent={accent} />}
      {visual === "pulse" && <Pulse accent={accent} />}
    </div>
  )
}

function Radar({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="h-[70%] w-[70%] max-h-[420px] max-w-[420px]" aria-hidden="true">
        {[52, 96, 140, 184].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke={accent}
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}
        <g className="origin-center">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="5s"
            repeatCount="indefinite"
          />
          <path d="M200 200 L200 16" stroke={accent} strokeOpacity="0.7" strokeWidth="2" />
          <path
            d="M200 200 L200 16 A184 184 0 0 1 383.6 200 Z"
            fill={accent}
            fillOpacity="0.08"
          />
        </g>
        <circle cx="200" cy="200" r="6" fill={accent} />
        <g className="origin-center">
          <circle cx="200" cy="200" r="10" fill="none" stroke={accent} strokeWidth="1.5">
            <animate attributeName="r" values="6;34" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.9;0" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}

function Shield({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 300 340" className="h-[72%] w-[72%] max-h-[440px] max-w-[440px]" aria-hidden="true">
        <defs>
          <pattern id="shieldGrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0 H0 V16" fill="none" stroke={accent} strokeOpacity="0.12" strokeWidth="1" />
          </pattern>
        </defs>
        <path
          d="M150 20 L250 55 V150 C250 225 205 275 150 300 C95 275 50 225 50 150 V55 Z"
          fill="url(#shieldGrid)"
          stroke={accent}
          strokeOpacity="0.75"
          strokeWidth="2"
        />
        <path
          d="M150 20 L250 55 V150 C250 225 205 275 150 300 C95 275 50 225 50 150 V55 Z"
          fill={accent}
          fillOpacity="0.05"
        />
        <line
          x1="150"
          y1="40"
          x2="150"
          y2="20"
          stroke={accent}
          strokeWidth="2"
          opacity="0"
        >
          <animate
            attributeName="y2"
            values="30;300"
            dur="3.4s"
            repeatCount="indefinite"
          />
          <animate attributeName="y1" values="10;280" dur="3.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0" dur="3.4s" repeatCount="indefinite" />
        </line>
        <path
          d="M110 150 L142 182 L195 125"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function Neural({ accent }: { accent: string }) {
  const nodes: [number, number][] = [
    [70, 90],
    [170, 60],
    [280, 110],
    [60, 200],
    [170, 180],
    [290, 220],
    [110, 300],
    [230, 290],
  ]
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [3, 6],
    [4, 6],
    [4, 7],
    [5, 7],
    [6, 7],
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 340 340" className="h-[78%] w-[78%] max-h-[480px] max-w-[480px]" aria-hidden="true">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={accent}
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill={accent}>
              <animate
                attributeName="r"
                values="4;7;4"
                dur={`${2 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={x} cy={y} r="5" fill="none" stroke={accent} strokeWidth="1">
              <animate attributeName="r" values="5;18" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.8;0" dur="2.6s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <circle cx="170" cy="175" r="70" fill={accent} fillOpacity="0.06" />
      </svg>
    </div>
  )
}

function Graph({ accent }: { accent: string }) {
  const cols = 4
  const rows = 3
  const cell = 70
  const offsetX = 40
  const offsetY = 70
  const points: [number, number][] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      points.push([offsetX + c * cell, offsetY + r * cell])
    }
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 320 280" className="h-[70%] w-[70%] max-h-[440px] max-w-[440px]" aria-hidden="true">
        {points.map(([x, y], i) => {
          const next = points[i + 1]
          return next && i % cols !== cols - 1 ? (
            <line
              key={i}
              x1={x}
              y1={y}
              x2={next[0]}
              y2={next[1]}
              stroke={accent}
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
          ) : null
        })}
        {points.slice(0, 6).map(([x, y], i) => (
          <line key={`d${i}`} x1={x} y1={y} x2={x + cell} y2={y + cell * 0.4} stroke={accent} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 4" />
        ))}
        {points.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i % 2 ? 4 : 6} fill={accent} fillOpacity="0.85" />
            <circle cx={x} cy={y} r="12" fill={accent} fillOpacity="0.08" />
          </g>
        ))}
        <circle cx={points[0][0]} cy={points[0][1]} r="6" fill={accent}>
          <animate attributeName="cx" values={`${points[0][0]};${points[1][0]};${points[2][0]};${points[3][0]}`} dur="4s" repeatCount="indefinite" />
          <animate attributeName="cy" values={`${points[0][1]};${points[1][1]};${points[2][1]};${points[3][1]}`} dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

function Pulse({ accent }: { accent: string }) {
  const path =
    "M0 90 L60 90 L75 90 L88 40 L104 140 L118 70 L132 90 L170 90 L186 50 L202 130 L216 90 L260 90 L276 90 L288 70 L300 90 L320 90"
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 320 180" className="h-[60%] w-[80%] max-h-[340px]" aria-hidden="true">
        <defs>
          <pattern id="pulseGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0 H0 V24" fill="none" stroke={accent} strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill="url(#pulseGrid)" />
        <path d={path} fill="none" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 6" />
        <path
          d={path}
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
        >
          <animate attributeName="stroke-dashoffset" values="1;0" dur="2.6s" repeatCount="indefinite" />
        </path>
        <circle cx="160" cy="90" r="30" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1">
          <animate attributeName="r" values="20;44" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
