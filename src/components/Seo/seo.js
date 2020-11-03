import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import OPG from "../../images/OPG.jpeg"

const SEO = ({ title, description, lang, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: siteUrl
            defaultImage: image
            instagramUsername
          }
        }
      }    
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    instagramUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  const imageSrc = OPG

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={imageSrc} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={imageSrc} />}
      <meta name="instagram:card" content="summary_large_image" />
      {instagramUsername && (
        <meta name="instagram:creator" content={instagramUsername} />
      )}
      {seo.title && <meta name="instagram:title" content={seo.title} />}
      {seo.description && (
        <meta name="instagram:description" content={seo.description} />
      )}
      {seo.image && <meta name="instagram:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `ja`,
  article: false,
}
