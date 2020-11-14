import React, { useEffect, useContext } from "react"
import gsap from "gsap"
import { Link } from "gatsby";
import Particles from "react-particles-js"
import { FaGithub } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"

const Landing = () => {

  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage('');
    // eslint-disable-next-line
    setRightPage('about'); 

    gsap.to('#home-nav',  { css: { className:'+=active'} } , 0 )
    // gsap.to('#left-arrow-nav',  { css: { className:'+=disabled'} } , 0 )
    gsap.to("#nav",{ css: { color: "#fff" },ease: "none", }, 0 )

    // gsap.to("body", 0, { css: { visibility: "visible" } })

    // const tl = gsap.timeline()

    // tl.from(".line span", 1.8, {
    //   y: 100,
    //   ease: "back.out",
    //   delay: 1,
    //   skewY: 7,
    //   stagger: 0.3,
    // })
    //   .to(".break", 1.8, {
    //     width: "100%",
    //     ease: "back.out",
    //     delay: -1.6,
    //   })
    //   .to(".top", 2.4, {
    //     y: "-130%",
    //     skewY: -10,
    //     ease: "power3.out",
    //     delay: -0.25,
    //   })
    //   .to(".bottom", 2.4, {
    //     y: "-130%",
    //     skewY: -10,
    //     ease: "power3.out",
    //     delay: -2.3,
    //   })
    //   .to(".arrow", 1.6, {
    //     bottom: "5%",
    //     opacity: 1,
    //     ease: "back.out",
    //     delay: -2.6,
    //   })
    //   .to([".contact-btn", ".btn-group", ".arrow"], 0, {
    //     css: { zIndex: 14 },
    //   })
    //   .to(".nav-bar", 1.8, {
    //     opacity: 1,
    //     delay: -1.8,
    //   })
  }, [])

  return (
    <section id="landing">
      <div className="container">
        <div className="flex landing-container">
          <div className="text">
          <h2>
            <div className="line">
              <span>Ace Web Solutions</span>
            </div>
          </h2>
          <h4>
            <div className="line">
              <span>Front end web</span>
            </div>
            <div className="line">
              <span>developer</span>
            </div>
          </h4>
          <div className="btn-group">
            <div className="next-section-button landing-contact">
                <Link to='/contact'>Contact Me</Link>
              </div>
              <a
              className='git-link'
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={25} />
              </a>
          </div>
        </div>
        </div>
        <div className="logo">

        </div>
        <Particles
          className="particle"
          params={{
            background: {
              color: {
                value: "#111",
              },
            },
            particles: {
              color:{
                value: "#fff"
              },
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
    </section>
  )
}

export default Landing
