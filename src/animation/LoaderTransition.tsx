import { m, AnimatePresence } from "framer-motion";

const LoaderTransition = ({ children }: { children: React.ReactNode }) => {
  const loaderVariants = {
    initial: {
      scaleY: "-100vw",
    },
    animate: {
      scaleY: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      scaleY: "100vw",
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <AnimatePresence>
      <m.div
        className="fixed inset-0 w-full min-h-screen origin-center bg-primary "
        variants={loaderVariants}
        initial="initial"
        animate="animte"
        exit="exit"
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default LoaderTransition;
