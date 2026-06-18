import { availability, introductionContent } from "@/data/introduction";
import { profile } from "@/data/profile";
import { technologies } from "@/data/technologies";
import { Box } from "@/components/ui/Box";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechCarousel } from "@/components/portfolio/TechCarousel";
import { colors } from "@/styles/theme";
import { IoCheckmarkCircle } from "react-icons/io5";

export function IntroductionSection() {
  return (
    <Box>
      <SectionHeader {...introductionContent} />

      <ul className="availability-list">
        {availability.map((item) => (
          <li key={item} className="availability-list__item">
            <IoCheckmarkCircle size={18} color={colors.mutedLight} aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <div className="introduction-cv">
        <a
          className="cv-download-btn"
          href={profile.cvUrl}
          download="CV-Nicolas-Poblete-Landry.pdf"
        >
          Descargar CV
        </a>
      </div>

      <TechCarousel technologies={technologies} />
    </Box>
  );
}
