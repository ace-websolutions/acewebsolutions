import React from "react"
import SEO from "../components/seo"
import PROJECTS from "../context/projects.json"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import Project from "../components/project"
import useSetArrows from "../hooks/useSetArrows"

function Portfolio() {
  useSetArrows("services/", "contact/")

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
      <SEO title="Portfolio" />
      <div className="container">
        <div className="container-fluid">
          <motion.div variants={stagger} className="flex proj-container">
            <motion.header variants={stagger}>
              <motion.h2 variants={fadeInUp}>
                My <span>work</span> so far
              </motion.h2>
              <motion.p variants={fadeInUp}>
                A running list of my projects used to help get me where I am
                today{" "}
              </motion.p>
            </motion.header>
            <motion.div variants={stagger} className="projects-container">
              {PROJECTS.map(project => (
                <Project key={project.title} project={project} data={data} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
