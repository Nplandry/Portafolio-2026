import type { Service } from "@/types/portfolio";
import { bodyTextStyle, colors } from "@/styles/theme";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      <p style={{ margin: "0 0 8px", ...bodyTextStyle, fontWeight: "bold" }}>{service.num}</p>
      <p style={{ margin: "0 0 8px", ...bodyTextStyle, fontWeight: "bold" }}>{service.title}</p>
      <p style={{ margin: 0, ...bodyTextStyle, color: colors.muted }}>{service.text}</p>
    </div>
  );
}
