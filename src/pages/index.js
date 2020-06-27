import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Styled from "styled-components"

const IndexPageDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  height: 100%;
  min-height: 100%;
  text-align: center;
  color: white;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }

  p {
    font-family: 'Lora', serif;
  }

  ul {
    padding-left: 0;
    list-style: none;

    .container {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      width: 600px;
      border: 2px solid black;

      &:hover .content {
        opacity: 1.0;
      }

      .content {
        position: absolute;
        left: 225px;
        bottom: 125px;
        color: white;
        opacity: 0.5;
        transition: 0.5s;
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <Layout>
    <IndexPageDiv>
      <ul>
        {data.allStrapiReview.edges.map(review =>
          <li>
            <Link to={review.node.id}>
              <div className="container">
                <Img fluid={review.node.cover.childImageSharp.fluid} />
                <div className="content">
                  <h1>{(review.node.title).toUpperCase()}</h1>
                  <p>{review.node.date.substring(0,10)}</p>
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </IndexPageDiv>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allStrapiReview {
      edges {
        node {
          id
          cover {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date
          location
          title
        }
      }
    }
  }
`