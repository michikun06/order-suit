import React from "react"
import styled from "styled-components"

import { Link as PageLink } from "gatsby"
import { motion } from "framer-motion"

const BlogBanner = ({ img, title, date, to }) => {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    }

    return (
        <PackageWrapper >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 1, delay: 1.3 }}
            >
                <PageLink
                    to={to}
                    duration={500}
                >
                    <div className="content">
                        <div className="blogBox">
                            <img src={img} className="img" alt="Blog画像" />
                            <p className="title">{title}</p>
                            <p className="date">{date}</p>
                        </div>
                    </div>
                </PageLink>
            </motion.div>
        </PackageWrapper>
    )
}

const PackageWrapper = styled.article`
  position: relative;
  z-index: 1;
  color: black;
  display: inline-block;
  width:50%;
  vertical-align: top;


  .content {
    background: #0000;
    padding: 0.8rem ;
    text-align : center;
  }


  .img{
      width:100%;
  }


  .title{
      width:100%;
      font-size: 13px;
      font-weight: bold;
  }


  .date{
      width:100%;
      color: #666666;
      font-size:12px;
  }


  a {
    text-decoration: none;
    text-transform: capitalize;
    color: black;
    transition: 0.3s;

    &.active {
        color: #e609b5;
    }
  }


&:hover {
    cursor: pointer;
    a {
        color: #e609b5;
        opacity: 0.7;
    }
    .content {
        opacity: 0.7;
    }
}


@media (min-width: 560px) {
    width:25%;
    margin-bottom: 0;
}


&.not-active {
    button {
        background: transparent;
        border: 1px solid #e609b5;
    }
}


&.active {
    order: 1;
    z-index: 3;

    @media (min-width: 560px) {
        order: 0;
        transform: scale(1.25);
    }

    .content {
        background: #001559;
    }

    &::before {
        top: -5px;
        right: 0px;
        bottom: -5px;
        left: 0px;
        background: linear-gradient(to right, #fc466b, #3f5efb);
        z-index: -1;
        transform: skew(3deg, 3deg);
        border-radius: 4px;
        position: absolute;
    }
}


`

export default BlogBanner
