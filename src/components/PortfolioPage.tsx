import { MainColumn } from "@/components/layout/MainColumn";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { AboutSection } from "@/components/sections/AboutSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { education, educationContent } from "@/data/education";
import { experience, experienceContent } from "@/data/experience";

export function PortfolioPage() {
  return (
    <PortfolioLayout sidebar={<Sidebar />}>
      <MainColumn>
        <IntroductionSection />
        <AboutSection />
        <ServicesSection />
        <TimelineSection content={experienceContent} items={experience} />
        <TimelineSection content={educationContent} items={education} />
      </MainColumn>
    </PortfolioLayout>
  );
}
