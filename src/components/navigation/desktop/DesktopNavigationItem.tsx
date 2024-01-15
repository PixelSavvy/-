import { NavLink } from "react-router-dom";

import { setActiveStyles } from "@/lib/setActiveStyles";

import { navigationLinksTypes } from "@/types";
import DesktopNavigationCollapsibleItem from "./DesktopNavigationCollapsibleItem";

interface DesktopNavigationItemProps {
  link: navigationLinksTypes;
}

const DesktopNavigationItem: React.FC<DesktopNavigationItemProps> = ({
  link,
}) => {
  return (
    <>
      {!link.collapsed ? (
        <li>
          <NavLink to={link.to} className={setActiveStyles}>
            {link.label}
          </NavLink>
        </li>
      ) : (
        <DesktopNavigationCollapsibleItem
          sublinks={link.sublinks}
          label={link.label}
        />
      )}
    </>
  );
};

export default DesktopNavigationItem;
