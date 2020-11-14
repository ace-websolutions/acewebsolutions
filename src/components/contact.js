import React, { useEffect, useContext } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhone } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"

function ContactSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("portfolio")
    // eslint-disable-next-line
    setRightPage("contact")

    gsap.to("#contact-nav", { css: { className: "+=active" } }, 0)
  }, [])

  return (
    <section id="contact">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex contact-container">
            <motion.header variants={fadeInUp}>
              <h2 className="tl-contact-title">Let's get in touch</h2>
              <p className="tl-contact-subtitle">
                Currently accepting work, lets talk about what <span>you</span>{" "}
                have in mind!
              </p>
            </motion.header>
            <motion.form
              variants={fadeInUp}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <div className="form-email tl-form">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-name tl-form">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="form-textarea tl-form">
                <textarea
                  name="project-description"
                  placeholder="Project Description"
                />
              </div>
              <div className="form-submit tl-form">
                <input type="submit" value="Send" />
              </div>
            </motion.form>
            <motion.div variants={fadeInUp} className="direct-contact">
              <hr />
              <h3 className="tl-contact">Contact me directly</h3>
              <div className="direct-methods">
                <div className="contact-email tl-contact">
                  <a href="mailto: info@acewebsolutions.io">
                    <AiOutlineMail size={40} />
                  </a>
                </div>
                <div className="contact-phone tl-contact">
                  <a href="tel:+0000000000">
                    <FaPhone size={35} />
                  </a>
                </div>
              </div>
              <hr />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
