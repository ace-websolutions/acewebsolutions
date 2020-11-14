import React, { useState, useEffect, useContext } from "react"
import gsap from "gsap"
import { Link } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiMenu, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PageContext } from "../context/pagecontext";
gsap.registerPlugin(ScrollTrigger)

function Nav() {
  const [open, setOpen] = useState(false)
  // const { leftPage, rightPage } = useContext(PageContext)

  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    })
  }, [])

  return (
    <section id="nav">
      <div className="container">
        <progress max="100" value="0"></progress>
        <nav className="nav-bar">
          <div className="nav-button-group">
            {/* <Link id='left-arrow-nav' to={`/${leftPage}`}>
              <FiChevronLeft size={30} />
            </Link> */}
            <Link id='home-nav' to='/'>
              Home
            </Link>
            <Link id='about-nav' to='/about'>
              About
            </Link>
            <Link id='services-nav' to='/services'>
              Services
            </Link>
            <Link id='portfolio-nav' to='/portfolio'>
              Portfolio
            </Link>
            <Link id='contact-nav' to='/contact'>
              Contact
            </Link>
            {/* <Link id='right-arrow-nav' to={`/${rightPage}`}>
              <FiChevronRight size={30} />
            </Link> */}
          </div>
          <div className="nav-buttons-group-mobile">
          {/* <Link id='left-arrow-nav' to={`/${leftPage}`}>
              <FiChevronLeft size={30} />
            </Link> */}
          <button className="burger" onClick={() => setOpen(!open)}>
            <FiMenu size={30} />
          </button>
          {/* <Link id='right-arrow-nav' to={`/${rightPage}`}>
              <FiChevronRight size={30} />
            </Link> */}
          </div>
          <div className={`nav-button-group-mobile mobile-${open}`}>
            <div className="mobile-buttons">
            <Link to='/about'>
              About
            </Link>
            <Link to='/services'>
              Services
            </Link>
            <Link to='/portfolio'>
              Portfolio
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Nav
