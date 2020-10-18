import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PROJECTS } from "../context/config"
import Project from "./project"
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useEffect(() => {
    const tlProject = gsap.timeline({
      scrollTrigger: { trigger: ".tl-project-title", start: "top center" },
      defaults: { duration: 1.6, ease: "power4.inOut" },
    })
    tlProject
      .from(".tl-project-title", { opacity: 0, x: -60 })
      .from(".tl-project", { opacity: 0, y: 60, stagger: 0.4 }, "<.5")

    gsap.to(
      "#nav",
      {
        scrollTrigger: { trigger: "#projects", start: "top top" },
        css: { color: "#000" },
      },
      0
    )
  }, [])

  return (
    <section id="projects">
      <div className="container">
        <div className="container-fluid">
          <div className="flex proj-container">
            <header>
              <h2 className="tl-project-title">My work so far</h2>
              <p className="tl-project-title">
                A running list of my projects used to help get me where I am
                today{" "}
              </p>
            </header>
            <div className="projects-container">
              {PROJECTS.map(project => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
