import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

const DiscoveredDiv = Styled.div`
    min-height: 80vh;
    margin-bottom: 5vh;
    text-align: center;
    color: #EEEEEE;
`

const Discovered = () => {
    return (
        <Layout>
            <DiscoveredDiv>
                <h1>Discovered Page</h1>
            </DiscoveredDiv>
        </Layout>
    )
}

export default Discovered