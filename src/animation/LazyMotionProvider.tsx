import { LazyMotion, MotionConfig, AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";

const loadFeatures = () =>
  import("@/lib/features").then((module) => module.domAnimation);

const LazyMotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          <PageTransition>{children}</PageTransition>
        </AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  );
};

export default LazyMotionProvider;
