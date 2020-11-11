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
      images: allFile(filter: { relativeDirectory: { eq: "thumbnail" } }) {
        nodes {
          id
          childImageSharp {
            id
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
  return (
    <>
      <article className="card tl-project">
        <div className="img-container">
          <Img
            fixed={data.images.nodes[0].childImageSharp.fixed}
            alt={project.title}
            backgroundColor
          />
        </div>
        <div className="info-container">
          <div className="info">
            <h2>{project.title}</h2>
            <button onClick={handleOpen}>See More</button>
          </div>
        </div>
      </article>
      <Modal
        project={project}
        data={data}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default Project
