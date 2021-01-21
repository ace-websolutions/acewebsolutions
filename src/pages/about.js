import React from "react"
import { motion } from "framer-motion"
import { containerStagger, fadeInUp, stagger } from "../animation/animation"
import {
  skillsVariants,
  buttonVariants,
  skillsContainerVar,
  textContainerVar,
} from "../animation/about"
import { SKILLICONS } from "../context/config"
import { Link } from "gatsby"
import useSetArrows from "../hooks/useSetArrows"
import SEO from "../components/seo"

const About = () => {
  useSetArrows("", "services/")

  return (
    <motion.section id="about">
      <SEO title="About" />
      <div className="container">
        <div className="container-fluid">
          <motion.div
            variants={containerStagger}
            className="flex about-container"
          >
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                Hello, I'm <span>Nick</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                A self taught web developer.
              </motion.p>
            </motion.header>
            <motion.div variants={fadeInUp} className="about">
              <motion.div
                variants={skillsContainerVar}
                className="icon-container"
              >
                {SKILLICONS.map((icon, i) => (
                  <motion.div
                    variants={skillsVariants}
                    custom={i}
                    drag
                    dragConstraints={skillsVariants.dragConstraints}
                    dragTransition={skillsVariants.dragTransition}
                    whileTap="tap"
                    whileHover="hover"
                    key={icon.name}
                    className="icon"
                  >
                    {icon.import}
                    <h5>{icon.name}</h5>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={textContainerVar}
                className="about-info-container"
              >
                <motion.p variants={fadeInUp} className="about-text">
                  I am passionate about creating projects that can help improve
                  the lives of those around me. I started this company to
                  challenge myself and see how far I can go. The ability to one
                  day perhaps be making a living off of working with computers
                  keeps me motivated.
                </motion.p>
                <motion.p variants={fadeInUp} className="skills-text">
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
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
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
export default About
