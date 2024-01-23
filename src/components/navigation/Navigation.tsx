import MobileNavigation from "./mobile/MobileNavigation";
import DesktopNavigation from "./desktop/DesktopNavigation";
import MobileNavigationContextProvider from "@/store/mobileNavigationStore";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <MobileNavigationContextProvider>
        <MobileNavigation />
      </MobileNavigationContextProvider>
      {/* Desktop Navigation */}
      <DesktopNavigation />
    </>
  );
};
export default Navigation;
