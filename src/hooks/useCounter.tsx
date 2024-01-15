import { useEffect, useRef, useState } from "react";

const useCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);

  const counterRef = useRef(null);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasCounted(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return { isVisible, hasCounted, counterRef };
};
export default useCounter;
