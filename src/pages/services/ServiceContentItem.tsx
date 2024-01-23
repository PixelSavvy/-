import { servicePageAdvantagesTypes } from "@/types/serviceDataTypes";

interface ServiceContentItemProps {
  service: servicePageAdvantagesTypes;
}

const ServiceContentItem: React.FC<ServiceContentItemProps> = ({ service }) => {
  return (
    <li className="flex flex-col items-center justify-center w-full gap-8 h-fit md:flex-row md:even:flex-row-reverse md:items-start md:gap-10 lg:gap-12 xl:gap-14 ">
      {/* img */}
      <div className="flex-1 w-[250px] h-[250px] ">
        <img
          src={service.fields.servicePageAdvantageImage.fields.file.url}
          alt={service.fields.servicePageAdvantageImage.fields.description}
          loading="lazy"
          className="object-contain w-full h-full rounded-xl "
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
