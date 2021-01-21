import React from "react"
import { Link } from "gatsby"
import PROJECTS from "../context/projects.json"
import { AnimatePresence, motion } from "framer-motion"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import useSetArrows from "../hooks/useSetArrows"
import { leftVariants, rightVariants } from "../animation/arrows"
import { springTransition } from "../animation/animation"

const Arrows = ({ location }) => {
  const [leftPage, rightPage] = useSetArrows()

  return (
    <AnimatePresence>
      {location.pathname !== "/" &&
        location.pathname !== `/projects/${PROJECTS[0].link}` && (
          <motion.div
            className="span-arrow left"
            key="left-arrow"
            variants={leftVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="whileHover"
            transition={springTransition}
          >
            <Link id="left-arrow-nav" className="arrow" to={`/${leftPage}`}>
              <FiChevronLeft size={35} />
            </Link>
          </motion.div>
        )}
      {location.pathname !== "/contact/" &&
        location.pathname !==
          `/projects/${PROJECTS[PROJECTS.length - 1].link}` && (
          <motion.div
            className="span-arrow right"
            key="right-arrow"
            variants={rightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="whileHover"
            transition={springTransition}
          >
            <Link id="right-arrow-nav" className="arrow" to={`/${rightPage}`}>
              <FiChevronRight size={35} />
            </Link>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default Arrows
