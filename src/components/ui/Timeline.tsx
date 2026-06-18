import type { TimelineEntry } from "@/types/portfolio";

type TimelineProps = {
  items: TimelineEntry[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      <div className="timeline__line" aria-hidden="true" />
      {items.map((item) => (
        <div key={`${item.lugar}-${item.fecha}`} className="timeline__item">
          <div className="timeline__meta">
            <p className="timeline__meta-place">{item.lugar}</p>
            <p className="timeline__meta-date">{item.fecha}</p>
          </div>
          <div className="timeline__dot" aria-hidden="true" />
          <div className="timeline__body">
            <p className="timeline__body-title">{item.titulo}</p>
            <p className="timeline__body-text">{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
