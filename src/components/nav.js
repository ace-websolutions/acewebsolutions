import React, { useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-scroll"
import { GiSpades } from "react-icons/gi"
import { FiMenu } from "react-icons/fi"
gsap.registerPlugin(ScrollTrigger)

function Nav() {
  const [open, setOpen] = useState(false)

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
          <Link
            to="landing"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
            className="logo"
          >
            <GiSpades size={42} />
          </Link>
          <div className="nav-button-group">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </Link>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              Contact
            </Link>
          </div>
          <button className="burger" onClick={() => setOpen(!open)}>
            <FiMenu size={30} />
          </button>
          <div className={`nav-button-group-mobile mobile-${open}`}>
            <div className="mobile-buttons">
              <Link
                to="about"
                spy={true}
                onClick={() => setOpen(false)}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                to="services"
                spy={true}
                onClick={() => setOpen(false)}
                smooth={true}
                offset={0}
                duration={500}
              >
                Services
              </Link>
              <Link
                to="projects"
                spy={true}
                onClick={() => setOpen(false)}
                smooth={true}
                offset={1}
                duration={500}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                onClick={() => setOpen(false)}
                smooth={true}
                offset={1}
                duration={500}
              >
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
