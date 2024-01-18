import { LazyMotion, MotionConfig, AnimatePresence } from "framer-motion";

const loadFeatures = () =>
  import("@/lib/features").then((module) => module.domAnimation);

const lazyMotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <AnimatePresence>{children}</AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  );
};

export default lazyMotionProvider;
