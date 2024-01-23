import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLarge = window.matchMedia("(min-width: 768px)").matches;
      setIsLargeScreen(isLarge);
    };

    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return { isLargeScreen };
};

export default useScreenSize;
