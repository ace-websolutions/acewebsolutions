import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PortfolioSection from '../components/portfolio'

const Portfolio = () => {
    return (
        <Layout>
            <SEO title='Portfolio' />
            <PortfolioSection />
        </Layout>
    )
}

export default Portfolio
