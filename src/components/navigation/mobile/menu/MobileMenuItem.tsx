import { NavLink } from "react-router-dom";
import { m } from "framer-motion";

import MobileSideMenuTrigger from "@/components/navigation/mobile/side-menu/MobileSideMenuTrigger";

import { mobileMenuItemVariants } from "@/animation/variants/mobileMenuVariants";
import { navigationLinksTypes } from "@/types/navigationLinkTypes";
import { setActiveStyles } from "@/lib/setActiveStyles";

const MobileMenuItem: React.FC<navigationLinksTypes> = ({
  to,
  label,
  collapsed = true,
  sublinks = [],
}) => {
  return (
    <div className="w-full overflow-hidden">
      <m.li
        className="flex items-center justify-between w-full "
        variants={mobileMenuItemVariants}
      >
        <NavLink to={to} className={setActiveStyles} end>
          {label}
        </NavLink>
        {collapsed &&
          sublinks &&
          (sublinks as navigationLinksTypes[]).length > 0 && (
            <MobileSideMenuTrigger label={label} sublinks={sublinks} />
          )}
      </m.li>
    </div>
  );
};

export default MobileMenuItem;
