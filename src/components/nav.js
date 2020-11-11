import React, { useState, useEffect } from "react"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
        {/* <AniLink fade to='/'>
            <GiSpades size={42} />
        </AniLink> */}
          <div className="nav-button-group">
            <AniLink paintDrip hex="#4361eeff" to='/'>
              Home
            </AniLink>
            <AniLink swipe top='entry' entryOffset={100} direction="up" to='/about'>
              About
            </AniLink>
            <AniLink swipe top='entry' entryOffset={100} direction="right" duration={1.25} to='/services'>
              Services
            </AniLink>
            <AniLink swipe top='entry' entryOffset={100} direction="left" duration={1.25} to='/portfolio'>
              Portfolio
            </AniLink>
            <AniLink swipe top='entry' entryOffset={100} direction="down" to='/contact'>
              Contact
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
