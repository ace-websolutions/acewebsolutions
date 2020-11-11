import React from "react"
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";


function Project({ project }) {

  return (
    <>
      <article className="card tl-project">
        <div className="img-container">
        <Img fluid={project.img} alt={project.title} backgroundColor/>
        </div>
        <div className="info-container">
          <div className="info">
            <h2>{project.title}</h2>
            <AniLink paintDrip hex="#4361eeff" to={`/project-${project.link}`}>
              See more
            </AniLink>
          </div>
        </div>
      </article>
    </>
  )
}

export default Project
