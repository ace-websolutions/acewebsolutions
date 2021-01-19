const path = require(`path`)

exports.createPages = ({ actions: { createPage } }) => {
  const projects = require(`./src/context/projects.json`)
  const projectTemplate = path.resolve(`./src/template/projectTemplate.js`)

  projects.forEach(project => {
    createPage({
      path: `/projects/${project.link}`,
      component: projectTemplate,
      context: {
        ...project,
        aliceOne: `/thumbnail\/${project.link}`,
        aliceTwo: `/thumbnail\/${project.link}`,
        aliceThree: `/thumbnail\/${project.link}`,
      },
    })
  })
}
