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
      width: 700px;

      header {
        h1, h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 100;
          color: #AAAAAA;
        }

        .line-one {
          border-top: 2px solid #AAAAAA;
          margin-bottom: 12px;
          width: 225px;
        }
  
        .line-two {
          border-top: 2px solid #AAAAAA;
          margin-bottom: 12px;
          margin-left: 16px;
          width: 225px;
        }
  
        .line-three {
          border-top: 2px solid #AAAAAA;
          margin-left: 32px;
          width: 225px;
        }
      }

      .content {
        font-family: 'Lora', serif;
        margin-top: 48px;
        margin-left: 48px;
      }
    }

    .container {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      margin-right: 24px;
      border: 2px solid black;
      text-align: center;

      .black-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
      }
    }
  }

  @media screen and (max-width: 960px) {
    h1, h3 {
      text-align: center;
    }

    .review-page {
      display: block;

      .container {
        margin-left: 24px;
      }
    }
  }
`

const ReviewTemplate = ({ data }) => (
  <ReviewTemplateDiv>
    <Layout>
    <div className="review-page">
      <section className="body">
        <header>
          <h1>{data.strapiReview.title}</h1>
          <h3>{data.strapiReview.location}</h3>
          <h3>{data.strapiReview.date.substring(0,10)}</h3>
          <div className="line-one" />
          <div className="line-two" />
          <div className="line-three" />
        </header>
        <p className="content">{data.strapiReview.content}</p>
      </section>
      <div className="container">
        <Img fluid={data.strapiReview.picOne.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picTwo.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picThree.childImageSharp.fluid} />
        <Img fluid={data.strapiReview.picFour.childImageSharp.fluid} />
        <div className="black-overlay" />
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
