import React from "react"
import ClickAwayListener from "react-click-away-listener"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Modal = ({ project, open, handleClose }) => {
  return (
    <div id="modal" className={`modal modal-${open}`}>
      {/* <ClickAwayListener onClickAway={handleClose}> */}
      <div className="modal-container">
        <AiOutlineCloseCircle onClick={handleClose} className="close" />
        <img
          src={require(`../images/${project.img}.jpg`)}
          alt={project.title}
        />
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
