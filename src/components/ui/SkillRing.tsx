import type { Skill } from "@/types/portfolio";

type SkillRingProps = {
  skill: Skill;
};

export function SkillRing({ skill }: SkillRingProps) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const offset = circ - (skill.percent / 100) * circ;

  return (
    <div style={{ textAlign: "center" }}>
      <svg width="56" height="56" style={{ display: "block", margin: "0 auto 4px" }}>
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
        />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(90 28 28)"
        />
      </svg>
      <span style={{ fontSize: "12px" }}>{skill.name}</span>
    </div>
  );
}
