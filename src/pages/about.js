import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

const AboutDiv = Styled.div`
  min-height: 80vh;
  margin-bottom: 5vh;
  text-align: center;
  color: white;

  .profile-pic {
    margin-left: auto;
    margin-right: auto;
    border: 2px solid white;
    padding-top: 48px;
    width: 200px;
    height: 152px;
  }
`

const About = () => {
  return (
    <Layout>
      <AboutDiv>
        <h1>About Page</h1>
        <div className="profile-pic">
          <h2>Profile Pic</h2>
        </div>
        <p>I am Ryan Yamamoto. Come eat with me!</p>
      </AboutDiv>
    </Layout>
  )
}

export default About