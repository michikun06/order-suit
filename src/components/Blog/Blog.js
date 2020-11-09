import React from "react"
import styled from "styled-components"
import image from "../../images/orderStep2.png"

const BlogBlock = ({ title, children, subtitle, id }) => {

  const Styles = {
    title: {
      fontSize: "200%",
      fontWeight: "bolder",
      letterSpacing: "0.2em",
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
    <BlogWrapper>
      <div className="content-container blog-box">
        <div className="content">
          <img className="image" src={image} width="80%" alt="予約の画像" />
        </div>
      </div>
      <div className="content-container">
        <h2 className="title" style={Styles.title}>{title}</h2>
        <p style={Styles.subTitle}>{subtitle}</p>
        {children}
      </div>
    </BlogWrapper>
  )
}

const BlogWrapper = styled.section`
  background: #fff;
  text-align: center;
  padding: 80px 50px;
  color: black;

  .image{

    box-shadow: 0px 0px 22px 10px rgba(0, 0, 0, 0.25);
  }

  .blog-box{
      display: none;
  }

  .box-title{
      padding: 0 1.5rem;
  }


  @media (min-width: 768px) {
      display: flex;
      padding: 50px 150px;
      height: 450px;

      .title{
          margin-top:5rem;
      }
      
      .blog-box{
      display: unset;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .content-container {
    max-width: 500px;
    letter-spacing: 0.3rem;

    @media (min-width: 768px) {
      max-width: 650px;
    }
  }

  .content {
    background: #fff;
    width: 80%;
    margin: 30px auto;
    
  }
`

export default BlogBlock
