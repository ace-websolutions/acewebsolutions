import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SERVICES } from "../context/config"
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  useEffect(() => {
    gsap.from(".tl-service-title", {
      scrollTrigger: { trigger: "#services", start: "top center" },
      opacity: 0,
      y: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-service-subtitle", {
      scrollTrigger: { trigger: "#services", start: "top center" },
      opacity: 0,
      y: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })
  }, [])

  return (
    <section id="services">
      <div className="container">
        <div className="container-fluid">
          <div className="flex serv-container">
            <header>
              <h2 className="tl-service-title">Here is what I do</h2>
              <p className="tl-service-subtitle">
                Personalized, functional, well maintained web applications
              </p>
            </header>
            <div className="services-container">
              {SERVICES.map(service => (
                <div className="service-card">
                  {service.icon}
                  <div className="service-description">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
