import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileMenu from "./menu/MobileMenu";

import MobileActions from "./MobileActions";
import SideMenu from "./side-menu/SideMenu";

const MobileNavigation = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <MobileActions />
      <MobileMenu />
      <SideMenu />
      <Hamburger />
    </div>
  );
};

export default MobileNavigation;
