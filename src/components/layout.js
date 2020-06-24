import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'
import Footer from './footer'
import Styled from 'styled-components'

const LayoutDiv = Styled.div`
    .background {
        width: 100%;
        height: 500px;
    }
`

const Layout = ({ children} ) => {
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