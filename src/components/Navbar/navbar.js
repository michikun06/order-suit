import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../../images/logo.svg"

//　同じURLの中で移動する際に用いる
import { Link } from "react-scroll"

// 異なるURLのページに遷移する際に用いる
import { Link as PageLink } from "gatsby"

import { FaInstagramSquare } from "react-icons/fa"


const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="masthead flex-container">
        <PageLink
          to="/"
          duration={500}
          offset={-50}
        >
          <img src={Logo} alt="IL:MALE Logo" />
        </PageLink>

        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >

        {/* ホームへ */}
        <li>
          <PageLink
            to="/"
            duration={500}
            offset={-50}
          >
            Home
          </PageLink>
        </li>


        {/* reserveへ */}
        <li>
          <PageLink
            to="/booking"
            duration={500}
            offset={-50}
          >
            Reserve
          </PageLink>
        </li>


        {/* Lineup */}
        <li>
          <PageLink
            to="/price"
            duration={500}
            offset={-50}
          >
            Lineup
          </PageLink>
        </li>


        {/* orderへ */}
        <li>
          <PageLink
            to="/order"
            duration={500}
            offset={-50}
          >
            Order
          </PageLink>
        </li>


        {/* contactへ */}
        <li>
          <Link
            to="contact"
            duration={500}
            offset={-50}
            smooth={true}
          >
            Contact
          </Link>
        </li>



        <li>
          <a
            href="https://www.instagram.com/il_mare1021/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FaInstagramSquare />}
          </a>
        </li>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  padding: 1rem;
  left: 0;
  right: 0;
  display: flex;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 3rem;
  }

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 120px;

      @media (min-width: 768px) {
        width: 150px;
      }

      @media (min-width: 1200px) {
        width: 180px;
      }
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.10rem;
      font-weight: 200;
      margin-right: 2rem;
      padding: 0.75rem 0;
      opacity: 0.7;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        transition: 0.3s;

        &.active {
          color: #e609b5;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #e609b5;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`

export default Navbar
