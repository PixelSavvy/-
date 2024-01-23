import { useState, useEffect } from "react";

interface useHrefProps {
  (mobileHref: string, desktopHref: string): {
    href: string;
  };
}

const useHref: useHrefProps = (mobileHref, desktopHref) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [href, setHref] = useState(window.location.href);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.matchMedia("(max-width: 1024px)").matches;
      setIsSmallScreen(isSmall);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setHref(mobileHref);
    } else {
      setHref(desktopHref);
    }
  }, [isSmallScreen, mobileHref, desktopHref]);

  return {
    href,
  };
};

export default useHref;
