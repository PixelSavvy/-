import { useContext } from "react";

import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { Turn } from "hamburger-react";

const Hamburger = () => {
  const {
    isMobileNavigationOpen,
    isSideMenuOpen,
    setIsMobileNavigationOpen,
    setIsSideMenuOpen,
  } = useContext(MobileNavigationContext);

  const props = {
    size: 24,
    distange: "lg",
    color: "#000",
    rounded: true,
    label: "Show menu",
    toggled: isMobileNavigationOpen,
    toggle: () => {
      setIsMobileNavigationOpen(!isMobileNavigationOpen);
    },
  };

  return (
    <button type="button" className="z-50 lg:hidden">
      <Turn {...props} />
    </button>
  );
};

export default Hamburger;
