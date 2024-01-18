import { m, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <m.div
        className="container flex flex-col w-full min-h-screen"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default PageTransition;
