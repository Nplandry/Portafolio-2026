import type { SectionContent, TimelineEntry } from "@/types/portfolio";
import { Box } from "@/components/ui/Box";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";

type TimelineSectionProps = {
  content: SectionContent;
  items: TimelineEntry[];
};

export function TimelineSection({ content, items }: TimelineSectionProps) {
  return (
    <Box>
      <SectionHeader {...content} />
      <Timeline items={items} />
    </Box>
  );
}
