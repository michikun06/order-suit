import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const TextBlock = ({ title, paragraph, paragraph2, id }) => {

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
    },
    subTitle: {
      fontSize: "100%",
      lineHeight: "1.4em",
      fontWeight: "lighter",
      letterSpacing: "0.2em",
    }
  }



  return (
    <TextBlockWrapper id={id}>
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
          <h2 style={Styles.title}>{title}</h2>
          <p style={Styles.subTitle}>{paragraph}</p>
          <p style={Styles.subTitle}>{paragraph2}</p>
        </motion.div>
      </div>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.section`
  background: #fff;
  text-align: left;
  padding: 60px 20px;
  color:#000000;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 30px;
  }
`

export default TextBlock
