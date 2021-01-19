import React, { useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { PageContext } from "../context/pagecontext"
import { Link } from "gatsby"
import Logo from "../images/logo/Ace.2_c.svg"

const ThankYouSection = () => {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("")
    // eslint-disable-next-line
    setRightPage("")
    // eslint-disable-next-line
  }, [])

  const svgThankYouVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    exit: { opacity: 0 },
  }

  return (
    <motion.section id="thankyou">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex thankyou-container">
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
              variants={fadeInUp}
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
