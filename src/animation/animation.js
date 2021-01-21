export let easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
  exit: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  initial: {},
}
export const containerStagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  initial: {},
}
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 5,
}

export const svgVariants = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  infinite: {
    translateX: [0, -10, 20, 15, 5, 0],
    translateY: [0, -30, -25, -40, -5, 0],
    rotate: [0, 0, -2.5, -1.5, 1.5, 0],
    scale: [1, 1, 1.05, 1.08, 0.95, 1],
    transition: {
      repeat: Infinity,
      duration: 14,
      type: "spring",
      delay: 1,
    },
    exit: {
      opacity: 0,
    },
  },
}
