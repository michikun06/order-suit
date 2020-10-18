import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./style.css"


const BookingForm = ({ title, para1, para2 }) => {

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
      marginBootom: "3rem"
    },
    subTitle: {
      fontSize: "80% ",
      lineHeight: "1.4em",
      fontWeight: "lighter",
      letterSpacing: "0.2em",
      opacity: "0.7",
      marginTop: "0.2rem"
    }
  }


  return (
    <BackgroundImage
      id="スーツ"
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
    >
      <PackagesWrapper>
        <div className="text-area">
          <h2 style={Styles.title}>{title}</h2>
          <p style={Styles.subTitle}>{para1}</p>
          <p style={Styles.subTitle}>{para2}</p>
        </div>
        <div className="Form">
          <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSetQKWrQhyk_Kv7cp3Ob4rOHtiCRMdpZn9Gn1RPq3Ao_-Hgjg/formResponse">

            {/* Name */}
            <div className="Form-Item">
              <p className="Form-Item-Label">
                <span className="Form-Item-Label-Required">必須</span>
                <label htmlFor="name">お名前</label>
              </p>
              <input id="name" className="Form-Item-Input" type="text" name="entry.2029298766" />
            </div>


            {/* 電話番号 */}
            <div className="Form-Item">
              <p className="Form-Item-Label">
                <span className="Form-Item-Label-Required">必須</span>
                <label htmlFor="tel">電話番号</label>
              </p>
              <input id="tel" className="Form-Item-Input" type="text" name="entry.2126133452" placeholder="ハイフンなしで入力してください" />
            </div>


            {/* Location */}
            <div className="Form-Item">
              <p className="Form-Item-Label">
                <span className="Form-Item-Label-Required">必須</span>
                <label htmlFor="location">訪問先住所</label>
              </p>
              <input id="location" className="Form-Item-Input" type="text" name="entry.1559009321" placeholder="遠方の場合は応相談" />
            </div>


            {/* 日時 */}
            <div className="Form-Item">
              <p className="Form-Item-Label">
                <span className="Form-Item-Label-Required">必須</span>
                <label htmlFor="date">ご予約日時</label>
              </p>
              <input id="date" className="Form-Item-Input" type="text" name="entry.1424445871" placeholder="2020年1月1日午後3時" />
            </div>

            {/* 購入経験 */}
            <div className="Form-Item">
              <p className="Form-Item-Label">
                <label htmlFor="expe">オーダースーツ購入経験</label>
              </p>
              <input id="expe" className="Form-Item-Input" type="text" name="entry.484459310" placeholder="あり or なし" />
            </div>


            {/* 備考 */}
            <div className="Form-Item">
              <p className="Form-Item-Label isMsg">
                <label htmlFor="other">備考</label>
              </p>
              <textarea id="other" name="entry.886996267" className="Form-Item-Textarea" placeholder="希望、連絡事項等ある方はご入力ください"></textarea>
            </div>


            {/* Submit Button */}
            <button className="Form-Btn" type="submit">送信</button>
          </form>
        </div>
      </PackagesWrapper>
    </BackgroundImage>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px;
  text-align: center;

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
      flex - direction: row;
      justify-content: space-evenly;
    }
  }
`

export default BookingForm

