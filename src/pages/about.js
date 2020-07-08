import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Styled from "styled-components"

const AboutDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  min-height: 80vh;
  margin-bottom: 5vh;
  color: #EEEEEE;

  .about-page {
    display: grid;
    grid-template-columns: 50% 50%;

    header {
      h1 {
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

    .container {
      position: relative;
      margin-left: auto;
      margin-right: 48px;
      border: 2px solid white;
      width: 600px;

      .black-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.1);
      }
    }

    .body {
      margin-top: 100px;
      margin-left: 48px;
      width: 750px;

      p {
        margin-top: 48px;
        margin-left 48px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .about-page {
      display: block;

      .container {
        margin-left: 48px;
        margin-right: 0px;
      }

      .body {
        margin-top: 48px;
        margin-left: 148px;
    }
  }
`

const About = (props) => {
  return (
    <Layout>
      <AboutDiv>
        <div className="about-page">
          <div className="container">
            <Img
              fluid={props.data.indexImage.childImageSharp.fluid} />
            <div className="black-overlay" />
          </div>
          <section className="body">
            <header>
              <h1>RYAN YAMAMOTO</h1>
              <div className="line-one" />
              <div className="line-two" />
              <div className="line-three" />
            </header>
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