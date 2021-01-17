import React, { useEffect, useContext, useRef } from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { SKILLICONS } from "../context/config"
import { PageContext } from "../context/pagecontext"
import { Link } from "gatsby"

function AboutSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)
  const dragRef = useRef(null)

  const skillsVariants = {
    initial: { y: -200, opacity: 0 },
    animate: i => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.15 },
    }),
  }

  const buttonVariants = {
    initial: { y: "100%", x: "-50%", opacity: 0 },
    animate: {
      y: "-50%",
      x: "-50%",
      opacity: 1,
      transition: {
        delay: 5,
      },
    },
  }
  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("")
    // eslint-disable-next-line
    setRightPage("services")
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section id="about">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex about-container">
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                Hello, I'm <span>Nick</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                A self taught web developer.
              </motion.p>
            </motion.header>
            <motion.div variants={fadeInUp} className="about">
              <div ref={dragRef} className="icon-container">
                {SKILLICONS.map((icon, i) => (
                  <motion.div
                    variants={skillsVariants}
                    custom={i}
                    drag
                    dragConstraints={dragRef}
                    dragTransition={{
                      bounceStiffness: 100,
                      bounceDamping: 4,
                    }}
                    whileTap={{ cursor: "grabbing", scale: 0.8 }}
                    key={icon.name}
                    className="icon "
                  >
                    {icon.import}
                    <h5>{icon.name}</h5>
                  </motion.div>
                ))}
              </div>
              <motion.div className="about-info-container" variants={stagger}>
                <motion.p className="about-text" variants={fadeInUp}>
                  I am passionate about creating projects that can help improve
                  the lives of those around me. I started this company to
                  challenge myself and see how far I can go. The ability to one
                  day perhaps be making a living off of working with computers
                  keeps me motivated.
                </motion.p>
                <motion.p className="skills-text" variants={fadeInUp}>
                  I believe anything can be achieved if you work hard enough,
                  and you should never stop learning. Through various resources
                  I have discovered and practiced all of the skills you see
                  here. In the modern web, new tools are always popping up and
                  it is important to stay on top of the new technology in order
                  to stay relevant.
                </motion.p>
              </motion.div>
              <motion.div
                className="next-section-button about-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={buttonVariants}
              >
                <Link to="/services">Look at what I offer</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
