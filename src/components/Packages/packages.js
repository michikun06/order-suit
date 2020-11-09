import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Packages = ({ title, para, children }) => {


  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "About背景.png" }) {
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
      color: "#fff",
      fontSize: "250%",
      fontWeight: "bolder",
      letterSpacing: "0.2em",
    },
    subTitle: {
      fontSize: "100%",
      lineHeight: "1.4em",
      fontWeight: "lighter",
      letterSpacing: "0.2em",
      opacity: "0.9",
      marginTop: "2rem"
    }
  }

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
        <PackagesWrapper>
          <div className="text-area">
            <h2 style={Styles.title}>{title}</h2>
            <p style={Styles.subTitle}>{para}</p>
          </div>
          <div className="flex-container">{children}</div>
        </PackagesWrapper>
      </motion.div>
    </BackgroundImage>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px;
  text-align: center;
  background-image: url("../../images/About背景.png");

  .text-area {
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 1200px) {
      max-width: 650px;
    }
  }

  .flex-container {
    flex-direction: column-reverse;
    padding-top: 80px;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`

export default Packages
