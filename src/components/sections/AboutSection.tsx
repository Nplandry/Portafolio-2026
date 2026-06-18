import { aboutContent } from "@/data/about";
import { Box } from "@/components/ui/Box";
import { ProjectsScroll } from "@/components/portfolio/ProjectsScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <Box>
      <SectionHeader {...aboutContent} />
      <ProjectsScroll />
    </Box>
  );
}
