import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"


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

  const controls = useAnimation()
  const [ref, inView] = useInView({
    // Percentage of item in view to trigger animation
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const Styles = {
    title: {
      fontSize: "200%",
      fontWeight: "bolder",
      letterSpacing: "0.2em",
      marginBottom: "3rem",
      marginTop: "3rem"
    },
    subTitle: {
      fontSize: "100%",
      lineHeight: "1.4em",
      opacity: "0.90",
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
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 35 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
      >
        <TextBlockImgWrapper>
          <div className="content-container">
            <h2 style={Styles.title}>{title}</h2>
            <p style={Styles.subTitle}>{subtitle}</p>
            {children}
          </div>
        </TextBlockImgWrapper>
      </motion.div>

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
