import { useState, useEffect, useRef } from 'react';

// The LG initials as a character grid
const LG_ART = [
  '  ██╗      ██████╗  ',
  '  ██║     ██╔════╝  ',
  '  ██║     ██║  ███╗ ',
  '  ██║     ██║   ██║ ',
  '  ███████╗╚██████╔╝ ',
  '  ╚══════╝ ╚═════╝  ',
];

const WIDTH = 34;
const HEIGHT = 12;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;
const RX = WIDTH / 2 - 1;
const RY = HEIGHT / 2 - 0.5;

// Orbit characters for the sickle trail
const TRAIL_CHARS = ['●', '◉', '○', '◌', '·', '·', ' '];

function buildFrame(tick) {
  // Create empty grid
  const grid = [];
  for (let y = 0; y < HEIGHT; y++) {
    grid.push(new Array(WIDTH).fill(' '));
  }

  // Place LG art centered
  const offsetY = Math.floor((HEIGHT - LG_ART.length) / 2);
  const offsetX = Math.floor((WIDTH - 20) / 2);

  // We'll track which cells are "logo" cells for layering
  const logoMask = [];
  for (let y = 0; y < HEIGHT; y++) {
    logoMask.push(new Array(WIDTH).fill(false));
  }

  for (let row = 0; row < LG_ART.length; row++) {
    const chars = [...LG_ART[row]];
    for (let col = 0; col < chars.length; col++) {
      const gx = offsetX + col;
      const gy = offsetY + row;
      if (gx >= 0 && gx < WIDTH && gy >= 0 && gy < HEIGHT) {
        grid[gy][gx] = chars[col];
        if (chars[col] !== ' ') {
          logoMask[gy][gx] = true;
        }
      }
    }
  }

  // Compute orbital sickle positions
  const orbitPoints = [];
  const trailLength = TRAIL_CHARS.length;
  const speed = 0.06;
  const baseAngle = tick * speed;

  for (let i = 0; i < trailLength; i++) {
    const angle = baseAngle - i * 0.25;
    const px = Math.round(CX + RX * Math.cos(angle));
    const py = Math.round(CY + RY * Math.sin(angle));
    if (px >= 0 && px < WIDTH && py >= 0 && py < HEIGHT) {
      orbitPoints.push({ x: px, y: py, char: TRAIL_CHARS[i], index: i });
    }
  }

  // Place orbit characters (only where there's no logo)
  const orbitGrid = [];
  for (let y = 0; y < HEIGHT; y++) {
    orbitGrid.push(new Array(WIDTH).fill(null));
  }

  for (const pt of orbitPoints) {
    if (!logoMask[pt.y][pt.x]) {
      orbitGrid[pt.y][pt.x] = pt;
    }
  }

  return { grid, orbitGrid, logoMask };
}

export default function AsciiLogo({ onDone }) {
  const [tick, setTick] = useState(0);
  const [visible, setVisible] = useState(true);
  const frameRef = useRef(null);

  useEffect(() => {
    let t = 0;
    const maxTicks = 160; // ~4 seconds of animation

    const animate = () => {
      t++;
      setTick(t);
      if (t < maxTicks) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation done, keep showing static version briefly
        setTimeout(() => {
          onDone?.();
        }, 500);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [onDone]);

  const { grid, orbitGrid, logoMask } = buildFrame(tick);

  // Color interpolation for orbit trail
  const getOrbitColor = (index) => {
    const colors = [
      'var(--cyan)',
      'var(--cyan)',
      'var(--blue)',
      'var(--blue)',
      'var(--text-dim)',
      'var(--text-dim)',
      'transparent',
    ];
    return colors[index] || 'var(--text-dim)';
  };

  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        lineHeight: '1.35',
        whiteSpace: 'pre',
        marginBottom: '8px',
      }}
    >
      {grid.map((row, y) => (
        <div key={y} style={{ height: '1.35em' }}>
          {row.map((char, x) => {
            const orbit = orbitGrid[y][x];
            if (orbit) {
              return (
                <span key={x} style={{ color: getOrbitColor(orbit.index) }}>
                  {orbit.char}
                </span>
              );
            }
            if (logoMask[y][x]) {
              return (
                <span key={x} style={{ color: 'var(--green)' }}>
                  {char}
                </span>
              );
            }
            return <span key={x}>{char}</span>;
          })}
        </div>
      ))}
    </div>
  );
}
