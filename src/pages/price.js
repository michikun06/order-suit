import React from "react"
import Layout from "../components/layout"
// import Button from "../components/Button/button"
import PriceTop from "../components/Price/priceTop"
import PriceContent from "../components/Price/priceContent"



import Image from "../images/About背景.png"
import Image1 from "../images/lineup1.jpg"


export default () => {

    const Styles = {
        contents: {
            padding: "40px 0 40px",
            backgroundColor: "#fff",
        }
    }

    return (
        <>
            <Layout>

                {/* 二段目 */}
                <PriceTop
                    id="Top"
                    title="Lineup"
                    paragraph="品揃えと価格"
                />

                <div style={Styles.contents}>
                    <PriceContent
                        title="オーダースーツ"
                        description="ジャケット、パンツ、シャツのセットで￥39,800〜"
                        image={Image1}
                    />

                    <PriceContent
                        title="オーダーシャツ"
                        description="税込み￥8,900〜"
                        image={Image}
                    />

                    <PriceContent
                        title="オーダーシューズ"
                        description="税込み￥15,900〜"
                        image={Image}
                    />

                    <PriceContent
                        title="その他小物"
                        description="当ブランドのバッグ、Tシャツ等を販売しております。"
                        image={Image}
                    />
                </div>


            </Layout>
        </>
    )
}


