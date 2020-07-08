import React from "react"
import Styled from "styled-components"
import Instagram48 from "../images/instagram48.png"

const FooterDiv = Styled.div`
  .icon {
    margin-bottom: 8px;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    text-align: center; 
  }

  footer {
    text-align: center;
    color: #AAAAAA;

    a {
      color: #AAAAAA;
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
      <div className="icon">
        <a href="https://www.instagram.com/ry_ryams/">
          <img src={Instagram48} alt="instagram" />
        </a>
      </div>
       <footer>
          © {new Date().getFullYear()} Tsp of Yams, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.strapi.io">Strapi</a>
      </footer>
    </FooterDiv>
   
  )
}

export default Footer
