import React from "react"
import styled from "styled-components"
import MainFooter from "./mainFooter"


const Footer = () => {
  return (
    <>
      <MainFooter />
      <FooterWrapper>
        <div className="credit">
          Copyright © IL：MALE All rights reserved.
      </div>
      </FooterWrapper>
    </>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 20px 30px;
  text-align: center;

  .credit {
    font-size: 0.85rem;
    margin: 0.75rem;
  }

`

export default Footer
