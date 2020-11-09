import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import OrderTop from "../components/Order/orderTop"
import BlogBanner from "../components/Blog/blogBanner"

// ブログ一覧用画像import
import image1 from "../images/blog/image1.jpeg"


// ブログ記事一覧ページ
export default () => {

    return (
        <Layout>

            {/* トップバナー */}
            <OrderTop
                id="Top"
                title="Blog"
                paragraph="IL:MALEブログ一覧"
            />
            <BlogWrapper>
                <div className="box">
                    <BlogBanner
                        img={image1}
                        title="IL:MALEについて"
                        date="2020.10.31"
                        to="/"
                    />

                    {/* <BlogBanner
                        img={image1}
                        title="IL:MALEについて"
                        date="2020.10.31"
                        to="ここにリンクをいれる"
                    />

                    <BlogBanner
                        img={image1}
                        title="IL:MALEについて"
                        date="2020.10.31"
                        to="ここにリンクをいれる"
                    />

                    <BlogBanner
                        img={image1}
                        title="IL:MALEについて"
                        date="2020.10.31"
                        to="ここにリンクをいれる"
                    /> */}

                </div>
            </BlogWrapper>
        </Layout>
    )
}


const BlogWrapper = styled.section`
    background: #fff;

    color: black;
    padding: 30px 20px;
    height: 400px;

    @media (min-width: 600px) {
        height: 600px;
    }

    @media (min-width: 992px) {
        padding: 50px 150px;
        height: 500px;
        
        .box{
            width:800px;
            margin: 0 auto;
        }
    }
`

