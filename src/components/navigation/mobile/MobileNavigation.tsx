import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import Hamburger from "./Hamburger";
import Logo from "./Logo";

import StickyNavigation from "@/animation/StickyNavigation";

import MobileActions from "./MobileActions";
import MobileNavigationMenu from "./menu/MobileNavigationMenu";
import MobileNavigationSideMenu from "./side-menu/MobileNavigationSideMenu";

const MobileNavigation = () => {
  const { isMobileMenuOpen, isMobileSideMenuOpen } = useContext(
    MobileNavigationContext
  );

  return (
    <StickyNavigation className="flex items-center justify-between p-4 rounded-xl">
      <Logo />
      <MobileActions />
      <Hamburger />

      {isMobileMenuOpen && <MobileNavigationMenu />}
      {isMobileSideMenuOpen && <MobileNavigationSideMenu />}
    </StickyNavigation>
  );
};

export default MobileNavigation;
