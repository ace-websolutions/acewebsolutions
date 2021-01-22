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
        aliceZero: `/thumbnail\/${project.link.slice(0, -1)}.png/`,
        aliceOne: `/projects\/${project.link.slice(0, -1)}\/one.png/`,
        aliceTwo: `/projects\/${project.link.slice(0, -1)}\/two.png/`,
        aliceThree: `/projects\/${project.link.slice(0, -1)}\/three.png/`,
      },
    })
  })
}
