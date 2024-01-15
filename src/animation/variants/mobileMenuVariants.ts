export const mobileMenuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const mobileMenuItemVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const MobileSideMenuVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    x: "100%",
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
