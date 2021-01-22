import { springTransition } from "./animation"

export const staggerDeskNav = {
  initial: {},
  animate: {
    transition: { delayChildren: 2, staggerChildren: 0.2 },
  },
  hover: {},
}
export const deskNavVariants = {
  hover: {
    scale: 1.3,
  },
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const logoNavVariants = {
  hover: {
    scale: 1.3,
  },
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 2 },
  },
}

export const mobileNavVariants = {
  hover: {
    scale: 1.3,
  },
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...springTransition, delay: 2.2 },
  },
}

export const navVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
}
