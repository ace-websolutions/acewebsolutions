import React, { useEffect, useContext } from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhone, FaMapMarker } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"
import { useFormik } from "formik"
import * as Yup from "yup"
import { TextField } from "@material-ui/core"

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  projectDescription: Yup.string().required("Required"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    setLeftPage("portfolio")
    setRightPage("contact")
  }, [setLeftPage, setRightPage])

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      projectDescription: "",
    },
    validationSchema: FormSchema,
    onSubmit: data => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data,
        }),
      })
        .then(() => {
          alert("send")
        })
        .catch(error => alert(error))
    },
  })
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
                  <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
                  >
                    <FaPhone size={20} />
                    <motion.a href="tel:+0000000000">(000) 000-0000</motion.a>
                  </motion.li>
                  <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
                  >
                    <AiOutlineMail size={20} />
                    <motion.a href="mailto: info@acewebsolutions.io">
                      info@acewebsolutions.io
                    </motion.a>
                  </motion.li>
                  <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
                  >
                    <FaMapMarker size={20} />
                    <p>
                      8630-M Guilford Rd <br /> STE 304 <br /> Columbia, MD
                      20146
                    </p>
                  </motion.li>
                </motion.ul>
                <motion.div className="social" variants={stagger}>
                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
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
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
                    href="https://www.github.com/ace-websolutions"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF size={18} />
                  </motion.a>
                  <motion.a
                    variants={fadeInUp}
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 5,
                    }}
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
                  // method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  // action="/thank-you"
                  onSubmit={formik.handleSubmit}
                >
                  <input type="hidden" name="bot-field" />
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={8}
                    id="projectDescription"
                    name="projectDescription"
                    label="Project Description"
                    value={formik.values.projectDescription}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.projectDescription &&
                      Boolean(formik.errors.projectDescription)
                    }
                    helperText={
                      formik.touched.projectDescription &&
                      formik.errors.projectDescription
                    }
                  />
                  <motion.div
                    className="form-submit"
                    whileHover={{ scale: 1.1, transition: { type: "spring" } }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      y: [0, -4, 0, -4, 0],
                      transition: {
                        delay: 3,
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 3,
                      },
                    }}
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
