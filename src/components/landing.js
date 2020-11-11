import React, { useEffect } from "react"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Particles from "react-particles-js"
import { GiSpades } from "react-icons/gi"
import { FaGithub } from "react-icons/fa"

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
        {/* <GiSpades size={60} /> */}
          <h2>
            <div className="line">
              <span>Ace Web Solutions</span>
            </div>
            <div className="break"></div>
          </h2>
          <h4>
            <div className="line">
              <span>Front end web</span>
            </div>
            <div className="line">
              <span>developer</span>
            </div>
          </h4>
          <AniLink fade to='contact'>
              Contact
            </AniLink>
          <div className="btn-group">
            <a
              href="https://www.github.com/ace-websolutions"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
        <Particles
          className="particle"
          params={{
            background: {
              color: {
                value: "#111",
              },
            },
            particles: {
              color:{
                value: "#4361eeff"
              },
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 4,
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
