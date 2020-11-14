import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import { AnimatePresence, motion } from "framer-motion"

const Layout = ({ children, location }) => {
  return (
    <>
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
    </>
  )
}

export default Layout
