import { createContext, useState } from "react";

import { MobileMenuItemsProps } from "@/types";

type MobileNavigationContextType = {
  isMenuOpen: boolean;
  isSideMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setIsSideMenuOpen: (isOpen: boolean) => void;
  collapsedLink: {
    label: string;
    sublinks: MobileMenuItemsProps[];
  };
  setCollapsedLink: (collapsedLink: {
    label: string;
    sublinks: MobileMenuItemsProps[];
  }) => void;
};

export const MobileNavigationContext =
  createContext<MobileNavigationContextType>({
    isMenuOpen: false,
    isSideMenuOpen: false,
    setIsMenuOpen: (isOpen: boolean) => {},
    setIsSideMenuOpen: (isOpen: boolean) => {},
    collapsedLink: { label: "", sublinks: [] },
    setCollapsedLink: (collapsedLink: {
      label: string;
      sublinks: MobileMenuItemsProps[];
    }) => {},
  });

const MobileNavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [collapsedLink, setCollapsedLink] = useState<{
    label: string;
    sublinks: MobileMenuItemsProps[];
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
