import React from "react"
import Img from "gatsby-image"
import ClickAwayListener from "react-click-away-listener"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Modal = ({ project, data, open, handleClose }) => {
  return (
    <div id="modal" className={`modal modal-${open}`}>
      {/* <ClickAwayListener onClickAway={handleClose}> */}
      <div className="modal-container">
        <AiOutlineCloseCircle onClick={handleClose} className="close" />
        <div className="modal-img-container">
          <Img
            fluid={data.images.nodes[project.imgNode].childImageSharp.fluid}
            alt={project.title}
            backgroundColor
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <p>{project.description}</p>
        <div className="card-btn-group">
          <button className="live">
            <a href={project.live} rel="noreferrer" target="_blank">
              Live
            </a>
          </button>
          <button>
            <a href={project.code} rel="noreferrer" target="_blank">
              Code
            </a>
          </button>
        </div>
      </div>
      {/* </ClickAwayListener> */}
    </div>
  )
}

export default Modal
