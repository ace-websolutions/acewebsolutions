import React, { useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhone, FaMapMarker } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"

function ContactSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("portfolio")
    // eslint-disable-next-line
    setRightPage("contact")
  }, [])

  return (
    <section id="contact">
      <div className="container">
        <div className="container-fluid">
          <motion.div className="flex contact-container">
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                Let's get <span>started</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Currently accepting work, lets talk about what <span>you</span>{" "}
                have in mind!
              </motion.p>
            </motion.header>
            <div className="contact">
              <motion.div className="contact-info" variants={fadeInUp}>
                <motion.div className="contact-heading" variants={stagger}>
                  <motion.h5 variants={fadeInUp}>Contact Information</motion.h5>
                  <motion.p variants={fadeInUp}>
                    Thank you for reaching out. I look forward to working with
                    you!
                  </motion.p>
                </motion.div>
                <motion.ul variants={stagger}>
                  <motion.li variants={fadeInUp}>
                    <FaPhone size={20} />
                    <motion.a href="tel:+0000000000">(000) 000-0000</motion.a>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <AiOutlineMail size={20} />
                    <motion.a href="mailto: info@acewebsolutions.io">
                      info@acewebsolutions.io
                    </motion.a>
                  </motion.li>
                  <motion.li variants={fadeInUp}>
                    <FaMapMarker size={20} />
                    <p>8630-M Guilford Rd STE304 &#183; Columbia, MD 20146</p>
                  </motion.li>
                </motion.ul>
                <motion.div className="social" variants={stagger}>
                  <motion.a
                    variants={fadeInUp}
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <FaGithub size={18} />
                  </motion.a>
                  <motion.a
                    variants={fadeInUp}
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF size={18} />
                  </motion.a>
                  <motion.a
                    variants={fadeInUp}
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn size={18} />
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="contact-form">
                <motion.form
                  variants={fadeInUp}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <div className="form-email">
                    <input type="email" name="email" required />
                    <label for="email" className="label-form">
                      <span className="content-form">Email</span>
                    </label>
                  </div>
                  <div className="form-name">
                    <input type="text" name="name" required />
                    <label for="name" className="label-form">
                      <span className="content-form">Name</span>
                    </label>
                  </div>
                  <div className="form-textarea">
                    <textarea name="project-description" required />
                    <label for="project-description" className="label-form">
                      <span className="content-form">Project Description</span>
                    </label>
                  </div>
                  <motion.div
                    className="form-submit"
                    whileHover={{ scale: 1.1, originX: 0 }}
                    whileTap={{ scale: 0.8, originX: 0 }}
                    animate={{ y: 4 }}
                    transition={{ delay: 3, duration: 0.3, yoyo: Infinity }}
                  >
                    <input type="submit" value="Send message" />
                  </motion.div>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
