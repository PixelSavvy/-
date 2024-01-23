import ServiceContentItem from "./ServiceContentItem";
import SectionHeading from "@/components/section-heading/SectionHeading";
import Section from "@/components/ui/section";
import { servicePageTypes } from "@/types/serviceDataTypes";

interface ServiceContentProps {
  service: servicePageTypes | undefined;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  return (
    <Section className="space-y-24">
      <SectionHeading
        heading={service?.serviceTitle}
        subheading="სერვისები"
        paragraph={service?.serviceDescription}
      />
      <ul className="flex flex-col w-full gap-24 lg:gap-48 xl:gap-72 2xl:gap-96 place-items-center">
        {service?.servicePageAdvantages?.map((advantage, id) => (
          <ServiceContentItem key={id} service={{ fields: advantage.fields }} />
        ))}
      </ul>
    </Section>
  );
};

export default ServiceContent;
