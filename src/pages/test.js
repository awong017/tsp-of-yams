import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

const TestDiv = Styled.div`
    text-align: center;
    color: white;

    .background-image {
        width: 100%;
        height: 500px;
    }
`

const Test = (props) => {
    return (
        <BackgroundImage
            className="background-image"
            fluid={props.data.indexImage.childImageSharp.fluid}
        >
             <TestDiv>
                <h1>This is the test page</h1>
            </TestDiv>
        </BackgroundImage>
    )
}

export default Test

export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq : "ramen-wallpaper.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;