import { createContext, useState } from "react";

interface MobileNavigationContextProps {
  // MobileMenu
  isMobileNavigationOpen: boolean;
  setIsMobileNavigationOpen: (value: boolean) => void;
  // SideMenu
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (value: boolean) => void;
}

const MobileNavigationInitialContext = {
  // MobileMenu
  isMobileNavigationOpen: false,
  setIsMobileNavigationOpen: () => {},
  // SideMenu
  isSideMenuOpen: false,
  setIsSideMenuOpen: () => {},
};

export const MobileNavigationContext =
  createContext<MobileNavigationContextProps>(MobileNavigationInitialContext);

interface MobileNavigationContextProviderProps {
  children: React.ReactNode;
}

const MobileNavigationContextProvider: React.FC<
  MobileNavigationContextProviderProps
> = ({ children }) => {
  // MobileMenu
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);
  // SideMenu
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  return (
    <MobileNavigationContext.Provider
      value={{
        // MobileMenu
        isMobileNavigationOpen,
        setIsMobileNavigationOpen,
        // SideMenu
        isSideMenuOpen,
        setIsSideMenuOpen,
      }}
    >
      {children}
    </MobileNavigationContext.Provider>
  );
};

export default MobileNavigationContextProvider;
