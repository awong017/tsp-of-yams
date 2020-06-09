import React from 'react'
import BackgroundImage from "gatsby-background-image"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Link } from 'gatsby'
import Styled from 'styled-components'

const AboutDiv = Styled.div`
    text-align: center;
    color: white;
`

const About = (props) => {
    return (
        <BackgroundImage
            className="background"
            fluid={props.data.indexImage.childImageSharp.fluid}>
            <Nav />
            <AboutDiv>
                <h1>About Page</h1>
            </AboutDiv>
            <Footer />
        </BackgroundImage>
    )
}

export default About

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