/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "鹿児島オーダースーツ",
    titleTemplate: "%s | #IL:MALE",
    description: "鹿児島県鹿児島市の安いオーダースーツ専門店#IL:MALE",
    author: "Michihiro Kawaji",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://il-male.netlify.app/",
    instagramUsername: "@il_mare1021",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://il-male.netlify.app/`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
