import { springTransition } from "./animation"

export const servContainerVars = {
  initial: {
    boxShadow: "none",
  },
  animate: {
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
      delayChildren: 0.75,
    },
  },
}

export const servVariants = {
  initial: {
    y: 60,
    transition: springTransition,
  },
  animate: {
    y: 0,
    transition: springTransition,
  },
}
