import React, { useState } from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import AliceCarousel from "react-alice-carousel"

const ProjectTemplate = ({ pageContext, data }) => {
  const project = pageContext

  const images = [
    <Img
      fluid={data.aliceImageOne.childImageSharp.fluid}
      className="alice-image"
    />,
    <Img
      fluid={data.aliceImageTwo.childImageSharp.fluid}
      className="alice-image"
    />,
    <Img
      fluid={data.aliceImageThree.childImageSharp.fluid}
      className="alice-image"
    />,
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const slidePrev = () => setActiveIndex(activeIndex - 1)
  const slideNext = () => setActiveIndex(activeIndex + 1)
  const onSlideChanged = ({ item }) => setActiveIndex(item)

  return (
    <>
      <SEO title={project.title} />
      <section id="portfolio-project">
        <div className="container">
          <div className="container-fluid">
            <motion.div variants={stagger} className="flex portfolio-container">
              <motion.header variants={fadeInUp}>
                <h2>{project.title}</h2>
              </motion.header>
              <motion.div variants={fadeInUp} className="portfolio-image">
                <AliceCarousel
                  items={images}
                  mouseTracking
                  disableButtonsControls
                  activeIndex={activeIndex}
                  onSlideChanged={onSlideChanged}
                  infinite
                />
                <button onClick={slidePrev}>Prev</button>
                <button onClick={slideNext}>Next</button>
              </motion.div>
              <motion.ul variants={fadeInUp} className="portfolio-tags">
                {project.tags.map(tag => (
                  <li>{tag}</li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp}>{project.description}</motion.p>
              <motion.div variants={fadeInUp} className="portfolio-buttons">
                <div className="next-section-button">
                  <a href={project.live}>View Live</a>
                </div>
                <div className="next-section-button">
                  <a href={project.code}>Check Code</a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query MyQuery($aliceOne: String, $aliceTwo: String, $aliceThree: String) {
    aliceImageOne: file(relativePath: { regex: $aliceOne }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aliceImageTwo: file(relativePath: { regex: $aliceTwo }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aliceImageThree: file(relativePath: { regex: $aliceThree }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ProjectTemplate
