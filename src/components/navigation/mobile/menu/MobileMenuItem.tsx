import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { NavLink } from "react-router-dom";

import { navigationLinksTypes } from "@/types";
import { setActiveStyles } from "@/lib/setActiveStyles";
import { ChevronRight } from "@/assets/icons/icons";

interface MobileMenuItemProps {
  link: navigationLinksTypes;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ link }) => {
  const { setIsSideMenuOpen } = useContext(MobileNavigationContext);

  const sideMenuOpenHandler = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <li>
      {!link.collapsed ? (
        <NavLink to={link.to} className={setActiveStyles}>
          {link.label}
        </NavLink>
      ) : (
        // Collapsible menu item
        <button
          className="flex items-center justify-between gap-12 p-2 sm:justify-start md:gap-16"
          onClick={sideMenuOpenHandler}
        >
          <span>{link.label}</span>
          <span>
            <ChevronRight size={24} />
          </span>
        </button>
      )}
    </li>
  );
};

export default MobileMenuItem;
