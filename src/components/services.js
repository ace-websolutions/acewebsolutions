import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SERVICES } from "../context/config"
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="container-fluid">
          <div className="flex serv-container">
            <header>
              <h2>Here is what I do</h2>
              <p>Personalized, functional, well maintained web applications</p>
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
            <h1>
              SVGs for icons + SVG for timeline + uncomment credit in footer +
              change wording in about + nav progress bar + add services to nav
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
