import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import BackgroundSVG from "../images/backgroundDark.svg"
import { AnimatePresence, motion } from "framer-motion"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "backgroundDark.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <body
      style={{
        backgroundImage: `url(${data.file.publicURL}`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      /* background by SVGBackgrounds.com */
    >
      <Nav />
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
    </body>
  )
}

export default Layout
