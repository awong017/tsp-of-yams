import React from 'react'
import Styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Img from 'gatsby-image'

const ReviewTemplateDiv = Styled.div`
  background-color: black;
  color: white;
  text-align: center;
`

const ReviewTemplate = ({ data }) => (
  <ReviewTemplateDiv>
    <Nav />
    <div className="body">
      <div className="content">
        <h1>{data.strapiReview.date}</h1>
        <h1>{data.strapiReview.title}</h1>
        <h2>{data.strapiReview.location}</h2>
        <p>{data.strapiReview.content}</p>
      </div>
      <div className="picture">
        <h1>Image goes here</h1>
      </div>
    </div>
    <Footer />
  </ReviewTemplateDiv>
)

export default ReviewTemplate

export const query = graphql`
  query ReviewTemplate($id: String!) {
    strapiReview(id: {eq: $id}) {
      title
      content
        }
    }
`
