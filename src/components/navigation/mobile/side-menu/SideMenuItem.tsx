import { setActiveStyles } from "@/lib/setActiveStyles";

import { NavLink } from "react-router-dom";

interface SideMenuItemProps {
  serviceTitle: string;
  serviceId: string;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  serviceTitle,
  serviceId,
}) => {
  return (
    <li>
      <NavLink to={`/servisebi/${serviceId}`} className={setActiveStyles}>
        {serviceTitle}
      </NavLink>
    </li>
  );
};

export default SideMenuItem;
