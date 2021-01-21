export const textVariations = {
  initial: {
    x: -500,
    skewY: 8,
    opacity: 0,
  },
  animate: {
    x: 0,
    skewY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.6,
    },
  },
  exit: {
    x: -800,
    opacity: 0,
  },
}

export const iconVariations = {
  initial: {
    x: -500,
    rotate: 360,
  },
  animate: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
  exit: {
    x: -500,
    rotate: 360,
  },
}
