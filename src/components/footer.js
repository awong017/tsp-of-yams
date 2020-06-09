import React from "react"
import Styled from "styled-components"

const FooterDiv = Styled.div`
  footer {
    border: 2px solid white;
    text-align: center;
    color: white;

    a {
      color: white;

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
