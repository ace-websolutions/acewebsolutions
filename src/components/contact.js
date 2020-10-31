import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhone } from "react-icons/fa"
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useEffect(() => {
    gsap.from(".tl-contact-title", {
      scrollTrigger: { trigger: "#contact", start: "top center" },
      opacity: 0,
      y: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-contact-subtitle", {
      scrollTrigger: { trigger: "#contact", start: "top center" },
      opacity: 0,
      y: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    const tlContact = gsap.timeline({
      scrollTrigger: { trigger: ".direct-methods", start: "top bottom" },
      defaults: { duration: 1.6, ease: "power4.inOut" },
    })
    tlContact.from(".tl-contact", { opacity: 0, y: 60, stagger: 0.4 })

    const tlForm = gsap.timeline({
      scrollTrigger: { trigger: "form", start: "top center" },
      defaults: { duration: 1.6, ease: "power4.inOut" },
    })
    tlForm.from(".tl-form", { opacity: 0, y: 60, stagger: 0.2 })
  }, [])
  return (
    <section id="contact">
      <div className="container">
        <div className="container-fluid">
          <div className="flex contact-container">
            <header>
              <h2 className="tl-contact-title">Let's get in touch</h2>
              <p className="tl-contact-subtitle">
                Currently accepting work, lets talk about what <span>you</span>{" "}
                have in mind!
              </p>
            </header>
            <form
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
            </form>
            <div className="direct-contact">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
