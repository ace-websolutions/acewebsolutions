/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Nav from "../components/nav"
import Footer from "../components/footer"
import { PageProvider } from "../context/pagecontext"


const Layout = ({ children }) => {
  return (
    <PageProvider>
      <Nav />
        <main>{children}</main>
      <Footer />
    </PageProvider>
  )
}

export default Layout
