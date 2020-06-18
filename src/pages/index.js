import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Styled from "styled-components"
import "../styles/backgroundImage.css"

const IndexPageDiv = Styled.div`
  background-color: black;
  text-align: center;
  color: white;

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
  <>
    <Nav />
    <IndexPageDiv>
      <h1>Collection Page</h1>
      <ul>
        {data.allStrapiReview.edges.map(review =>
          <li>
            <Link to={review.node.id}>
              <div className="container">
                <Img fluid={review.node.cover.childImageSharp.fluid} />
                <div className="content">
                  <h1>{review.node.title}</h1>
                  <p>{review.node.date.substring(0,10)}</p>
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </IndexPageDiv>
    <Footer />
  </>
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