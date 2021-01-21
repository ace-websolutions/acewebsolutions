import React, { useState } from "react"
import { Link } from "gatsby"
import { FiMenu, FiX } from "react-icons/fi"
import { motion } from "framer-motion"
import { springTransition } from "../animation/animation"
import {
  deskNavVariants,
  navVariants,
  staggerDeskNav,
  logoNavVariants,
} from "../animation/nav"

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav id="nav">
      <div className="container">
        <nav className="nav-bar">
          <motion.span
            className="logo-span"
            variants={logoNavVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={springTransition}
          >
            <Link id="logo-nav" to="/" activeClassName="active">
              <span className="ace">Ace </span>Web Solutions
            </Link>
          </motion.span>
          <motion.ul
            variants={staggerDeskNav}
            className="nav-button-group"
            initial="initial"
            animate="animate"
          >
            <motion.li
              variants={deskNavVariants}
              whileHover="hover"
              transition={springTransition}
            >
              <Link id="home-nav" to="/" activeClassName="active">
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={deskNavVariants}
              whileHover="hover"
              transition={springTransition}
            >
              <Link id="about-nav" to="/about/" activeClassName="active">
                About
              </Link>
            </motion.li>
            <motion.li
              variants={deskNavVariants}
              whileHover="hover"
              transition={springTransition}
            >
              <Link id="services-nav" to="/services/" activeClassName="active">
                Services
              </Link>
            </motion.li>
            <motion.li
              variants={deskNavVariants}
              whileHover="hover"
              transition={springTransition}
            >
              <Link
                id="portfolio-nav"
                to="/portfolio/"
                activeClassName="active"
              >
                Portfolio
              </Link>
            </motion.li>
            <motion.li
              variants={deskNavVariants}
              whileHover="hover"
              transition={springTransition}
            >
              <Link id="contact-nav" to="/contact/" activeClassName="active">
                Contact
              </Link>
            </motion.li>
          </motion.ul>
          {/* <div className="nav-buttons-group-mobile">
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
              <Link to="/about/" onClick={() => setOpen(!open)}>
                About
              </Link>
              <Link to="/services/" onClick={() => setOpen(!open)}>
                Services
              </Link>
              <Link to="/portfolio/" onClick={() => setOpen(!open)}>
                Portfolio
              </Link>
              <Link to="/contact/" onClick={() => setOpen(!open)}>
                Contact
              </Link>
            </div>
          </motion.div> */}
        </nav>
      </div>
    </nav>
  )
}

export default Nav
