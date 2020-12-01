import React from "react"
import { graphql } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"

const ArticlePost = props => {
    const post = props.data.microcmsArticles
    return (
        <Layout>
            <BlogContent>
                <div className="body">
                    <h2 className="title">{post.title}</h2>
                    <h3
                        className="title_origin"
                        dangerouslySetInnerHTML={{
                            __html: `${post.title_origin}`,
                        }}
                    ></h3>
                    <br />
                    {/* <img
                        src={post.pict.url}
                        width={200}
                        height={200}
                        alt="pict画像"
                    /> */}
                    <p
                        className="contents"
                        dangerouslySetInnerHTML={{
                            __html: `${post.body}`,
                        }}
                    ></p>
                </div>
            </BlogContent>
        </Layout>
    )
}

export default ArticlePost

export const query = graphql`
    query($id: String!) {
        microcmsArticles(id: { eq: $id }) {
            title
            title_origin
            body
            pict {
                url
            }
            body
        }
    }
`

const BlogContent = styled.section`
    background: #fff;
    color: black;
    margin: 87px 0 0;
    padding: 100px 50px;
    display: inline-block;
    width:100%;
    vertical-align: top;
    padding: 30px 30px;

    .title{
        text-align: center;
    }

    .title_origin{
        text-align: center;
    }

    .contents img{
        width :100%;
    }

    @media (min-width: 600px) {
        padding:50px 200px;
    }
`
