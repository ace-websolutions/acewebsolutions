import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import { AnimatePresence, motion } from "framer-motion"
import Arrows from "./arrows"
import Particles from "react-particles-js"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cool-background.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <div
      className="svg-background"
      style={{
        backgroundImage: `url(${data.file.publicURL}`,
      }}
    >
      <Nav />
      <Arrows />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: -1,
        }}
        params={{
          particles: {
            color: {
              value: "#000",
            },
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
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
                enable: true,
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
  )
}

export default Layout
