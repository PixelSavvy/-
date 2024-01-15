import { useParams } from "react-router-dom";

const ServicesPage = () => {
  const { category } = useParams<{ category: string }>();
  return <div>{category}</div>;
};

export default ServicesPage;
