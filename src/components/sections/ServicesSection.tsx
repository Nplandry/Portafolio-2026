import { services, servicesContent } from "@/data/services";
import { Box } from "@/components/ui/Box";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/portfolio/ServiceCard";

export function ServicesSection() {
  return (
    <Box>
      <SectionHeader {...servicesContent} />

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>
    </Box>
  );
}
