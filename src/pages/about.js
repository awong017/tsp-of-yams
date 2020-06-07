import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Styled from 'styled-components'

const AboutDiv = Styled.div`
`

const About = () => {
    return (
        <Layout>
            <AboutDiv>
                <h1>About Page</h1>
            </AboutDiv>
            <Link to='/'>Go back to home page</Link>
        </Layout>
    )
}

export default About