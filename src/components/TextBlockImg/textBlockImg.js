import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const TextBlockImg = ({ title, children, subtitle, id }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "suit-gosei2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const Styles = {
    title: {
      fontSize: "200%",
      fontWeight: "bolder",
      letterSpacing: "0.2em",
      marginBottom: "3rem",
      marginTop: "3rem"
    },
    subTitle: {
      fontSize: "80%",
      lineHeight: "1.4em",
      opacity: "0.7",
      marginBottom: "3rem"
    },
    reserveButton: {
      opacity: "0.6",
      marginBottom: "3rem"
    }
  }


  return (
    <BackgroundImage
      id="perks"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <TextBlockImgWrapper>
        <div className="content-container">
          <h2 style={Styles.title}>{title}</h2>
          <p style={Styles.subTitle}>{subtitle}</p>
          {children}
        </div>
      </TextBlockImgWrapper>
    </BackgroundImage>
  )
}

const TextBlockImgWrapper = styled.section`
  text-align: center;
  padding: 100px 30px 140px 30px;
  color: #fff;


  .content-container {
    max-width: 500px;
    letter-spacing: 0.3rem;

    @media (min-width: 768px) {
      max-width: 650px;
    }

    @media (min-width: 1200px) {
      max-width: 900px;
    }
  }
`

export default TextBlockImg
