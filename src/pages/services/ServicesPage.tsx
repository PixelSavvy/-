import Section from "@/components/ui/section";
import { useParams } from "react-router-dom";

const ServicesPage = () => {
  const { category } = useParams<{ category: string }>();
  return <Section>{category}</Section>;
};

export default ServicesPage;
