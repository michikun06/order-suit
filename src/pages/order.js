import React from "react"
import Layout from "../components/layout"
// import Button from "../components/Button/button"
import OrderTop from "../components/Order/orderTop"
import OrderContent from "../components/Order/orderContent"


import Image1 from "../images/予約1.png"
import Image2 from "../images/orderStep2.png"
import Image3 from "../images/orderStep3.png"


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
                <OrderTop
                    id="Top"
                    title="How to order"
                    paragraph="納品までの流れ・出張採寸"
                />

                <div style={Styles.contents}>
                    <OrderContent
                        title="Step①　ご予約"
                        description="当サイトのトップページ（左画像）の「訪問採寸を予約」より、予約ページへ移動してください。その後　予約ページにて必須項目を記入してから「送信」ボタンを入力してください。"
                        image={Image1}
                    />
                    <OrderContent
                        title="Step②　出張訪問"
                        description="お客様の入力先した日時、住所にスタッフが訪問いたします。主な流れは、カウンセリング　→　生地、デザイン選び　→　採寸　→　お支払いとなっております。当店はハイブリッド製法を用いており、カウンセリング時にお客様の身長と体重をお伺いすることがございますので、正確な値をご準備ください。"
                        description2="※ お支払いは現金、または振り込みとなっております。"
                        image={Image2}
                    />
                    <OrderContent
                        title="Step③　納品"
                        description="約１ヶ月半後に納品となります。代表の水谷より、大切に手渡しをさせていただきます。"
                        image={Image3}
                    />
                </div>
            </Layout>
        </>
    )
}


