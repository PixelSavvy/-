import { useState, useEffect } from "react";

interface useHrefProps {
  (mobileHref: string, desktopHref: string): {
    href: string;
  };
}

const useHref: useHrefProps = (mobileHref, desktopHref) => {
  const [href, setHref] = useState(window.location.href);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const href = isMobile ? mobileHref : desktopHref;
    setHref(href);
  }, [window.innerWidth]);

  return {
    href,
  };
};

export default useHref;
