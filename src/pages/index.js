import React from "react"

import SEO from "../components/seo"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Landing from "../components/landing"

import "../styles/App.scss"

const IndexPage = () => (
  <>
    <SEO title='Welcome'/>
    <Intro />
    <Layout>
      <Landing />
    </Layout>
  </>
)

export default IndexPage
