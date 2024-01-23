import { useContext, useState } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";

import useContentful from "@/hooks/useContentful";

import { m, AnimatePresence } from "framer-motion";
import { mobileSideMenuVariants } from "@/animation/variants/mobileMenuVariants";

import { Button } from "@/components/ui";
import { ChevronLeft } from "@/assets/icons/icons";
import SideMenuItem from "./SideMenuItem";

import { sideMenuNavigationLinksTypes } from "@/types";

const SideMenu = () => {
  const { isSideMenuOpen, setIsSideMenuOpen, setIsMobileNavigationOpen } =
    useContext(MobileNavigationContext);

  const sideMenuCloseHandler = () => {
    setIsMobileNavigationOpen(true);
    setIsSideMenuOpen(false);
  };

  const [sideMenuNavigationLinks, setSideMenuNavigationLinks] = useState<
    sideMenuNavigationLinksTypes[]
  >([]);

  const query = "servicePage";
  const setStateFunction = setSideMenuNavigationLinks;

  const {} = useContentful({ query, setStateFunction });

  const sideMenuNavigationLinksData = sideMenuNavigationLinks.map((link) => {
    return {
      label: link.serviceTitle,
      path: link.serviceId,
      collapsed: false,
    };
  });

  return (
    <AnimatePresence>
      <m.div
        className="fixed inset-0 z-20 w-full min-h-full px-12 py-24 space-y-16 bg-secondary text-background md:px-24 md:py-32"
        variants={mobileSideMenuVariants}
        initial="hidden"
        animate={isSideMenuOpen ? "visible" : "hidden"}
      >
        <Button
          size="icon"
          onClick={sideMenuCloseHandler}
          className="border-2 border-foreground "
        >
          <ChevronLeft size={28} />
        </Button>
        <ul className="flex flex-col gap-12 mb-16 text-xl place-item-start md:text-2xl ">
          {sideMenuNavigationLinksData.map((link, id) => (
            <SideMenuItem
              serviceTitle={link.label}
              serviceId={link.path}
              key={id}
            />
          ))}
        </ul>
      </m.div>
    </AnimatePresence>
  );
};

export default SideMenu;
