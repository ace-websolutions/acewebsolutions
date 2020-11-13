import React from 'react'
import SEO from "../components/seo"
import Layout from "../components/layout"

const ProjectTemplate = ({ pageContext }) => {
    const project = pageContext;
    return (
        <Layout>
            <SEO title={project.title} />
            <h1>{project.title}</h1>
            <ul>
            {project.tags.map(tag => (
                <li>
                    {tag}
                </li>
            ))}
            </ul>
            <p>{project.description}</p>
            <a href={project.live}>live</a>
            <a href={project.code}>code</a>

        </Layout>
    )
}

export default ProjectTemplate
