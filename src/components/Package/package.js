import React from "react"
import styled from "styled-components"

const Package = ({ title, children, active }) => {

  const Styles = {
    title: {
      color: "#fff",
      letterSpacing: "0.1em",
    }
  }

  return (
    <PackageWrapper className={active ? "active" : "not-active"}>
      <div className="content">
        <h2 style={Styles.title}>{title}</h2>
        {children}
      </div>
    </PackageWrapper>
  )
}

const PackageWrapper = styled.article`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 350px;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    width: calc(100% / 3);
    margin-bottom: 0;
    height: 500px;
  }

  .content {
    background: #051342;
    color: #fff;
    text-align: center;
    padding: 1.5rem 2.5rem 1.5rem 4rem;
    border-radius: 4px;
    box-shadow: 0px 0px 22px 7px rgba(0, 0, 0, 0.25);

    h2 {
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      padding-left: 0;
      margin: 2.5rem 0;
      text-align: left;

      li {
        line-height: 2rem;
        padding-left: 0.5rem;
        margin-bottom: 1rem;
        opacity: 0.75;
      }

      .linethrough {
        text-decoration: line-through;
        opacity: 0.25;
      }
    }

    @media (min-width: 992px) {
    height: 500px;
    }
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

    @media (min-width: 992px) {
      order: 0;
      transform: scale(1.25);
    }

    .content {
      background: #001559;
    }

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      right: 0px;
      bottom: -5px;
      left: 0px;
      background: linear-gradient(to right, #fc466b, #3f5efb);
      z-index: -1;
      transform: skew(3deg, 3deg);
      border-radius: 4px;
    }
  }
`

export default Package
