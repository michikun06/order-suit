import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import OrderTop from "../components/Order/orderTop"

import { Link as PageLink } from "gatsby"


// ブログ記事一覧ページ
export default ({ data }) => (
    <Layout>

        {/* トップバナー */}
        <OrderTop
            id="Top"
            title="Blog"
            paragraph="IL:MALEブログ一覧"
        />

        <BlogWrapper>
            <div className="box">

                {data.allMicrocmsArticles.edges.map(edge => {
                    const articles = edge.node
                    const category = edge.node.category[0].name

                    if (category === 'patients') {
                        return (
                            <React.Fragment key={articles.id}>
                                <PageLink to={`/articles/${articles.id}`}>
                                    <div className="content">
                                        <img
                                            src={articles.pict.url}
                                            className="img"
                                            alt="pict画像"
                                        />
                                        <h2 className="title">{articles.title}</h2>
                                        <p className="date">{articles.date}</p>
                                    </div>
                                </PageLink>


                                {/* <div>
                                    {articles.category.map(category => (
                                        <React.Fragment key={category.id}>
                                            <span>カテゴリー：{category.name}</span>
                                        </React.Fragment>
                                    ))}
                                </div> */}
                            </React.Fragment>
                        )
                    } else {
                        return null
                    }
                })}



            </div>
        </BlogWrapper>
    </Layout>
)

export const query = graphql`
    {
        allMicrocmsArticles(
        sort: { fields: [createdAt], order: DESC }
        ) {
            edges {
                node {
                    id
                    title
                    date(formatString: "YYYY年MM月D日")
                    title_origin
                    category {
                        id
                        name
                    }
                    pict {
                        url
                    }
                    body
                }
            }
        }
    }      
`


const BlogWrapper = styled.section`
    background: #fff;
    color: black;
    padding: 30px 0;
    height: 400px;
    z-index: 1;
    display: inline-block;
    width:100%;
    vertical-align: top;
    text-align : center;

    .content {
        background: #0000;
        padding: 0.8rem ;
        width: 40%;
        margin: 0 auto;
        display: inline-block;
    }

    .title{
        width:90%;
        font-size: 13px;
        font-weight: bold;
        margin : 10px;
        color: black;
    }

    .date{
        width:100%;
        color: #666666;
        font-size:12px;
    }

    .img{
        width:100%;
    }

    .content :hover {
        cursor: pointer;
        opacity: 0.7;
    }

    @media (min-width: 600px) {
        padding: 50px 50px;
        height: 600px;
        text-align : left;

        .content {
            background: #0000;
            padding: 1.2rem ;
            width: 25%;
        }

        .title{
            text-align: center;
            width: 90%;
            font-size: 13px;
        }
    
        .date{
            text-align : center;
            width:100%;
            color: #666666;
            font-size:12px;
        }
    }

    @media (min-width: 992px) {
        padding: 50px 100px;
        height: 500px;
        
        .box{
            margin: 0 auto;
        }

        .title{
            font-size: 15px;
        }

        .date{
            font-size:14px;
        }
    }
`
