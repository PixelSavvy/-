import { useEffect, useState } from "react";
import useContentful from "@/hooks/useContentful";
import { useParams } from "react-router-dom";
import ServiceContent from "./ServiceContent";
import ServicesCta from "./ServicesCta";
import { servicePageTypes } from "@/types/serviceDataTypes";

const ServicePage = () => {
  const [services, setServices] = useState<servicePageTypes[]>([]);
  const [activeService, setActiveService] = useState<
    servicePageTypes | undefined
  >();
  const { serviceId } = useParams();

  const query = "servicePage";
  const setStateFunction = setServices;

  const {} = useContentful<servicePageTypes[]>({ query, setStateFunction });

  useEffect(() => {
    if (!services) return;

    const service = services.find((service) => service.serviceId === serviceId);
    setActiveService(service);
  }, [services, serviceId]);

  return (
    <>
      <ServiceContent service={activeService} />
      <ServicesCta />
    </>
  );
};

export default ServicePage;
