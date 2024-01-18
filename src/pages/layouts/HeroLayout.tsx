import Hero from "@/components/hero/Hero";

import { Outlet, useParams } from "react-router-dom";

const HeroLayout = () => {
  const params = useParams();
  const url = params["*"];

  return (
    <>
      <Hero url={url} />
      <Outlet />
    </>
  );
};

export default HeroLayout;
