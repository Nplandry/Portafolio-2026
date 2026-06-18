import type { SectionContent } from "@/types/portfolio";

type SectionHeaderProps = SectionContent & {
  subtitleMaxWidth?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  subtitleMaxWidth,
}: SectionHeaderProps) {
  return (
    <>
      <p className="section-header__label">{label}</p>
      <h1 className="section-header__title">{title}</h1>
      <p
        className="section-header__subtitle"
        style={subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : undefined}
      >
        {subtitle}
      </p>
    </>
  );
}
