import MobileNavigation from "./mobile/MobileNavigation";
import DesktopNavigation from "./desktop/DesktopNavigation";
import MobileNavigationContextProvider from "@/store/mobileNavigationStore";
import StickyNavigation from "@/animation/StickyNavigation";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <MobileNavigationContextProvider>
        <MobileNavigation />
      </MobileNavigationContextProvider>
      {/* Desktop Navigation */}
      <StickyNavigation className="hidden pt-6 pb-4 md:pt-8 md:pb-6 lg:block ">
        <DesktopNavigation />
      </StickyNavigation>
    </>
  );
};
export default Navigation;
