import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"
import { stagger, svgVariants } from "../animation/animation.js"
import Logo from "../images/logo/Ace.white.svg"

const Landing = () => {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    setLeftPage("")
    setRightPage("about")
  }, [setLeftPage, setRightPage])

  const textVariations = {
    initial: {
      x: -500,
      skewY: 8,
    },
    animate: {
      x: 0,
      skewY: 0,
      transition: {
        type: "spring",
        duration: 1.6,
      },
    },
    exit: {
      x: -800,
    },
  }

  const iconVariations = {
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
  return (
    <section id="landing">
      <div className="container">
        <div className="flex landing-container">
          <motion.div
            variants={svgVariants}
            animate={{
              x: [0, -10, 20, 15, 5, 0],
              y: [0, -30, -25, -40, -5, 0],
              rotate: [0, 0, -2.5, -1.5, 1.5, 0],
              scale: [1, 1, 1.05, 1.08, 0.95, 1],
              transition: {
                repeat: Infinity,
                duration: 14,
                type: "spring",
                delay: 1,
              },
            }}
            drag
            className="logo"
          >
            <Logo />
          </motion.div>
          <motion.div className="text" variants={stagger}>
            <motion.h2 variants={textVariations}>
              Front end web developer{" "}
            </motion.h2>
            <motion.p variants={textVariations}>
              Need a hand with anything in the world wide web? Here I am!{" "}
            </motion.p>
            <motion.div variants={stagger} className="btn-group">
              <motion.a
                variants={iconVariations}
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={25} />
              </motion.a>
              <motion.a
                variants={iconVariations}
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF size={25} />
              </motion.a>
              <motion.a
                variants={iconVariations}
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </motion.a>
            </motion.div>
            <motion.div
              variants={textVariations}
              className="next-section-button landing-contact"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 5 },
              }}
              whileTap={{ scale: 0.8 }}
              animate={{
                y: [0, -6, 0, -6, 0],
                transition: {
                  delay: 3,
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                },
              }}
            >
              <Link to="/contact">Contact Me</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Landing
