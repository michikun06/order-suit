import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import { motion } from "framer-motion"
import LogoAnimal from "../../images/LogoAnimal.svg"
import { Link } from 'gatsby';

const Banner = () => {
  const data = useStaticQuery(graphql`
     query {
      file(relativePath: { eq: "mizutani4mobile.png" }) {
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
      fontSize: "85%",
      lineHeight: "1.8em",
      opacity: "0.8"
    },
    reserveButton: {
      opacity: "0.6"
    }
  }

  return (
    <BannerWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="hero-content">

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
          >
            <img style={Styles.brandLogo} src={LogoAnimal} alt="IL:MALE Logo" />
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
          >
            <p style={Styles.subTitle}>6000種類の世界最高峰の生地の中から<br />あなたにとっての、あなただけの最高の1着をお作りします。</p>
          </motion.div>

          <Link to="/booking/" duration={500}>
            <Button
              style={Styles.reserveButton}
              cta="訪問採寸を予約"
              label="予約画面について"
              anchor={true}
              href="linking"
            />
          </Link>

        </div>
      </BackgroundImage>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;
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

      img {
      width: 200px;

      @media (min-width: 768px) {
        width: 350px;
      }

      @media (min-width: 1200px) {
        width: 400px;
      }
    }


      div {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-size: 1.15rem;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (min-width: 768px) {
          font-size: 1.35rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        max-width: 800px;

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

export default Banner
