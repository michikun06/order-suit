import React from "react"
import styled from "styled-components"

const PriceContent = ({ title, description, image }) => {

  return (
    <PriceContentWrapper >
      <div className="content-container">
        <h2 className="title">{title}</h2>

        <div className="media">

          <img className="media_image" src={image} width="40%" alt="予約の画像" />

          <div className="media_summary">
            <p className="madia_text">{description}</p>
          </div>
        </div>

      </div>
    </PriceContentWrapper>
  )
}

const PriceContentWrapper = styled.section`
  padding: 30px 20px ;
  color:black;
  text-align: left;
  background-color: #fff;

  .content-container{
    margin: 0 auto;
    max-width: 100%;
    display: block; 
  }

  .title{
    text-align: center;
    font-size: 0.9em;
    font-weight: bolder;
    letter-spacing: 0.15em;
    border-bottom: solid 1px gray;
  }

  .media {
    background: #FFF;
    padding: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .media_image {
    float: left;
  }
   
  .media_summary {
    overflow: hidden;
    padding-left: 10px;
    margin: 0 auto;
  }

  .madia_text{
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    display: inline-block;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    padding: 40px 30px;
    
    .content-container{
      max-width: 70%;
    }

    .title{
      font-size: 1.7em;
      font-weight: bolder;
      letter-spacing: 0.15em;
    }

    .media {
      background: #FFF;
      padding: 40px;
      overflow: hidden;
    }

    .madia_text{
      font-size: 1.0rem;
      padding-left: 1rem;
    }

  }
`

export default PriceContent
