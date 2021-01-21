export const svgThankYouVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring" },
  },
  exit: { opacity: 0, y: "100vh" },
}

export const homeButton = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
}
