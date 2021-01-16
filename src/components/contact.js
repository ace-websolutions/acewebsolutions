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
          <motion.div variants={stagger} className="flex contact-container">
            <motion.header variants={fadeInUp}>
              <h2>Let's get in touch</h2>
              <p>
                Currently accepting work, lets talk about what <span>you</span>{" "}
                have in mind!
              </p>
            </motion.header>
            <div className="contact">
              <motion.div className="contact-info" variants={fadeInUp}>
                <div className="contact-heading">
                  <h5>Contact Information</h5>
                  <p>
                    Thank you for reaching out. I look forward to working with
                    you!
                  </p>
                </div>
                <ul>
                  <li>
                    <FaPhone size={20} />
                    <a href="tel:+0000000000">(000) 000-0000</a>
                  </li>
                  <li>
                    <AiOutlineMail size={20} />
                    <a href="mailto: info@acewebsolutions.io">
                      info@acewebsolutions.io
                    </a>
                  </li>
                  <li>
                    <FaMapMarker size={20} />
                    <p>8630-M Guilford Rd STE304 &#183; Columbia, MD 20146</p>
                  </li>
                </ul>
                <div className="social">
                  <a
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </motion.div>
              <motion.div className="contact-form">
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
                  <div className="form-submit">
                    <input type="submit" value="Send message" />
                  </div>
                </motion.form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
