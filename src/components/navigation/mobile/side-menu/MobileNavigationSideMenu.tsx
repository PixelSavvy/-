import { useState, useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { NavLink } from "react-router-dom";

import useContentful from "@/hooks/useContentful";

import { m } from "framer-motion";
import { MobileSideMenuVariants } from "@/animation/variants/mobileMenuVariants";

import { setActiveStyles } from "@/lib/setActiveStyles";

import { sideMenuNavigationLinksTypes } from "@/types";
import { Button } from "@/components/ui";
import { ChevronLeft } from "@/assets/icons/icons";

const MobileNavigationSideMenu = () => {
  const [links, setLinks] = useState<sideMenuNavigationLinksTypes[]>([]);

  const {
    setisMobileSideMenuOpen,
    setisMobileMenuOpen,
    isMobileSideMenuOpen,
    isMobileMenuOpen,
  } = useContext(MobileNavigationContext);

  const query = "servicePage";
  const setStateFunction = setLinks;

  const {} = useContentful<sideMenuNavigationLinksTypes[]>({
    query,
    setStateFunction,
  });

  const closeSideMenuHandler = () => {
    setisMobileSideMenuOpen(!isMobileSideMenuOpen);
  };

  const closeMenuHandler = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <m.nav
      className="fixed inset-0 z-20 w-full min-h-screen pt-6 pl-16 space-y-12 bg-primary"
      variants={MobileSideMenuVariants}
      initial="initial"
      animate="animate"
    >
      <Button
        size="icon"
        onClick={closeSideMenuHandler}
        className="border-2 border-foreground"
      >
        <ChevronLeft size={24} />
      </Button>
      <ul className="space-y-12">
        {links.map((link) => (
          <li
            key={link.serviceTitle}
            className="text-xl"
            onClick={closeMenuHandler}
          >
            <NavLink
              to={`/servisebi/${link.serviceId}`}
              aria-label={link.serviceTitle}
              className={setActiveStyles}
            >
              <span>{link.serviceTitle}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </m.nav>
  );
};

export default MobileNavigationSideMenu;
