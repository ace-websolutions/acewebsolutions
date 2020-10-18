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
        <nav className="nav-bar">
          <progress max="100" value="0"></progress>
          <Link
            to="landing"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
            className="logo"
          >
            <GiSpades size={42} />
            <span>Ace Web Solutions</span>
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
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </div>
          <button className="burger" onClick={() => setOpen(!open)}>
            <FiMenu size={30} />
          </button>
          <div className={`nav-button-group-mobile mobile-${open}`}>
            <Link
              to="about"
              spy={true}
              onClick={() => setOpen(false)}
              smooth={true}
              offset={0}
              duration={500}
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              onClick={() => setOpen(false)}
              smooth={true}
              offset={0}
              duration={500}
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              onClick={() => setOpen(false)}
              smooth={true}
              offset={0}
              duration={500}
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Nav
