import MobileNavigationProvider from "@/store/mobileNavigationStore";
import Hamburger from "./Hamburger";
import MobileMenu from "./menu/MobileMenu";
import MobileSideMenu from "./side-menu/MobileSideMenu";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";
import { PersonPen } from "@/assets/icons/icons";

const MobileNavigation = () => {
  return (
    <nav className="flex items-center justify-between lg:hidden ">
      {/* Logo */}
      <div className="w-10 h-10 md:w-12 md:h-12">
        <img
          src="https://ik.imagekit.io/dcpowg7vx/Shtagoneba/logo.jpg?updatedAt=1700926360334"
          alt="შთაგონება ლოგო"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      {/* CTA */}
      <div className="mx-auto">
        <Link to="/" target="_blank" tabIndex={-1}>
          <Button>
            <PersonPen size={20} className="mr-2" />
            გახდი მწერალი
          </Button>
        </Link>
      </div>
      {/* Mobile Menu */}
      <MobileNavigationProvider>
        <MobileMenu />
        <MobileSideMenu />
        <Hamburger />
      </MobileNavigationProvider>
    </nav>
  );
};

export default MobileNavigation;
