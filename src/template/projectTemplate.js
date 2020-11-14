import React from 'react'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animation/animation'

const ProjectTemplate = ({ pageContext }) => {
    const project = pageContext;
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
                        <Img backgroundColor />
                    </motion.div>
                    <motion.ul variants={fadeInUp} className="portfolio-tags">
                        {project.tags.map(tag => (
                                <li>
                                    {tag}
                                </li>
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

export default ProjectTemplate
