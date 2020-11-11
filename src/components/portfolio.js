import React, { useEffect } from "react"
import gsap from "gsap"
import { PROJECTS } from "../context/config"
import Project from "./project"

function PortfolioSection() {
  useEffect(() => {
    gsap.from(".tl-project-title", {
      opacity: 0,
      y: -80,
      ease: "power4.inOut",
      duration: 1.2,
    })
    gsap.from(".tl-project-subtitle", {
      opacity: 0,
      y: 80,
      ease: "power4.inOut",
      duration: 1.2,
    })

    const tlProject = gsap.timeline({
      defaults: { duration: 1.2, ease: "power4.inOut" },
    })
    tlProject.from(".tl-project", { opacity: 0, y: 60, stagger: 0.2 }, "<.5")

    gsap.to("#nav",{ css: { color: "#000" },ease: "none", }, 0 )

  }, [])

  return (
    <section id="portfolio">
      <div className="container">
        <div className="container-fluid">
          <div className="flex proj-container">
            <header>
              <h2 className="tl-project-title">My work so far</h2>
              <p className="tl-project-subtitle">
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

export default PortfolioSection
