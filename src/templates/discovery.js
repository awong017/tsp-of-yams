import React from "react"
import Styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const DiscoveryTemplateDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');

  background-color: black;
  color: #EEEEEE;

  .discovery-page {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-bottom: 5vh;
    min-height: 80vh;

    .body {
      margin-left: 24px;
      width: 750px;

      header {
        h1, h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 100;
          color: #AAAAAA;
        }
      }

      .content {
        font-family: 'Lora', serif;
        margin-top: 48px;
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
        background-color: rgba(0,0,0,.1);
      }
    }
  }

  @media screen and (max-width: 960px) {
    h1, h3 {
      text-align: center;
    }

    .discovery-page {
      display: block;

      .body {
        margin-left: auto;
        margin-right: auto;
      }

      .container {
        margin-left: 24px;
      }
    }
  }
`

const DiscoveryTemplate = ({ data }) => (
  <DiscoveryTemplateDiv>
    <Layout>
    <div className="discovery-page">
      <section className="body">
        <header>
          <h1>{data.strapiDiscovery.title}</h1>
          <h3>{data.strapiDiscovery.date.substring(0,10)}</h3>
        </header>
        <p className="content">{data.strapiDiscovery.content}</p>
      </section>
      <div className="container">
        {/* <Img fluid={data.strapiDiscovery.picOne.childImageSharp.fluid} />
        <Img fluid={data.strapiDiscovery.picTwo.childImageSharp.fluid} />
        <Img fluid={data.strapiDiscovery.picThree.childImageSharp.fluid} />
        <Img fluid={data.strapiDiscovery.picFour.childImageSharp.fluid} /> */}
        <div className="black-overlay" />
      </div>
    </div>
    </Layout>
  </DiscoveryTemplateDiv>
)

export default DiscoveryTemplate

export const query = graphql`
  query DiscoveryTemplate($id: String!) {
    strapiDiscovery(id: {eq: $id}) {
      id
      date
      title
      content
    }
  }
`
