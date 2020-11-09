import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Button from "../components/Button/button"
import Button2 from "../components/Button/button2"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import BlogBlock from "../components/Blog/Blog"
import Contact from "../components/Contact/contact"

// 異なるURLのページに遷移する際に用いる
import { Link as PageLink } from "gatsby"



import { IconContext } from "react-icons"

export default () => {


  return (
    <>
      <Layout>

        {/* トップページ部分 */}
        <Banner />


        {/* 二段目 */}
        <TextBlock
          id="about"
          title="STYLISH & LUXURY"
          paragraph="トレンドを求めるあなたへ"
          paragraph2="IL:MALEがあなたの印象を変えます"
        >
        </TextBlock>


        {/* 三段目BusinessParty */}
        <TextBlockImg
          id="perks"
          title="BUSINESS  /  PARTY"
          subtitle="輝きを放つBusiness / Partyスーツ"
        >
          <PageLink
            to="/price/"
            duration={500}
          >
            <Button label="Tell Me More" cta="LINEUP" />
          </PageLink>
        </TextBlockImg>


        {/* 四段目About */}
        <Packages
          title="About"
          para="より良い品をより安くするために、できる限りのことを行いました。"
        >
          <IconContext.Provider
            value={{
              color: "#7FFF00",
              size: "1.2em",
              style: { verticalAlign: "middle", marginRight: "5px" },
            }}
          >
            <Package title="ORDER">
              <ul>
                <li>当店は完全オーダー制です。</li>
                <li>当店は店舗は設けておらず、お客様の元にスタッフが訪問して採寸させていただきます。</li>
                <li>下記ボタンで納品までの流れを詳しくご説明いたします。</li>
              </ul>
              <PageLink
                to="order"
                duration={500}
              >
                <Button label="I want this" cta="MORE" />
              </PageLink>
            </Package>

            <Package title="CONCEPT">
              <ul>
                <li>採寸、製法における基本を忠実に守り、凡事徹底を貫く</li>
                <li>全てのお客様がカッコよくオーダースーツを着こなせる体験価値を提供する</li>
              </ul>
            </Package>

          </IconContext.Provider>
        </Packages>


        {/* 五段目Blog */}
        <BlogBlock
          id="perks"
          title="BLOG"
          subtitle="IL:MALEの最新記事を投稿しています"
        >
          <PageLink
            to="/blog/"
            duration={500}
          >
            <Button2 label="More" cta="More" />
          </PageLink>
        </BlogBlock>


        {/* contact-form */}
        <Contact
          id="contact"
          title="Contact"
          subtitle="必要事項を入力しSENDを押してください。３営業日以内に担当者が返信いたします。"
        />


      </Layout>
    </>
  )
}
