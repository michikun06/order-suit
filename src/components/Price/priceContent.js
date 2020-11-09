import React from "react"
import styled from "styled-components"

const PriceContent = ({ title, image }) => {

  return (
    <PriceContentWrapper >
      <div className="content-container">
        <h2 className="title">{title}</h2>

        <div className="media">
          <img className="media_image" src={image} width="41%" alt="予約の画像" />

          <div className="media_summary">
            <div className="madia_text">国産生地 : ￥39,800+tax〜</div>
            <div className="madia_text">イタリア有名ブランド生地 : ￥78,000+tax〜</div>
            <div className="madia_text">イタリア有名ブランド 最高級生地 : ￥128,000+tax〜</div>
          </div>
        </div>

      </div>
    </PriceContentWrapper>
  )
}

const PriceContentWrapper = styled.section`
  padding: 15px 5px ;
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
    transition-duration: .3s;
  }

  .media_image:hover {
    cursor: pointer;
    color: #e609b5;
    opacity: 0.9;
    transition-duration:0.6s;
    transform: scale(1.02);
}
   
  .media_summary {
    overflow: hidden;
    padding-left: 25px;
    margin: 0 auto;
  }

  .madia_text{
    font-size: 0.45rem;
    letter-spacing: 0.15em;
    vertical-align: middle;
    margin: 15px 0;
    line-height: 18px;
  }

  @media (min-width: 768px) {
    padding: 20px 10px;
    
    .content-container{
      max-width: 90%;
    }

    .title{
      font-size: 1.5em;
      font-weight: bolder;
      letter-spacing: 0.15em;
    }

    .media {
      background: #FFF;
      padding: 20px;
      overflow: hidden;
    }

    .madia_text{
      font-size: 0.75rem;
      padding-left: 1rem;
    }

  }

  @media (min-width: 1024px) {
    padding: 40px 30px;
    
    .content-container{
      max-width: 80%;
    }

    .title{
      font-size: 1.7em;
      font-weight: bolder;
      letter-spacing: 0.18em;
    }

    .media {
      background: #FFF;
      padding: 30px 0 20px 30px;
      overflow: hidden;
    }

    .media_image {
      width: 40%;
    }

    .media_summary {
      padding-left: 0px;
      margin-left: 6%;
    }

    .madia_text{
      padding-left: 0;
      font-size: 0.95rem;
      letter-spacing: 0.15em;
      margin: 45px 0;
    }

  }
`

export default PriceContent
