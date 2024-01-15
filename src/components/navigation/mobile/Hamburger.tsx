import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { Turn } from "hamburger-react";

const Hamburger = () => {
  const { isMenuOpen, setIsMenuOpen, isSideMenuOpen } = useContext(
    MobileNavigationContext
  );

  return (
    <div
      className={`relative z-[100]  transition-colors duration-1700 ease-in-out ${
        isMenuOpen
          ? "text-secondary"
          : isSideMenuOpen
          ? "text-white"
          : "text-foreground"
      }}`}
    >
      <Turn
        label="Open menu"
        distance="sm"
        rounded
        toggled={isMenuOpen}
        onToggle={setIsMenuOpen}
      />
    </div>
  );
};

export default Hamburger;
