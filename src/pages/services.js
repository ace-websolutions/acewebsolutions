import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { containerStagger, fadeInUp, stagger } from "../animation/animation"
import { SERVICES } from "../context/config"
import useSetArrows from "../hooks/useSetArrows"

const Services = () => {
  useSetArrows("about/", "portfolio/")

  return (
    <section id="services">
      <SEO title="Services" />
      <div className="container">
        <div className="container-fluid">
          <motion.div
            variants={containerStagger}
            className="flex serv-container"
          >
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                Here is <span>what</span> I do
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Personalized, functional, well maintained web applications
              </motion.p>
            </motion.header>
            <motion.div variants={fadeInUp} className="services-container">
              {SERVICES.map(service => (
                <motion.div
                  // variants={servVariants}
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

export default Services
