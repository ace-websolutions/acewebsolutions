import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { fadeInUp, springTransition, stagger } from "../animation/animation"
import { Link } from "gatsby"
import Logo from "../images/logo/Ace.2_c.svg"
import { svgThankYouVariants, homeButton } from "../animation/thankyou"

const ThankYouSection = () => {
  return (
    <motion.section id="thankyou">
      <SEO title="Thank You" />
      <div className="container">
        <div className="container-fluid">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex thankyou-container"
          >
            <motion.div
              variants={svgThankYouVariants}
              className="thankyou-logo"
            >
              <Logo />
            </motion.div>{" "}
            <motion.header variants={fadeInUp} className="thankyou-header">
              <motion.h1>Thank You!</motion.h1>
              <motion.h5>I will be in touch very soon</motion.h5>
            </motion.header>
            <motion.div
              variants={homeButton}
              whileHover="hover"
              whileTap="tap"
              transition={springTransition}
              className="thankyou-button next-section-button"
            >
              <Link to="/">Back to home</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ThankYouSection
