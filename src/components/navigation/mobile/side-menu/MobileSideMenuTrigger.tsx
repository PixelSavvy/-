import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";
import { ChevronRight } from "@/assets/icons/icons";
import { mobileSideMenuTriggerTypes } from "@/types/navigationLinkTypes";

const MobileSideMenuTrigger: React.FC<mobileSideMenuTriggerTypes> = ({
  label,
  sublinks = [],
}) => {
  const { setIsSideMenuOpen, setCollapsedLink, setIsMenuOpen, isSideMenuOpen } =
    useContext(MobileNavigationContext);

  const openSideMenuHandler = () => {
    setCollapsedLink({ label, sublinks });
    setIsSideMenuOpen(true);
  };

  return (
    <ChevronRight
      size={40}
      onClick={openSideMenuHandler}
      className="text-secondary"
    />
  );
};

export default MobileSideMenuTrigger;
