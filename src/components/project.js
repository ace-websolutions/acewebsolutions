import React, { useState } from "react"
import Modal from "./modal"

function Project({ project }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <article className="card tl-project">
        <div className="img-container">
          <img
            src={require(`../images/${project.img}.jpg`)}
            alt={project.title}
          />
        </div>
        <div className="info-container">
          <div className="info">
            <h4>{project.title}</h4>
            <button onClick={handleOpen}>Learn More</button>
          </div>
        </div>
      </article>
      <Modal project={project} open={open} handleClose={handleClose} />
    </>
  )
}

export default Project
