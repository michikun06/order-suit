import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const OrderTop = ({ title, paragraph, id }) => {
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
            <OrderTopWrapper id={id}>
                <div className="content-container">
                    <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 25 },
                        }}
                        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
                    >
                        <h2 className="title">{title}</h2>
                        <p className="subTitle">{paragraph}</p>
                    </motion.div>
                </div>
            </OrderTopWrapper>
        </BackgroundImage>
    )
}

const OrderTopWrapper = styled.section`
  padding: 60px 20px;
  color:#fff;
  text-align: center;

  .title{
      font-size: 1.7em;
      font-weight: bolder;
      letter-spacing: 0.15em;
  }
  
  .subTitle{
      font-size: 0.4em;
      line-height: 1.4em;
      font-weight: lighter;
      letter-spacing: 0.15em;
  }

  @media (min-width: 768px) {
    padding: 80px 30px;

    .title{
      font-size: 2.5em;
      font-weight: bolder;
      letter-spacing: 0.15em;
    }

   .subTitle{
      font-size: 0.8em;
    }

  }
`

export default OrderTop
