import React from 'react'
import Styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Img from 'gatsby-image'

const ReviewTemplateDiv = Styled.div`
    text-align: center;
`

const ReviewTemplate = ({ data }) => (
  <ReviewTemplateDiv>
    <Nav />
    <h1>{data.strapiReview.title}</h1>
    <p>{data.strapiReview.content}</p>
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
