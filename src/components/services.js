import React from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import { SERVICES } from "../context/config"
import useSetArrows from "../hooks/useSetArrows"

const servVariants = {
  initial: {
    boxShadow: "none",
  },
  animate: {
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
}

const ServicesSection = () => {
  useSetArrows("about/", "portfolio/")

  return (
    <section id="services">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex serv-container">
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                Here is <span>what</span> I do
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Personalized, functional, well maintained web applications
              </motion.p>
            </motion.header>
            <motion.div variants={servVariants} className="services-container">
              {SERVICES.map(service => (
                <motion.div
                  variants={fadeInUp}
                  key={service.title}
                  className="service-card"
                >
                  <motion.div className="service-mask-top"></motion.div>
                  <motion.div className="service-mask-bottom"></motion.div>
                  <div className="service-svg-container">{service.svg}</div>
                  <div className="service-description">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
