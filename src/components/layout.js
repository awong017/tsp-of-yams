import React from "react"
import PropTypes from "prop-types"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.strapi.io">Strapi</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
