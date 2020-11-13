import React from "react"

import Nav from "./nav"
import Footer from "./footer"
import { PageProvider } from "../context/pagecontext"


const Layout = ({ children }) => {
  return (
    <PageProvider>
      <Nav />
        <main>
          {children}
        </main>
      <Footer />
    </PageProvider>
  )
}

export default Layout
