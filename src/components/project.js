import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Modal from "./modal"

function Project({ project }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          id
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <article className="card tl-project">
        <div className="img-container">
          <Img
            fixed={data.image.childImageSharp.fixed}
            alt={project.title}
            backgroundColor
          />
        </div>
        <div className="info-container">
          <div className="info">
            <h2>{project.title}</h2>
            <button onClick={handleOpen}>Learn More</button>
          </div>
        </div>
      </article>
      <Modal project={project} open={open} handleClose={handleClose} />
    </>
  )
}

export default Project
