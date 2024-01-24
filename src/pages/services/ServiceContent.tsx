import ServiceContentItem from "./ServiceContentItem";
import SectionHeading from "@/components/section-heading/SectionHeading";
import Section from "@/components/ui/section";
import { servicePageTypes } from "@/types/serviceDataTypes";

interface ServiceContentProps {
  service: servicePageTypes | undefined;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  return (
    <Section className="space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-40">
      <SectionHeading
        heading={service?.serviceTitle}
        subheading="სერვისები"
        paragraph={service?.serviceDescription}
      />
      <ul className="flex flex-col w-full gap-16 lg:gap-24 xl:gap-32 2xl:gap-40 place-items-center">
        {service?.servicePageAdvantages?.map((advantage, id) => (
          <ServiceContentItem key={id} service={{ fields: advantage.fields }} />
        ))}
      </ul>
    </Section>
  );
};

export default ServiceContent;
