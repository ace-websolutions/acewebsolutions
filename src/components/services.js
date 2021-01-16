import React, { useEffect, useContext } from "react"
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
  }, [])

  return (
    <section id="services">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex serv-container">
            <motion.header variants={fadeInUp}>
              <h2>
                Here is <span>what</span> I do
              </h2>
              <p>Personalized, functional, well maintained web applications</p>
            </motion.header>
            <motion.div variants={stagger} className="services-container">
              {SERVICES.map(service => (
                <motion.div
                  variants={fadeInUp}
                  key={service.title}
                  className="service-card"
                >
                  <div className="service-mask"></div>
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
