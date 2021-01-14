import React, { useContext } from "react"
import { Link } from "gatsby"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PageContext } from "../context/pagecontext"

const Arrows = () => {
  const { leftPage, rightPage } = useContext(PageContext)

  return (
    <div className="arrows">
      <Link id="left-arrow-nav" to={`/${leftPage}`}>
        <FiChevronLeft size={30} />
      </Link>
      <Link id="right-arrow-nav" to={`/${rightPage}`}>
        <FiChevronRight size={30} />
      </Link>
    </div>
  )
}

export default Arrows
