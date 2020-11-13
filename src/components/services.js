import React, { useEffect, useContext } from "react"
import gsap from "gsap"
import { SERVICES } from "../context/config"
import { PageContext } from "../context/pagecontext"

const ServicesSection = () => {

  const { setLeftPage, setRightPage } = useContext(PageContext) 
  
  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage('about');
    // eslint-disable-next-line
    setRightPage('portfolio'); 

    gsap.to('#services-nav',  { css: { className:'+=active'} } , 0 )

    gsap.from(".tl-service-title", {
      opacity: 0,
      y: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-service-subtitle", {
      opacity: 0,
      y: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".service-card", {
      opacity: 0,
      scale: 0,
      ease: "back.out",
      duration: 1,
      stagger: 0.3,
    })
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
      delay: 2,
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
      delay: 3,
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
                  {service.svg}
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

export default ServicesSection
