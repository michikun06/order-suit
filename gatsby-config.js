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
    description: "鹿児島県鹿児島市の出張訪問をメインにした安いオーダースーツ専門店#IL:MALE",
    author: "Michihiro Kawaji",
    image: "/About背景.png",
    siteUrl: "https://ilmale.info/",
    instagramUsername: "@il_mare1021",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      }
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "1646f158-044d-46a0-81d2-68eed7353c2d",
        serviceId: "ilmale",
        apis: [
          {
            endpoint: "articles",
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/tag/*"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ilmale.info/`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ilmale.info/',
        sitemap: 'https://ilmale.info/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}


// process.env.GATSBY_MICRO_CMS_API_KEY