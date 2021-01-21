import { springTransition } from "./animation"

export const leftVariants = {
  initial: { x: -100, transition: springTransition },
  animate: { x: 0, transition: { ...springTransition, delay: 2 } },
  exit: { x: -100, transition: springTransition },
  whileHover: { scale: 1.3, transition: springTransition },
}
export const rightVariants = {
  initial: { x: 100, transition: springTransition },
  animate: { x: 0, transition: { ...springTransition, delay: 2 } },
  exit: { x: 100, transition: springTransition },
  whileHover: { scale: 1.3, transition: springTransition },
}
