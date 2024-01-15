import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { NavLink } from "react-router-dom";

import { m } from "framer-motion";

import { navigationSideLinksTypes } from "@/types/navigationLinkTypes";
import { mobileMenuItemVariants } from "@/animation/variants/mobileMenuVariants";
import { setActiveStyles } from "@/lib/setActiveStyles";

const MobileSideMenuItem: React.FC<navigationSideLinksTypes> = ({ label }) => {
  const { collapsedLink } = useContext(MobileNavigationContext);

  const isCollapsed = collapsedLink.label === label;

  return (
    isCollapsed &&
    collapsedLink.sublinks.map((subLink) => (
      <div key={subLink.label} className="overflow-hidden">
        <m.li className="relative w-full" variants={mobileMenuItemVariants}>
          <NavLink to={subLink.to} className={setActiveStyles}>
            {subLink.label}
          </NavLink>
        </m.li>
      </div>
    ))
  );
};

export default MobileSideMenuItem;
