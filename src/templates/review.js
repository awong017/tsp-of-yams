import React from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Img from 'gatsby-image'

const ReviewTemplateDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  height: 100vh;
  background-color: black;
  color: white;

  .review-page {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-top: 48px;
    margin-bottom: 300px;

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
      text-align: center;
    }
  }
`

const ReviewTemplate = ({ data }) => (
  <ReviewTemplateDiv>
    <Nav />
    <div className="review-page">
      <div className="body">
        <h1>{data.strapiReview.title}</h1>
        <h3>{data.strapiReview.location}</h3>
        <h3>{data.strapiReview.date.substring(0,10)}</h3>
        <p className="content">{data.strapiReview.content}</p>
      </div>
      <div className="picture">
        <Img 
          fluid={data.strapiReview.cover.childImageSharp.fluid} />
      </div>
    </div>
    <Footer />
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
    }
  }
`
