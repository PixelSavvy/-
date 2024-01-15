import MobileNavigation from "./mobile/MobileNavigation";
import DesktopNavigation from "./desktop/DesktopNavigation";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <MobileNavigation />
      {/* Desktop Navigation */}
      <DesktopNavigation />
    </>
  );
};
export default Navigation;
