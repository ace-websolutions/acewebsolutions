import React from "react"
import { motion } from "framer-motion"
import { fadeInUp } from "../animation/animation"
import Img from "gatsby-image"
import { Link } from "gatsby"

function Project({ project, data }) {
  const imagePath = data[project.link.slice(0, -1)]

  return (
    <motion.article variants={fadeInUp} className="card tl-project">
      <div className="img-container">
        <Img
          fluid={imagePath.childImageSharp.fluid}
          alt={project.title}
          backgroundColor
        />
      </div>
      <div className="info-container">
        <div className="info">
          <h2>{project.title}</h2>
          <div className="next-section-button">
            <Link to={`/projects/${project.link}`}>See more</Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default Project
