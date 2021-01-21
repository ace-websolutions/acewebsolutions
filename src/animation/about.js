export const skillsContainerVar = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
}
export const textContainerVar = {
  animate: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.15,
    },
  },
}
export const skillsVariants = {
  initial: { y: -200, opacity: 0 },
  animate: i => ({
    y: 0,
    opacity: 1,
  }),
  dragConstraints: {
    top: -50,
    right: 50,
    bottom: 50,
    left: -50,
  },
  dragTransition: {
    bounceStiffness: 100,
    bounceDamping: 4,
  },
  tap: { cursor: "grabbing", scale: 0.8 },
  hover: { scale: 1.09 },
}

export const buttonVariants = {
  initial: { y: "100%", x: "-50%", opacity: 0 },
  animate: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      delay: 5,
    },
  },
  exit: { y: "100%", x: "-50%", opacity: 0 },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
}
