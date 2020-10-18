import React from "react"
import styled from "styled-components"

const OrderContent = ({ title, description, description2, image }) => {

  return (
    <OrderTopWrapper >
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{description}</p>
        <p className="subTitle2">{description2}</p>
        <img className="image" src={image} width="80%" alt="予約の画像" />
      </div>
    </OrderTopWrapper>
  )
}

const OrderTopWrapper = styled.section`
  padding: 15px 20px ;
  color:black;
  text-align: center;
  background-color: #fff;

  .title{
      font-size: 1.1em;
      font-weight: bolder;
      letter-spacing: 0.15em;
      border-bottom: solid 1px #191970;
  }
  
  .subTitle{
      font-size: 0.5em;
      line-height: 1.5rem;
      font-weight: lighter;
      letter-spacing: 0.15em;
      padding: 1rem;
      margin-bottom: 0;
  }
  
  .subTitle2{
    padding: 0 0 1rem;
    font-size: 0.6em;
    margin-top: 0;
  }

  .image{
    text-align: left;
  }

  @media (min-width: 768px) {
    padding: 30px 30px;

    .title{
      font-size: 1.7em;
      font-weight: bolder;
      letter-spacing: 0.15em;
    }

   .subTitle{
      font-size: 0.8em;
    }

  }
`

export default OrderContent
