import ServicesButton from "@/components/buttons/ServicesButton";

import ServicesCardIcon from "./ServicesCardIcon";
import ServicesRandomNumber from "./ServicesRandomNumber";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { servicesDataTypes } from "@/types/servicesDataTypes";

interface ServicesCardProps {
  service: servicesDataTypes;
  style?: React.CSSProperties;
  id: number;
  isFocused: boolean;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ service, id }) => {
  const serviceTitle = service.serviceTitle.replace(" ", "-").toLowerCase();
  const href = `/servisebi/${serviceTitle}`;

  return (
    <Card
      className={` px-4 py-8 flex flex-col justify-center items-center text-center shadow-xl rounded-xl hover:bg-secondary hover:text-background focus-within: focus-within:bg-secondary focus-within:text-background transition-colors ease duration-250 cursor-pointer group border-none  ${
        service.isFocused ? "bg-secondary  text-background" : ""
      } `}
    >
      {/* Header */}
      <CardHeader className="p-0 mb-2 space-y-0">
        <ServicesCardIcon
          isFocused={service.isFocused}
          color={service.color}
          id={id}
        />
      </CardHeader>
      {/* Title */}
      <CardTitle className="mb-4 large lg:max-w-min">
        {service.serviceTitle}
      </CardTitle>
      {/* Content */}
      <CardContent className="p-0">
        <p>{service.serviceDescription}</p>
      </CardContent>
      {/* Cta */}
      <ServicesButton isFocused={service.isFocused} href={href} />
      <ServicesRandomNumber min={service.min} max={service.max} />
    </Card>
  );
};

export default ServicesCard;
