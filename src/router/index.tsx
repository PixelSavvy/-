import { Routes, useLocation } from "react-router-dom";

import { Root } from "./routes";

const AnimatedRoutes = () => {
  const location = useLocation();
  return <Routes location={location} key={location.key} children={Root} />;
};

export default AnimatedRoutes;
