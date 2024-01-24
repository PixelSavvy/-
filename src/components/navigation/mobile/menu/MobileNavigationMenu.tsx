import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { NavLink } from "react-router-dom";

import { m } from "framer-motion";
import { mobileMenuVariants } from "@/animation/variants/mobileMenuVariants";

import { navigationLinks } from "@/data/navigationLinks";
import { setActiveStyles } from "@/lib/setActiveStyles";
import OrderButton from "@/components/buttons/OrderButton";
import { ChevronRight } from "@/assets/icons/icons";

const MobileNavigationMenu = () => {
  const { setisMobileSideMenuOpen, isMobileSideMenuOpen } = useContext(
    MobileNavigationContext
  );

  const sideMenuHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setisMobileSideMenuOpen(!isMobileSideMenuOpen);
  };

  return (
    <m.nav
      className="fixed inset-0 w-full min-h-screen px-16 pt-24 space-y-12 origin-top bg-background"
      variants={mobileMenuVariants}
      initial="initial"
      animate="animate"
    >
      <ul className="space-y-12">
        {navigationLinks.map((link) => (
          <li key={link.label} className="text-xl" onClick={sideMenuHandler}>
            {!link.collapsed ? (
              <NavLink
                to={link.to}
                aria-label={link.label}
                className={setActiveStyles}
              >
                <span>{link.label}</span>
              </NavLink>
            ) : (
              <NavLink
                to={link.to}
                aria-label={link.label}
                className={setActiveStyles}
                onClick={sideMenuHandler}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={24} />
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <OrderButton
        label="შეუკვეთე ახლავე"
        className="w-full text-md bg-danger hover:bg-danger/90 focus-within:bg-danger/90 text-background sm:hidden"
      />
    </m.nav>
  );
};

export default MobileNavigationMenu;
