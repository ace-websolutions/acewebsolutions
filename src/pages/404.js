import React from "react"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import { fadeInUp, springTransition, stagger } from "../animation/animation"
import { Link } from "gatsby"
import Logo from "../images/logo/Ace.2_c.svg"
import { homeButton } from "../animation/thankyou"
import { svgNotfoundVariants } from "../animation/404"

const NotFoundPage = () => {
  return (
    <motion.section id="notfound">
      <SEO title="Not Found" />
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex notfound-container">
            <motion.div
              variants={svgNotfoundVariants}
              className="notfound-logo"
            >
              <Logo />
            </motion.div>{" "}
            <motion.header variants={fadeInUp} className="notfound-header">
              <motion.h1>404</motion.h1>
              <motion.h5>
                Looks like you got lost, find your way home below
              </motion.h5>
            </motion.header>
            <motion.div
              variants={homeButton}
              whileHover="hover"
              whileTap="tap"
              transition={springTransition}
              className="notfound-button next-section-button"
            >
              <Link to="/">Back to home</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
export default NotFoundPage
