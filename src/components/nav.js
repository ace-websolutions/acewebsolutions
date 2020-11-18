import React, { useState, useEffect, useContext } from "react"
import gsap from "gsap"
import { Link } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiMenu, FiChevronRight, FiChevronLeft, FiX } from "react-icons/fi"
import { PageContext } from "../context/pagecontext"
import { motion } from "framer-motion"
import { navVariants } from "../animation/animation"
gsap.registerPlugin(ScrollTrigger)

function Nav() {
  const [open, setOpen] = useState(false)
  const { leftPage, rightPage } = useContext(PageContext)

  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    })
  }, [])

  return (
    <nav id="nav">
      <div className="container">
        {/* <progress max="100" value="0"></progress> */}
        <nav className="nav-bar">
          <div className="nav-button-group">
            <Link id="left-arrow-nav" to={`/${leftPage}`}>
              <FiChevronLeft size={30} />
            </Link>
            <Link id="home-nav" to="/" activeClassName="active">
              Home
            </Link>
            <Link id="about-nav" to="/about" activeClassName="active">
              About
            </Link>
            <Link id="services-nav" to="/services" activeClassName="active">
              Services
            </Link>
            <Link id="portfolio-nav" to="/portfolio" activeClassName="active">
              Portfolio
            </Link>
            <Link id="contact-nav" to="/contact" activeClassName="active">
              Contact
            </Link>
            <Link id="right-arrow-nav" to={`/${rightPage}`}>
              <FiChevronRight size={30} />
            </Link>
          </div>
          <div className="nav-buttons-group-mobile">
            <Link id="left-arrow-nav" to={`/${leftPage}`}>
              <FiChevronLeft size={30} />
            </Link>
            <button className="burger" onClick={() => setOpen(!open)}>
              {!open ? <FiMenu size={30} /> : <FiX size={30} />}
            </button>
            <Link id="right-arrow-nav" to={`/${rightPage}`}>
              <FiChevronRight size={30} />
            </Link>
          </div>
          <motion.div
            variants={navVariants}
            animate={open ? "open" : "closed"}
            className={`nav-button-group-mobile`}
          >
            <div className="mobile-buttons">
              <Link to="/" onClick={() => setOpen(!open)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setOpen(!open)}>
                About
              </Link>
              <Link to="/services" onClick={() => setOpen(!open)}>
                Services
              </Link>
              <Link to="/portfolio" onClick={() => setOpen(!open)}>
                Portfolio
              </Link>
              <Link to="/contact" onClick={() => setOpen(!open)}>
                Contact
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </nav>
  )
}

export default Nav
