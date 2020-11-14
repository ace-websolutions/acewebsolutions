import React from "react"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Landing from "../components/landing"

import "../styles/App.scss"

const IndexPage = () => (
  <>
    {/* <Intro /> */}
    <>
      <SEO title='Welcome'/>
      <Landing />
    </>
  </>
)

export default IndexPage
