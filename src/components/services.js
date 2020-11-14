import React, { useEffect, useContext } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { SERVICES } from "../context/config"
import { PageContext } from "../context/pagecontext"
import { Link } from "gatsby"

const ServicesSection = () => {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("about")
    // eslint-disable-next-line
    setRightPage("portfolio")

    gsap.to("#services-nav", { css: { className: "+=active" } }, 0)

    gsap.to(".svg-gear", {
      transformOrigin: "center",
      rotate: 360,
      repeat: -1,
      yoyo: true,
      ease: "none",
      duration: 7,
    })
    gsap.to(".svg-gear-rev", {
      transformOrigin: "center",
      rotate: -360,
      repeat: -1,
      yoyo: true,
      ease: "none",
      duration: 7,
    })
    const tlHost = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1.4,
      },
    })
    tlHost.to(".svg-host", {
      y: -15,
      ease: "none",
    })

    const tlSeo = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.2,
      defaults: {
        scaleX: 0,
        duration: 0.4,
        stagger: 0.8,
      },
    })
    tlSeo
      .from(".svg-seo", {
        transformOrigin: "left",
      })
      .to(".svg-seo", {
        transformOrigin: "right",
        delay: 2,
      })
    // const tlHand = gsap.timeline({
    //   repeat: -1,
    //   repeatDelay: 1.2,
    //   defaults: {
    //     scaleY: 0,
    //     duration: 0.4,
    //     stagger: 0.8,
    //   },
    // })
    // tlHand
    //   .from(".svg-hand", {
    //     transformOrigin: "bottom",
    //   })
    //   .to(".svg-hand", {
    //     transformOrigin: "top",
    //     delay: 2,
    //   })
  }, [])

  return (
    <section id="services">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex serv-container">
            <motion.header variants={fadeInUp}>
              <h2 className="tl-service-title">Here is what I do</h2>
              <p className="tl-service-subtitle">
                Personalized, functional, well maintained web applications
              </p>
            </motion.header>
            <motion.div variants={stagger} className="services-container">
              {SERVICES.map(service => (
                <motion.div
                  variants={fadeInUp}
                  key={service.title}
                  className="service-card"
                >
                  {service.svg}
                  <div className="service-description">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="next-section-button" variants={fadeInUp}>
              <Link to="/portfolio">Look at my work</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
