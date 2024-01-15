import { useState } from "react";
import useContenful from "@/hooks/useContentful";

import Section from "@/components/ui/section";
import SectionHeading from "@/components/section-heading/SectionHeading";
import ServicesCard from "./ServicesCard";

import { servicesDataTypes } from "@/types/servicesDataTypes";

const Services = () => {
  const [servicesData, setServicesData] = useState<servicesDataTypes[]>([]);

  const query = "featuredServices";
  const setStateFunction = setServicesData;

  const {} = useContenful<servicesDataTypes[]>({
    query,
    setStateFunction,
  });

  return (
    <Section>
      <SectionHeading
        heading="ნებისმიერი აკადემიური პრობლემის გადაჭრა"
        subheading="ჩვენი სერვისები"
      />
      <ul className="grid grid-cols-1 gap-6 py-8 md:gap-4 md:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service, id) => (
          <ServicesCard
            service={service}
            key={service.serviceTitle}
            isFocused={service.isFocused}
            id={id}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Services;
