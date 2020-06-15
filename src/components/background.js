import React from "react"
import BackgroundImage from "gatsby-background-image"
import Styled from "styled-components"

const BackgroundDiv = Styled.div`

`

const Background = (props) => {
    return (
        <BackgroundDiv>
            <button onClick={() => console.log("props: ", props)}>Props</button>
        </BackgroundDiv>
    )
}

export default Background

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