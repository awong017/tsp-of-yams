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
      margin-bottom: 48px;
      width: 600px;
      border: 2px solid black;

      &:hover .content {
        opacity: 1.0;
      }

      .content {
        background-color: rgba(0,0,0,.8);
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 600px;
        height: 240px;
        padding-top: 60px;
        color: #EEEEEE;
        opacity: 0.5;
        transition: 0.5s;
      }
    }
  }
`

const sortData = (data) => {
  const newData = data.map(review => ({
      id: review.node.id,
      title: review.node.title,
      location: review.node.location,
      cover: review.node.cover,
      date: new Date(review.node.date.substring(0,10)).getTime()/1000 
    })
  )
  newData.sort((a,b) => b.date - a.date);
  return newData;
}

const IndexPage = ({ data }) => (
  <Layout>
    <IndexPageDiv>
      <ul>
        {sortData(data.allStrapiReview.edges).map(review =>
          <li>
            <Link to={review.id}>
              <div className="container">
                <Img fluid={review.cover.childImageSharp.fluid} />
                <div className="content">
                  <h1>{(review.title).toUpperCase()}</h1>
                  <p>{review.location}</p>
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