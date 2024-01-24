import { useState } from "react";
import { useMotionValueEvent, useScroll, m } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyNavigationProps {
  children: React.ReactNode;
  className?: string;
}

const StickyNavigation: React.FC<StickyNavigationProps> = ({
  children,
  className,
}) => {
  // get scroll value
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState<boolean>(false);

  // listen to scrollY changes and get scroll direction and set hidden state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 40) setHidden(true);
    else setHidden(false);
  });

  // animate navigation
  const navigationVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: "-100%",
    },
  };

  return (
    <m.div
      className={cn(
        "fixed inset-0 h-fit container items-center w-full z-40 bg-background",
        className
      )}
      variants={navigationVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
    >
      {children}
    </m.div>
  );
};

export default StickyNavigation;
