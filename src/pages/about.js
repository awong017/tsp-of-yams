import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

const AboutDiv = Styled.div`
  text-align: center;
  color: white;
`

const About = () => {
  return (
    <Layout>
      <AboutDiv>
        <h1>About Page</h1>
        <h2>I am Ryan Yamamoto. Come eat with me!</h2>
      </AboutDiv>
    </Layout>
  )
}

export default About