import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { m, AnimatePresence } from "framer-motion";
import { mobileMenuVariants } from "@/animation/variants/mobileMenuVariants";

import MobileMenuItem from "./MobileMenuItem";
import MobileMenuAction from "./MobileMenuAction";

import { navLinks } from "@/data/navigationLinks";

const MobileMenu = () => {
  const { isMenuOpen } = useContext(MobileNavigationContext);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.ul
          className="fixed inset-0 z-10 flex flex-col items-start justify-start w-full min-h-screen gap-6 px-6 pt-24 pb-10 overflow-y-scroll text-2xl font-medium tracking-tight origin-top text-background bg-primary scroll-m-20"
          variants={mobileMenuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {navLinks.map((link) => (
            <MobileMenuItem
              to={link.to}
              label={link.label}
              collapsed={link.collapsed}
              sublinks={link.sublinks}
              key={link.label}
            />
          ))}

          <MobileMenuAction />
        </m.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
