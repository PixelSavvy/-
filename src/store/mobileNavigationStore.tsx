import { createContext, useState } from "react";

import { navigationLinksTypes } from "@/types";

type MobileNavigationContextType = {
  isMenuOpen: boolean;
  isSideMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setIsSideMenuOpen: (isOpen: boolean) => void;
  collapsedLink: {
    label: string;
    sublinks: navigationLinksTypes[];
  };
  setCollapsedLink: (collapsedLink: {
    label: string;
    sublinks: navigationLinksTypes[];
  }) => void;
};

export const MobileNavigationContext =
  createContext<MobileNavigationContextType>({
    isMenuOpen: false,
    isSideMenuOpen: false,
    setIsMenuOpen: () => {},
    setIsSideMenuOpen: () => {},
    collapsedLink: { label: "", sublinks: [] },
    setCollapsedLink: () => {},
  });

const MobileNavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [collapsedLink, setCollapsedLink] = useState<{
    label: string;
    sublinks: navigationLinksTypes[];
  }>({ label: "", sublinks: [] });

  const value = {
    isMenuOpen,
    isSideMenuOpen,
    setIsMenuOpen,
    setIsSideMenuOpen,
    collapsedLink,
    setCollapsedLink,
  };

  return (
    <MobileNavigationContext.Provider value={value}>
      {children}
    </MobileNavigationContext.Provider>
  );
};

export default MobileNavigationProvider;
