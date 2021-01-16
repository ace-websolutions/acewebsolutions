import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PageContext } from "../context/pagecontext"

const Arrows = () => {
  const { leftPage, rightPage } = useContext(PageContext)

  return (
    <>
      {" "}
      <motion.div
        className="span-arrow left"
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
      <motion.div
        className="span-arrow right"
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
    </>
  )
}
export default Arrows
