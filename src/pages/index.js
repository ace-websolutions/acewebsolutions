import React from "react"

import SEO from "../components/seo"
import Intro from "../components/intro"
import Nav from "../components/nav"
import Layout from "../components/layout"
import Landing from "../components/landing"
import About from "../components/about"
import Services from "../components/services"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

import "../styles/App.scss"

const IndexPage = () => (
  <>
    <SEO title='Welcome'/>
    <Intro />
    <Nav />
    <Layout>
      <Landing />
      <About />
      <Services />
      <Projects />
      <Contact />
    </Layout>
    <Footer />
  </>
)

export default IndexPage
