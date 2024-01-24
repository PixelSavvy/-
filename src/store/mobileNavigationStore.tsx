import { createContext, useState } from "react";

interface MobileNavigationContextProps {
  // MobileMenu
  isMobileMenuOpen: boolean;
  setisMobileMenuOpen: (value: boolean) => void;
  // SideMenu
  isMobileSideMenuOpen: boolean;
  setisMobileSideMenuOpen: (value: boolean) => void;
}

const MobileNavigationInitialContext = {
  // MobileMenu
  isMobileMenuOpen: false,
  setisMobileMenuOpen: () => {},
  // SideMenu
  isMobileSideMenuOpen: false,
  setisMobileSideMenuOpen: () => {},
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
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState<boolean>(false);
  // SideMenu
  const [isMobileSideMenuOpen, setisMobileSideMenuOpen] =
    useState<boolean>(false);

  return (
    <MobileNavigationContext.Provider
      value={{
        // MobileMenu
        isMobileMenuOpen,
        setisMobileMenuOpen,
        // SideMenu
        isMobileSideMenuOpen,
        setisMobileSideMenuOpen,
      }}
    >
      {children}
    </MobileNavigationContext.Provider>
  );
};

export default MobileNavigationContextProvider;
