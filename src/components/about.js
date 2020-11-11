import React, { useEffect } from "react"
import WebsiteSVG from "../images/website.svg"
import gsap from "gsap"
import { SKILLICONS } from "../context/config"

function AboutSection() {
  useEffect(() => {
    gsap.from(".tl-about-title", {
      opacity: 0,
      y: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-about-subtitle", {
      opacity: 0,
      y: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-about", {
      opacity: 0,
      x: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })

    gsap.from(".about-svg-container", {
      opacity: 0,
      x: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".icon-container", {
      opacity: 0,
      x: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-skills", {
      opacity: 0,
      x: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })

    const tlSVG = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
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

    const tlSkillsIcons = gsap.timeline({
      defaults: { duration: 1, ease: "back.out" },
    })
    tlSkillsIcons.from(
      ".tl-skills-icons",
      { scale: 0, transformOrigin: "center", stagger: 0.1 },
      "<.5"
    )
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
              <p className="tl-about-subtitle">A self taught web developer.</p>
            </header>
            <div className="about">
              <p className="about-text tl-about">
                I am passionate about creating projects that can help improve
                the lives of those around me. I started this company to
                challenge myself and see how far I can go. The ability to one
                day perhaps be making a living off of working with computers
                keeps me motivated.
              </p>
              <div className="about-svg-container">
                <WebsiteSVG className="about-svg" />
              </div>
            </div>
            <div className="skills">
              <p className="skills-text tl-skills">
                I believe anything can be achieved if you work hard enough, and
                you should never stop learning. Through various resources I have
                discovered and practiced all of the skills you see here. In the
                modern web, new tools are always popping up and it is important
                to stay on top of the new technology in order to stay relevant .
              </p>
              <div className="icon-container">
                {SKILLICONS.map(icon => (
                  <div key={icon.name} className="icon tl-skills-icons">
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

export default AboutSection
