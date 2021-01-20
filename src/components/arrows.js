import React from "react"
import { Link } from "gatsby"
import PROJECTS from "../context/projects.json"
import { AnimatePresence, motion } from "framer-motion"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import useSetArrows from "../hooks/useSetArrows"
import { springTransition } from "../animation/animation"

const Arrows = ({ location }) => {
  const [leftPage, rightPage] = useSetArrows()
  console.log(location.pathname)
  return (
    <AnimatePresence>
      {location.pathname !== "/" &&
        location.pathname !== `/projects/${PROJECTS[0].link}` && (
          <motion.div
            className="span-arrow left"
            key="left-arrow"
            initial={{ x: -100 }}
            animate={{ x: 0, transition: { delay: 2 } }}
            exit={{ x: -100, transition: springTransition }}
            whileHover={{ scale: 1.3 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 5,
            }}
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
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { delay: 2 } }}
            exit={{ x: 100, transition: springTransition }}
            whileHover={{ scale: 1.3 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 5,
            }}
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
