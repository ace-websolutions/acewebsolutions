import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { fadeInUp, springTransition, stagger } from "../animation/animation"
import AliceCarousel from "react-alice-carousel"
import useSetArrows from "../hooks/useSetArrows"
import { projButtonsVar } from "../animation/projectTemplate"

const ProjectTemplate = ({ pageContext, data }) => {
  const project = pageContext
  useSetArrows(`${project.prev}`, `${project.next}`)

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
                  disableButtonsControls
                  infinite
                  autoplay
                  autoPlayControls
                  autoPlayStrategy="none"
                  autoPlayInterval={2500}
                  animationDuration={1000}
                />
                <motion.ul className="portfolio-tags" variants={stagger}>
                  {project.tags.map(tag => (
                    <motion.li
                      key={tag}
                      variants={fadeInUp}
                      whileHover={{
                        x: "-15%",
                      }}
                      transition={springTransition}
                    >
                      {tag}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={stagger} className="portfolio-info">
                  <motion.p variants={fadeInUp}>{project.description}</motion.p>
                  <motion.div variants={fadeInUp} className="portfolio-buttons">
                    <motion.div
                      className="next-section-button"
                      variants={projButtonsVar}
                      whileHover="hover"
                      whileTap="tap"
                      transition={springTransition}
                    >
                      <a href={project.live}>View Live</a>
                    </motion.div>
                    <motion.div
                      className="next-section-button"
                      variants={projButtonsVar}
                      whileHover="hover"
                      whileTap="tap"
                      transition={springTransition}
                    >
                      <a href={project.code}>Check Code</a>
                    </motion.div>
                    <motion.div
                      className="next-section-button"
                      variants={projButtonsVar}
                      whileHover="hover"
                      whileTap="tap"
                      transition={springTransition}
                    >
                      <Link to="/portfolio/">Back to Portfolio</Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
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
