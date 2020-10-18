import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"

const MainFooter = () => {
  const data = useStaticQuery(graphql`
     query {
      file(relativePath: { eq: "footerImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  const Styles = {
    brandLogo: {
      opacity: "1"
    },
    subTitle: {
      fontSize: "60%",
      lineHeight: "1.8em",
      opacity: "0.6"
    }
  }

  return (
    <MainFooterWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="hero-content">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            <div style={Styles.subTitle}>鹿児島県鹿児島市<br />電話受付時間 / 8:00 〜 22:00 事前予約制</div>
          </motion.div>
        </div>
      </BackgroundImage>
    </MainFooterWrapper>
  )
}

const MainFooterWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 30vh;
    color: black;
    }

    .hero-content {
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: 768px) {
        max-width: 650px;
      }



      div {
        margin-top: 10vh;
        line-height: 1.2;
        font-size: 1.15rem;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 767px) {
           margin-bottom: 0;
        }

        @media (min-width: 768px) {
          font-size: 1.35rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      @media (min-width: 768px) {
        // max-width: 800px;

        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`

export default MainFooter
