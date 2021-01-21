export const svgNotfoundVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring" },
  },
  exit: { opacity: 0, y: "100vh" },
}
