import DesktopActions from "./DesktopActions";
import DesktopNavigationItem from "./DesktopNavigationItem";

import { navigationLinks } from "@/data/navigationLinks";

const DesktopNavigation = () => {
  return (
    <nav className="items-center justify-between hidden lg:flex ">
      {/* Logo */}
      <div className="w-14 h-14">
        <img
          src="https://ik.imagekit.io/dcpowg7vx/Shtagoneba/logo.jpg?updatedAt=1700926360334"
          alt="შთაგონება ლოგო"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      {/* Navlinks */}
      <ul className="flex items-center justify-center gap-8 xl:gap-10">
        {navigationLinks.map((link) => (
          <DesktopNavigationItem link={link} key={link.label} />
        ))}
      </ul>

      {/* CTA */}
      <DesktopActions />
    </nav>
  );
};

export default DesktopNavigation;
