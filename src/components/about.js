import React, { useEffect } from "react"
import WebsiteSVG from "../images/website.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SKILLICONS } from "../context/config"
gsap.registerPlugin(ScrollTrigger)

function About() {
  useEffect(() => {
    const tlAbout = gsap.timeline({
      scrollTrigger: { trigger: ".about", start: "center center" },
      defaults: {
        duration: 1.6,
        ease: "power4.inOut",
      },
    })
    tlAbout
      .from(".tl-about-title", { opacity: 0, x: -60 })
      .from(".tl-about", { opacity: 0, y: 60, stagger: 0.4 }, "<.5")

    const tlSVG = gsap.timeline({
      scrollTrigger: { trigger: ".about-svg", start: "center center" },
      defaults: { duration: 1.6, ease: "power4.inOut" },
    })
    tlSVG
      .from(".tl-about-svg-intro", {
        scale: 0,
        transformOrigin: "center",
        ease: "expo.out",
      })
      .from(".tl-about-svg-fill-top", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.4,
      })
      .from(
        ".tl-about-svg-fill-left",
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: 0.15,
        },
        "<-.25"
      )
      .from(
        ".tl-about-svg-fill-scale",
        {
          scale: 0,
          transformOrigin: "center",
          stagger: 0.2,
        },
        "<-.25"
      )
      .from(
        ".tl-about-svg-fill-center",
        {
          scaleX: 0,
          transformOrigin: "center",
          stagger: 0.2,
        },
        "<-.25"
      )

    const tlSkills = gsap.timeline({
      scrollTrigger: { trigger: ".skills", start: "top center" },
      defaults: { duration: 1.6, ease: "power4.inOut" },
    })
    tlSkills
      .from(".tl-skills-title", { opacity: 0, x: 60 })
      .from(".tl-skills", { opacity: 0, y: 60, stagger: 0.2 }, "<.5")
  }, [])

  return (
    <section id="about">
      <div className="container">
        <div className="container-fluid">
          <div className="flex about-container">
            <header>
              <h2 className="tl-about-title">
                Hello, I'm <span>Nick</span> -
              </h2>
            </header>
            <div className="about">
              <p className="tl-about">
                I am a self taught developer passionate about creating projects
                that can help improve the lives of those around me. I started
                this company to challenge myself and see how far I can go. The
                ability to one day perhaps be making a living off of working
                with computers keeps me motivated.
              </p>
              <div className="about-svg-container">
                <WebsiteSVG className="about-svg" />
              </div>
            </div>
            <div className="skills">
              <p className="tl-about">
                I believe anything can be achieved if you work hard enough, and
                you should never stop learning. Through various resources I have
                learned and put into use all of the skills you see here. In the
                modern web, new tools are always popping up and it is important
                to find crucial ones what
              </p>
              <div className="icon-container">
                {SKILLICONS.map(icon => (
                  <div key={icon.name} className="icon tl-skills">
                    {icon.import}
                    <h5>{icon.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
