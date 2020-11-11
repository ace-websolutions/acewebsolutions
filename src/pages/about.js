import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutSection from '../components/about'

const About = () => {
    return (
        <Layout>
            <SEO title='About'/>
            <AboutSection />
        </Layout>
    )
}

export default About
