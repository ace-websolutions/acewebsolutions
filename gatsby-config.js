module.exports = {
  siteMetadata: {
    title: `Ace Web Solutions`,
    description: `About the business, services, portfolio, and contact methods.`,
    author: `AceWebSolutions`,
    keywords: ['webdevelopment','web', 'portfolio', 'acewebsolutions', 'website', 'freelance', 'ace' ]
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
  ],
}
