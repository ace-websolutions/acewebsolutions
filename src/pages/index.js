import React from "react"

import SEO from "../components/seo"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Landing from "../components/landing"

import "../styles/App.scss"

const IndexPage = () => (
  <>
    {/* <Intro /> */}
    <Layout>
      <SEO title='Welcome'/>
      <Landing />
    </Layout>
  </>
)

export default IndexPage
