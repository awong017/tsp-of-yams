import React from "react"
import Styled from "styled-components"

const FooterDiv = Styled.div`
  footer {
    text-align: center;
    color: white;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        color: purple;
        text-decoration: underline;
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterDiv>
       <footer>
          © {new Date().getFullYear()} Tsp of Yams, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.strapi.io">Strapi</a>
      </footer>
    </FooterDiv>
   
  )
}

export default Footer
