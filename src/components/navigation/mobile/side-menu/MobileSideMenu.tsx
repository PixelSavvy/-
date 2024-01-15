import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { AnimatePresence, m } from "framer-motion";
import { MobileSideMenuVariants } from "@/animation/variants/mobileMenuVariants";

import MobileSideMenuItem from "./MobileSideMenuItem";

import { ChevronLeft } from "@/assets/icons/icons";

import { navLinks } from "@/data/navigationLinks";

const MobileSideMenu = () => {
  const { isSideMenuOpen, setIsSideMenuOpen, isMenuOpen, setIsMenuOpen } =
    useContext(MobileNavigationContext);

  const closeSideMenuHandler = () => {
    setIsSideMenuOpen(false);
    setIsMenuOpen(true);
  };

  const isOpen = isMenuOpen && isSideMenuOpen;

  return (
    <AnimatePresence>
      {isOpen && (
        <m.ul
          className="fixed inset-0 z-10 flex flex-col items-start justify-start w-full min-h-screen gap-6 px-6 pt-40 pb-10 overflow-y-scroll text-2xl font-medium tracking-tight text-white origin-top scroll-m-20 bg-secondary"
          variants={MobileSideMenuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {navLinks.map((link) => (
            <MobileSideMenuItem label={link.label} key={link.to} />
          ))}
          <ChevronLeft
            onClick={closeSideMenuHandler}
            size={40}
            className="absolute inset-0 mx-6 mt-7 md:mt-10"
          />
        </m.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileSideMenu;
