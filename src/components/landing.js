import React, { useEffect } from "react"
import gsap from "gsap"
import Particles from "react-particles-js"
import { Link } from "react-scroll"
import { FaAngleDoubleDown, FaGithub } from "react-icons/fa"

const Landing = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })

    const tl = gsap.timeline()

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "back.out",
      delay: 1,
      skewY: 7,
      stagger: 0.3,
    })
      .to(".break", 1.8, {
        width: "100%",
        ease: "back.out",
        delay: -1.6,
      })
      .to(".top", 2.4, {
        y: "-130%",
        skewY: -10,
        ease: "power3.out",
        delay: -0.25,
      })
      .to(".bottom", 2.4, {
        y: "-130%",
        skewY: -10,
        ease: "power3.out",
        delay: -2.3,
      })
      .to(".arrow", 1.6, {
        bottom: "5%",
        opacity: 1,
        ease: "back.out",
        delay: -2.6,
      })
      .to([".contact-btn", ".btn-group", ".arrow"], 0, {
        css: { zIndex: 14 },
      })
      .to(".nav-bar", 1.8, {
        opacity: 1,
        delay: -1.8,
      })
  }, [])

  return (
    <section id="landing" className="hero">
      <div className="container">
        <div className="flex">
          <h2>
            <div className="line">
              <span>Web Developer</span>
            </div>
            <div className="break"></div>
          </h2>
          <h4>
            <div className="line">
              <span>Front end focused</span>
            </div>
            <div className="line">
              <span>Back end capable</span>
            </div>
          </h4>
          <Link
            className="contact-btn"
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={700}
          >
            Contact
          </Link>
          <div className="btn-group">
            <a
              href="https://www.github.com/nick-dasto"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
        <Link
          className="arrow"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}
        >
          <button className="bounce">
            <FaAngleDoubleDown size={40} />
          </button>
        </Link>
        <Particles
          className="particle"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
    </section>
  )
}

export default Landing
