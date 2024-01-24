import { useContext } from "react";

import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { Turn } from "hamburger-react";

const Hamburger = () => {
  const {
    isMobileMenuOpen,
    setisMobileMenuOpen,
    isMobileSideMenuOpen,
    setisMobileSideMenuOpen,
  } = useContext(MobileNavigationContext);

  const props = {
    size: 24,
    distange: "lg",
    color: "#000",
    rounded: true,
    label: "Show menu",
    toggled: isMobileMenuOpen || isMobileSideMenuOpen,
    toggle: () => {
      setisMobileMenuOpen(!isMobileMenuOpen);

      if (isMobileSideMenuOpen) {
        setisMobileSideMenuOpen(!isMobileSideMenuOpen);
        setisMobileMenuOpen(!isMobileMenuOpen);
      }
    },
  };

  return (
    <button type="button" className="z-50 lg:hidden">
      <Turn {...props} />
    </button>
  );
};

export default Hamburger;
