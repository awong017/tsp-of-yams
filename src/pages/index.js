import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Styled from "styled-components"
import "../styles/backgroundImage.css"

const IndexPageDiv = Styled.div`
  text-align: center;
  color: black;

  ul {
    padding-left: 0;
    list-style: none;

    .container {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      width: 500px;
      border: 2px solid black;

      Img {
        opacity: 0.5;
      }

      .content {
        position: absolute;
        left: 200px;
        bottom: 50px;
        color: white;
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Nav />
    <IndexPageDiv>
      <h1>Index Page</h1>
        <ul>
          {data.allStrapiReview.edges.map(review =>
            <li>
              <Link to={review.node.id}>
                <div className="container">
                  <Img fixed={review.node.cover.childImageSharp.fixed} />
                  <div className="content">
                    <h3>{review.node.title}</h3>
                    <p>{review.node.date.substring(0,10)}</p>
                    <p>{review.node.location}</p>
                  </div>
                </div>
              </Link>
            </li>
          )}
        </ul>
      <button onClick={() => console.log(data.allStrapiReview.edges[0].node)}>Data</button>
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
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed
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