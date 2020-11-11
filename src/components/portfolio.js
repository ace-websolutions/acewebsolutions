import React, { useEffect, useContext } from "react"
import gsap from "gsap"
import { graphql, useStaticQuery } from 'gatsby'
import Project from "./project"
import { PageContext } from "../context/pagecontext"

function PortfolioSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: {eq: "thumbnail/placeholder.jpg"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog: file(relativePath: {eq: "thumbnail/dog.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      construction: file(relativePath: {eq: "thumbnail/construction.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
)
  const PROJECTS = [
    {
      title: "Coming Soon",
      description:
        "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses form submission and completely responsive on mobile devices.",
      live: "#",
      code: "#",
      img:  '',
      tags:[],
      link:'#',
    },
    {
      title: "Dog Walking",
      description:
        "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses form submission and completely responsive on mobile devices.",
      live: "https://festive-villani-dc6a2f.netlify.app/",
      code: "https://github.com/ace-websolutions/dogwalking",
      img: data.dog.childImageSharp.fluid,
      tags:[],
      link:'dog',
    },
    {
      title: "Construction Underwriters",
      description:
        "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses google maps for directions and is completely responsive on mobile devices.",
      live: "https://eloquent-brown-193374.netlify.app/",
      code: "https://github.com/ace-websolutions/construction-underwriters",
      img: data.construction.childImageSharp.fluid,
      tags:[],
      link:'construction',
    },
]


useEffect(() => {

  setLeftPage('services');
  setRightPage('contact'); 

  gsap.to('#portfolio-nav',  { css: { className:'+=active'} } , 0 )

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


