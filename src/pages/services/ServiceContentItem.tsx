import { servicePageAdvantagesTypes } from "@/types/serviceDataTypes";

interface ServiceContentItemProps {
  service: servicePageAdvantagesTypes;
}

const ServiceContentItem: React.FC<ServiceContentItemProps> = ({ service }) => {
  return (
    <li className="flex flex-col items-center justify-between w-full gap-8 h-fit md:flex-row md:even:flex-row-reverse md:items-start md:gap-12 lg:gap-16 xl:gap-20 ">
      {/* img */}
      <div className="max-w-[100rem] h-[25rem] flex-1">
        <img
          src={service.fields.servicePageAdvantageImage.fields.file.url}
          alt={service.fields.servicePageAdvantageImage.fields.description}
          loading="lazy"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      {/* content */}
      <div className="flex-1">
        <h3 className="text-secondary">
          {service.fields.servicePageAdvantageHeading}
        </h3>
        <p>{service.fields.servicePageAdvantageDescription}</p>
      </div>
    </li>
  );
};

export default ServiceContentItem;
