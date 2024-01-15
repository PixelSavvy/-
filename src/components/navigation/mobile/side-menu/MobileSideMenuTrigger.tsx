import { useContext } from "react";
import { MobileNavigationContext } from "@/store/mobileNavigationStore";
import { ChevronRight } from "@/assets/icons/icons";
import { navigationSideMenuTriggerTypes } from "@/types/navigationLinkTypes";

const MobileSideMenuTrigger: React.FC<navigationSideMenuTriggerTypes> = ({
  label,
  sublinks = [],
}) => {
  const { setIsSideMenuOpen, setCollapsedLink } = useContext(
    MobileNavigationContext
  );

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
