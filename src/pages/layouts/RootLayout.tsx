import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

import { Outlet, useParams } from "react-router-dom";

const RootLayout = () => {
  const params = useParams();
  const url = params["*"];

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero url={url} />
        <Outlet />
      </main>
      <footer>Root Footer</footer>
    </>
  );
};

export default RootLayout;
