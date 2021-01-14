import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Nav from "./nav"
import Footer from "./footer"
import { AnimatePresence, motion } from "framer-motion"
import Arrows from "./arrows"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.png" }) {
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
    </body>
  )
}

export default Layout
