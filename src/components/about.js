import React, { useEffect, useContext, useRef } from "react"
import WebsiteSVG from "../images/website.svg"
import gsap from "gsap"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { SKILLICONS } from "../context/config"
import { PageContext } from "../context/pagecontext"
import { Link } from "gatsby"

function AboutSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)
  const dragRef = useRef(null)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("")
    // eslint-disable-next-line
    setRightPage("services")

    gsap.to("#about-nav", { css: { className: "+=active" } }, 0)

    const tlSVG = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
    })
    tlSVG
      .from(".tl-about-svg-intro", {
        scale: 0,
        transformOrigin: "center",
        ease: "expo.out",
      })
      .from(".tl-about-svg-fill-top", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.4,
      })
      .from(
        ".tl-about-svg-fill-left",
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: 0.15,
        },
        "<-.25"
      )
      .from(
        ".tl-about-svg-fill-scale",
        {
          scale: 0,
          transformOrigin: "center",
          stagger: 0.2,
        },
        "<-.25"
      )
      .from(
        ".tl-about-svg-fill-center",
        {
          scaleX: 0,
          transformOrigin: "center",
          stagger: 0.2,
        },
        "<-.25"
      )
  }, [])

  return (
    <motion.section id="about">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex about-container">
            <motion.header variants={fadeInUp}>
              <h2 className="tl-about-title">
                Hello, I'm <span>Nick</span> -
              </h2>
              <p className="tl-about-subtitle">A self taught web developer.</p>
            </motion.header>
            <motion.div variants={fadeInUp} className="about">
              <div className="about-svg-container">
                <WebsiteSVG className="about-svg" />
              </div>
              <div className="about-info-container">
                <p className="about-text tl-about">
                  I am passionate about creating projects that can help improve
                  the lives of those around me. I started this company to
                  challenge myself and see how far I can go. The ability to one
                  day perhaps be making a living off of working with computers
                  keeps me motivated.
                </p>
                <p className="skills-text tl-skills">
                  I believe anything can be achieved if you work hard enough,
                  and you should never stop learning. Through various resources
                  I have discovered and practiced all of the skills you see
                  here. In the modern web, new tools are always popping up and
                  it is important to stay on top of the new technology in order
                  to stay relevant .
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="skills">
              <div ref={dragRef} className="icon-container">
                {SKILLICONS.map(icon => (
                  <motion.div
                    drag
                    dragConstraints={dragRef}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 4 }}
                    whileTap={{ cursor: "grabbing", scale: 0.8 }}
                    key={icon.name}
                    className="icon tl-skills-icons"
                  >
                    {icon.import}
                    <h5>{icon.name}</h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="next-section-button" variants={fadeInUp}>
              <Link to="/services">Look at what I offer</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
