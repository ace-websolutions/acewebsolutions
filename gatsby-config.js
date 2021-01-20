module.exports = {
  siteMetadata: {
    title: `Ace Web Solutions`,
    description: `About the business, services, portfolio, and contact methods.`,
    author: `AceWebSolutions`,
    keywords: [
      "webdevelopment",
      "web",
      "portfolio",
      "acewebsolutions",
      "website",
      "freelance",
      "ace",
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /images/,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `AceWeb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4361ee`,
        display: `minimal-ui`,
        icon: `src/images/favicon/Ace.cloud_c.png`,
      },
    },
  ],
}
