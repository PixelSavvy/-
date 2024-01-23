import Hero from "@/components/hero/Hero";

import { Outlet } from "react-router-dom";

const HeroLayout = () => {
  const url = window.location.pathname;

  return (
    <>
      <Hero url={url} />
      <Outlet />
    </>
  );
};

export default HeroLayout;
