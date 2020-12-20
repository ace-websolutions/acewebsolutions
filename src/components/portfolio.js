import React, { useEffect, useContext } from "react"
import PROJECTS from "../context/projects.json"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import Project from "./project"
import { PageContext } from "../context/pagecontext"

function PortfolioSection() {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("services")
    // eslint-disable-next-line
    setRightPage("contact")
  }, [])

  const data = useStaticQuery(graphql`
    query {
      healthy: file(relativePath: { eq: "thumbnail/healthy.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dog: file(relativePath: { eq: "thumbnail/dog.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      construction: file(relativePath: { eq: "thumbnail/construction.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="portfolio">
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex proj-container">
            <motion.header variants={fadeInUp}>
              <h2>My work so far</h2>
              <p>
                A running list of my projects used to help get me where I am
                today{" "}
              </p>
            </motion.header>
            <motion.div variants={stagger} className="projects-container">
              {PROJECTS.map(project => (
                <Project key={project.title} project={project} data={data} />
              ))}
            </motion.div>
            <motion.div className="next-section-button" variants={fadeInUp}>
              <Link to="/contact">Get in touch</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
