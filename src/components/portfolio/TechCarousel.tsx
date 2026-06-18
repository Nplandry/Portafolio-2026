import type { Technology } from "@/types/portfolio";
import { colors } from "@/styles/theme";

type TechCarouselProps = {
  technologies: Technology[];
};

export function TechCarousel({ technologies }: TechCarouselProps) {
  const items = [...technologies, ...technologies];

  return (
    <div className="tech-carousel">
      <div className="tech-carousel__track">
        {items.map((tech, index) => (
          <div key={`${tech.name}-${index}`} style={{ textAlign: "center", flexShrink: 0 }}>
            <img src={tech.src} alt={tech.name} width={48} height={48} />
            <p style={{ margin: "6px 0 0", fontSize: "10px", color: colors.mutedDark }}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
