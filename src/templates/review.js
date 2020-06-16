import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ReviewTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiReview.title}</h1>
    <Img fixed={data.strapiReview.cover.childImageSharp.fixed}/>
    <p>{data.strapiReview.content}</p>
  </div>
)

export default ReviewTemplate

export const query = graphql`
  query ReviewTemplate($id: String!) {
    strapiReview(id: {eq: $id}) {
      title
      content
      cover {
          childImageSharp {
            fixed(width: 200, height: 125) {
              ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`
