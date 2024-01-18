import PageTransition from "@/animation/PageTransition";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <PageTransition>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default RootLayout;
