import React from "react"
import Styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const ReviewTemplateDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  background-color: black;
  color: white;

  .review-page {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-bottom: 5vh;
    min-height: 80vh;

    .body {
      margin-left: 24px;

      h1, h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
      }

      p {
        font-family: 'Lora', serif;
      }

      .content {
        margin-top: 100px;
      }
    }

    .picture {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      margin-right: 24px;
      border: 2px solid black;
      text-align: center;
    }
  }

  @media screen and (max-width: 960px) {
    .review-page {
      display: block;

      .picture {
        margin-left: 24px;
      }
    }
  }
`

const ReviewTemplate = ({ data }) => (
  <ReviewTemplateDiv>
    <Layout>
    <div className="review-page">
      <div className="body">
        <h1>{data.strapiReview.title}</h1>
        <h3>{data.strapiReview.location}</h3>
        <h3>{data.strapiReview.date.substring(0,10)}</h3>
        <p className="content">{data.strapiReview.content}</p>
      </div>
      <div className="picture">
        <Img fluid={data.strapiReview.picOne.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picTwo.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picThree.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picFour.childImageSharp.fluid} />
      </div>
    </div>
    </Layout>
  </ReviewTemplateDiv>
)

export default ReviewTemplate

export const query = graphql`
  query ReviewTemplate($id: String!) {
    strapiReview(id: {eq: $id}) {
      id
      date
      location
      title
      content
      cover {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      picOne {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      picTwo {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      picThree {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      picFour {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
