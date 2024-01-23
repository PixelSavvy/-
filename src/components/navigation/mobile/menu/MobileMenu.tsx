import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import { m, AnimatePresence } from "framer-motion";
import { mobileMenuVariants } from "@/animation/variants/mobileMenuVariants";

import MobileMenuItem from "./MobileMenuItem";

import { navigationLinks } from "@/data/navigationLinks";
import OrderButton from "@/components/buttons/OrderButton";

const MobileMenu = () => {
  const { isMobileNavigationOpen } = useContext(MobileNavigationContext);

  return (
    <AnimatePresence>
      <m.nav
        className="fixed inset-0 z-10 w-full min-h-full px-12 py-24 bg-background md:px-24 md:py-32"
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileNavigationOpen ? "visible" : "hidden"}
      >
        <ul className="flex flex-col gap-12 mb-16 text-xl place-item-start md:text-2xl ">
          {navigationLinks.map((link, id) => (
            <MobileMenuItem link={link} key={id} />
          ))}
        </ul>

        <OrderButton
          className="w-full text-md bg-danger text-background focus:bg-danger/90 hover:bg-danger/90 sm:hidden"
          label="შეუვეთე ახლავე"
        />
      </m.nav>
    </AnimatePresence>
  );
};

export default MobileMenu;
