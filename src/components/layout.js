import React from "react"
import PropTypes from "prop-types"
import Nav from "./nav"
import Footer from "./footer"
import Styled from "styled-components"
import RamenBackground from "../images/ramen-wallpaper.jpg"

const LayoutDiv = Styled.div`
    background: 
        linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
        ),
        url(${RamenBackground}) fixed;
    background-size: cover;
    background-position: center center;
    background-color: black;
`

const Layout = ({ children }) => {
    return (
        <LayoutDiv>
            <Nav />
            <main>{children}</main>
            <Footer />
        </LayoutDiv>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout