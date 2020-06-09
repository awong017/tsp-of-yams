import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Styled from "styled-components"
import "../styles/backgroundImage.css"

const IndexPageDiv = Styled.div`
  text-align: center;
  color: white;
`
const IndexPage = (props) => (
  <BackgroundImage
    className="background"
    fluid={props.data.indexImage.childImageSharp.fluid}>
    <Nav />
    <IndexPageDiv>
      <h1>Index Page Component</h1>
    </IndexPageDiv>
    <Footer />
  </BackgroundImage>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "ramen-wallpaper.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;