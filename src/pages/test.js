import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/layout'
import Styled from 'styled-components'

const TestDiv = Styled.div`
    text-align: center;
    color: white;
`

const Test = (props) => {
    return (
        <Layout>
            <BackgroundImage
            className="background"
            fluid={props.data.indexImage.childImageSharp.fluid}
        >
                <TestDiv>
                    <h1>This is the test page</h1>
                </TestDiv>
            </BackgroundImage>
        </Layout>
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