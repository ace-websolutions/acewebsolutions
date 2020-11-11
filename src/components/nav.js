import React, { useState, useEffect, useContext } from "react"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiMenu, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PageContext } from "../context/pagecontext";
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
    <section id="nav">
      <div className="container">
        <progress max="100" value="0"></progress>
        <nav className="nav-bar">
          <div className="nav-button-group">
            <AniLink id='left-arrow-nav' swipe top='entry' entryOffset={100} direction="right" duration={1.25} to={`/${leftPage}`}>
              <FiChevronLeft size={30} />
            </AniLink>
            <AniLink paintDrip hex="#4361eeff" to='/'>
              Home
            </AniLink>
            <AniLink id='about-nav' swipe top='entry' entryOffset={100} direction="up" to='/about'>
              About
            </AniLink>
            <AniLink id='services-nav' swipe top='entry' entryOffset={100} direction="up" to='/services'>
              Services
            </AniLink>
            <AniLink id='portfolio-nav' swipe top='entry' entryOffset={100} direction="up" to='/portfolio'>
              Portfolio
            </AniLink>
            <AniLink id='contact-nav' swipe top='entry' entryOffset={100} direction="up" to='/contact'>
              Contact
            </AniLink>
            <AniLink id='right-arrow-nav' swipe top='entry' entryOffset={100} direction="left" duration={1.25} to={`/${rightPage}`}>
              <FiChevronRight size={30} />
            </AniLink>
          </div>
          <button className="burger" onClick={() => setOpen(!open)}>
            <FiMenu size={30} />
          </button>
          <div className={`nav-button-group-mobile mobile-${open}`}>
            <div className="mobile-buttons">
            <AniLink fade to='/about'>
              About
            </AniLink>
            <AniLink fade to='/services'>
              Services
            </AniLink>
            <AniLink fade to='/portfolio'>
              Portfolio
            </AniLink>
            <AniLink fade to='/contact'>
              Contact
            </AniLink>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Nav
