import React from "react"

import Nav from "./nav"
import Footer from "./footer"
import { PageProvider } from "../context/pagecontext"
import { AnimatePresence, motion } from "framer-motion"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      // when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}


const Layout = ({ children, location }) => {
  React.useEffect(() => {
    console.log(location)
  })
  return (
    <PageProvider>
      <Nav />
          <AnimatePresence exitBeforeEnter>
          <motion.main  
            key={location}         
            initial='initial'
            animate='animate'
            exit='exit'>
            {children}
          </motion.main>
        </AnimatePresence>
      <Footer />
    </PageProvider>
  )
}

export default Layout
