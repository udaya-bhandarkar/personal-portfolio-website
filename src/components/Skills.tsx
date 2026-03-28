import {
  SiPython, SiR, SiDatabricks, SiGit, SiFigma, SiDocker, SiApachespark,
  SiPandas, SiNumpy, SiTensorflow, SiApachekafka, SiApacheairflow,
  SiSnowflake, SiPostgresql, SiKubernetes, SiJupyter, SiGithub,
  SiApachehadoop, SiScikitlearn, SiStreamlit, SiMongodb, SiGnubash
} from "react-icons/si";
import { FaFileExcel, FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

/* ── Inline Tableau logo ── */
function TableauIcon({ size = 24, color = "#E97627" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.696zm6.03 2.262l-.002 1.623-1.53-.027v.534l1.53-.004v1.627h.59V4.566l1.53.004v-.534l-1.53.027V2.436h-.59zM4.986 2.436v1.623l-1.53-.027v.534l1.53-.004v1.627h.588V4.566l1.53.004v-.534l-1.53.027V2.436h-.588zm11.76 4.074v2.563H14.15v.835h2.595v2.565h.843V9.908h2.597v-.835h-2.597V6.51h-.843zM.91 6.627v2.563H-1.686v.835H.91v2.565h.842V10.025H4.35v-.835H1.752V6.627H.91zm11.653-.117v3.283H9.682v1.06h2.881v3.286h1.078V10.853h2.882v-1.06H13.64V6.51h-1.078zm-6.03 2.262v1.623l-1.53-.027v.534l1.53-.004v1.627h.588v-1.623l1.53.004v-.534l-1.53.027V8.772h-.588zm16.136-.003v1.623l-1.53-.027v.534l1.53-.004V12.522h.588v-1.623l1.53.004v-.534l-1.53.027V8.769h-.588zm-8.067 5.108v2.563h-2.596v.835h2.596v2.565h.843v-2.565h2.596v-.835h-2.596v-2.563h-.843zm-6.03 2.262v1.623l-1.53-.027v.534l1.53-.004v1.627h.588v-1.623l1.53.004v-.534l-1.53.027v-1.627h-.588zm12.06 0v1.623l-1.53-.027v.534l1.53-.004v1.627h.59v-1.623l1.53.004v-.534l-1.53.027v-1.627h-.59zm-6.032 4.33v2.2H12.35v.58h1.972v2.2h.696v-2.2h1.97v-.58h-1.97v-2.2h-.696z" />
    </svg>
  );
}

/* ── Skill definitions ── */
type Skill = {
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  name: string;
  color: string;
  /** Relative size weight: 1 = small, 2 = medium, 3 = large */
  weight: number;
};

const skills: Skill[] = [
  // Core languages & querying
  { icon: SiPython,         name: "Python",       color: "#3776AB",  weight: 3 },
  { icon: TbSql,            name: "SQL",          color: "#00758F",  weight: 3 },
  { icon: SiR,              name: "R",            color: "#276DC3",  weight: 2 },
  { icon: SiGnubash,        name: "Bash",         color: "#4EAA25",  weight: 1 },

  // Data science & ML
  { icon: SiPandas,         name: "Pandas",       color: "#E70488",  weight: 2 },
  { icon: SiNumpy,          name: "NumPy",        color: "#4DABCF",  weight: 2 },
  { icon: SiScikitlearn,    name: "Scikit-learn", color: "#F7931E",  weight: 2 },
  { icon: SiTensorflow,     name: "TensorFlow",   color: "#FF6F00",  weight: 1 },
  { icon: SiJupyter,        name: "Jupyter",      color: "#F37626",  weight: 1 },

  // Cloud & infrastructure
  { icon: FaAws,            name: "AWS",          color: "#FF9900",  weight: 2 },
  { icon: VscAzure,         name: "Azure",        color: "#0078D4",  weight: 2 },
  { icon: SiDocker,         name: "Docker",       color: "#2496ED",  weight: 2 },
  { icon: SiKubernetes,     name: "Kubernetes",   color: "#326CE5",  weight: 1 },
  { icon: SiSnowflake,      name: "Snowflake",    color: "#29B5E8",  weight: 2 },

  // Data engineering
  { icon: SiDatabricks,     name: "Databricks",   color: "#FF3621",  weight: 2 },
  { icon: SiApachespark,    name: "Spark",        color: "#E25A1C",  weight: 2 },
  { icon: SiApachekafka,    name: "Kafka",        color: "#FFFFFF",  weight: 2 },
  { icon: SiApacheairflow,  name: "Airflow",      color: "#017CEE",  weight: 2 },
  { icon: SiApachehadoop,   name: "Hadoop",       color: "#66CCFF",  weight: 1 },

  // Databases
  { icon: SiPostgresql,     name: "PostgreSQL",   color: "#4169E1",  weight: 2 },
  { icon: SiMongodb,        name: "MongoDB",      color: "#47A248",  weight: 1 },

  // Visualization & tools
  { icon: TableauIcon,      name: "Tableau",      color: "#E97627",  weight: 2 },
  { icon: FaFileExcel,      name: "Excel",        color: "#217346",  weight: 1 },
  { icon: SiStreamlit,      name: "Streamlit",    color: "#FF4B4B",  weight: 1 },
  { icon: SiFigma,          name: "Figma",        color: "#F24E1E",  weight: 1 },

  // Dev tools
  { icon: SiGit,            name: "Git",          color: "#F05032",  weight: 2 },
  { icon: SiGithub,         name: "GitHub",       color: "#ffffff",  weight: 1 },
];

/* ── Bubble size from weight ── */
function bubbleSize(weight: number): number {
  if (weight === 3) return 88;
  if (weight === 2) return 70;
  return 56;
}

/* ── Pre-computed bubble layout positions (non-overlapping) ── */
function layoutBubbles(
  skills: Skill[],
  containerW: number,
  containerH: number,
): { x: number; y: number; r: number }[] {
  const placed: { x: number; y: number; r: number }[] = [];
  const padding = 6;

  // Sort by size descending so big ones get placed first
  const indexed = skills.map((s, i) => ({ i, r: bubbleSize(s.weight) / 2 }));
  indexed.sort((a, b) => b.r - a.r);

  const orderMap = new Map<number, { x: number; y: number; r: number }>();

  for (const { i, r } of indexed) {
    let bestX = containerW / 2;
    let bestY = containerH / 2;
    let found = false;

    // Golden-angle spiral for natural distribution
    for (let attempt = 0; attempt < 2000; attempt++) {
      const angle = attempt * 2.399963;
      const dist = 2 + attempt * 0.7;
      const cx = containerW / 2 + Math.cos(angle) * dist;
      const cy = containerH / 2 + Math.sin(angle) * dist;

      if (cx - r < 0 || cx + r > containerW) continue;
      if (cy - r < 0 || cy + r > containerH) continue;

      let overlaps = false;
      for (const p of placed) {
        const dx = cx - p.x;
        const dy = cy - p.y;
        const minDist = r + p.r + padding;
        if (dx * dx + dy * dy < minDist * minDist) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        bestX = cx;
        bestY = cy;
        found = true;
        break;
      }
    }

    if (!found) {
      const angle = placed.length * 2.4;
      const dist = 60 + placed.length * 28;
      bestX = containerW / 2 + Math.cos(angle) * dist;
      bestY = containerH / 2 + Math.sin(angle) * dist;
    }

    placed.push({ x: bestX, y: bestY, r });
    orderMap.set(i, { x: bestX, y: bestY, r });
  }

  // ── Re-center the whole cluster ──
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of placed) {
    minX = Math.min(minX, p.x - p.r);
    maxX = Math.max(maxX, p.x + p.r);
    minY = Math.min(minY, p.y - p.r);
    maxY = Math.max(maxY, p.y + p.r);
  }
  const offsetX = containerW / 2 - (minX + maxX) / 2;
  const offsetY = containerH / 2 - (minY + maxY) / 2;
  for (const [key, val] of orderMap) {
    orderMap.set(key, { x: val.x + offsetX, y: val.y + offsetY, r: val.r });
  }

  return skills.map((_, i) => orderMap.get(i)!);
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number; r: number }[]>([]);
  const [containerSize, setContainerSize] = useState({ w: 900, h: 550 });

  useEffect(() => {
    function update() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const w = rect.width;
        const h = Math.max(440, Math.min(520, w * 0.5));
        setContainerSize({ w, h });
        setPositions(layoutBubbles(skills, w, h));
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="skills" className="pt-20 pb-12 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <h2 className="text-4xl text-white mb-4">Skills</h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </div>

        <div
          ref={containerRef}
          className="bubble-chart-container"
          style={{ height: containerSize.h }}
        >
          {positions.length > 0 &&
            skills.map((skill, index) => {
              const pos = positions[index];
              if (!pos) return null;
              const Icon = skill.icon;
              const diameter = pos.r * 2;
              const iconSize = Math.round(diameter * 0.38);

              // Each bubble gets a unique gentle float
              const floatDuration = 5 + (index % 7) * 0.6;
              const floatYAmount = 3 + (index % 4) * 1.5;
              const floatXAmount = 2 + (index % 5) * 1;
              const delay = index * 0.08;

              return (
                <motion.div
                  key={skill.name}
                  className="skill-bubble"
                  style={{
                    width: diameter,
                    height: diameter,
                    left: pos.x - pos.r,
                    top: pos.y - pos.r,
                    "--bubble-color": skill.color,
                  } as React.CSSProperties}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -floatYAmount, 0, floatYAmount * 0.5, 0],
                    x: [0, floatXAmount, 0, -floatXAmount * 0.7, 0],
                  }}
                  transition={{
                    scale: { duration: 0.5, delay, ease: "backOut" },
                    opacity: { duration: 0.4, delay },
                    y: {
                      duration: floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.5,
                    },
                    x: {
                      duration: floatDuration * 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.8,
                    },
                  }}
                  whileHover={{ scale: 1.18 }}
                >
                  <div className="skill-bubble-glow" style={{ background: `radial-gradient(circle, ${skill.color}22 0%, transparent 70%)` }} />
                  <div className="skill-bubble-inner">
                    <Icon size={iconSize} color={skill.color} />
                  </div>
                  <span className="skill-bubble-tooltip">{skill.name}</span>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}