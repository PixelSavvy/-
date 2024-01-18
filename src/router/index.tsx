import { Routes, useLocation } from "react-router-dom";

import childrenRoutes from "./routes";

import Loader from "@/components/loader/Loader";
import { Suspense } from "react";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location} key={location.key}>
        {childrenRoutes}
      </Routes>
    </Suspense>
  );
};

export default AnimatedRoutes;
