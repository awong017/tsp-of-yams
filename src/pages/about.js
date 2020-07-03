import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Styled from "styled-components"

const AboutDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  min-height: 80vh;
  margin-bottom: 5vh;
  color: white;

  .about-page {
    display: grid;
    grid-template-columns: 50% 50%;
    border: 2px solid yellow;

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 100;
    }

    .profile-pic {
      margin-top: 48px;
      margin-left: 20vw;
      margin-right: 24px;
      border: 2px solid white;
      width: 500px;
    }

    .body {
      border: 2px solid blue;
    }
  }

 
`

const About = (props) => {
  return (
    <Layout>
      <AboutDiv>
        <div className="about-page">
          <div className="profile-pic">
            <Img
              fluid={props.data.indexImage.childImageSharp.fluid} />
          </div>
          <section className="body">
            <h1>RYAN YAMAMOTO</h1>
            <p>Come eat with me!</p>
          </section>
        </div>
      </AboutDiv>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;