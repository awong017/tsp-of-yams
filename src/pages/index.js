import React from "react"
import { Link, graphql } from "gatsby"
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
  }
`
const IndexPage = ({ data }) => (
  <>
    <Nav />
    <IndexPageDiv>
      <h1>Index Page</h1>
      {data.allStrapiReview.edges.map(review => 
        <ul key={review.node.id}>
          <li>{review.node.Title}</li>
          <li>{review.node.Date.substring(0,10)}</li>
          <li>{review.node.Location}</li>
        </ul>
      )}
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
          Date
          Location
          Title
        }
      }
    }
  }
`