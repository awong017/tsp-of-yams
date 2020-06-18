import React from "react"
import Styled from "styled-components"

const FooterDiv = Styled.div`
  footer {
    text-align: center;
    color: white;

    a {
      color: purple;

      &:hover {
        color: purple;
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterDiv>
       <footer>
      © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.strapi.io">Strapi</a>
      </footer>
    </FooterDiv>
   
  )
}

export default Footer
