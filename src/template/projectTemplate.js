import React, { useEffect, useContext } from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "../animation/animation"
import AliceCarousel from "react-alice-carousel"
import { PageContext } from "../context/pagecontext"

const ProjectTemplate = ({ pageContext, data }) => {
  const project = pageContext
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    setLeftPage(project.prev)
    setRightPage(project.next)
  }, [setLeftPage, setRightPage])

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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5,
                      }}
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
                      whileHover={{
                        y: -4,
                        skewX: -8,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5,
                      }}
                    >
                      <a href={project.live}>View Live</a>
                    </motion.div>
                    <motion.div
                      className="next-section-button"
                      whileHover={{
                        y: -4,
                        skewX: -8,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5,
                      }}
                    >
                      <a href={project.code}>Check Code</a>
                    </motion.div>
                    <motion.div
                      className="next-section-button"
                      whileHover={{
                        y: -4,
                        skewX: -8,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5,
                      }}
                    >
                      <Link to="/portfolio">Back to Portfolio</Link>
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
