import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

const DiscoveredDiv = Styled.div`
    text-align: center;
    color: white;
`

const Discovered = () => {
    return (
        <Layout>
            <DiscoveredDiv>
                <h1>This is the Discovered Page</h1>
            </DiscoveredDiv>
        </Layout>
    )
}

export default Discovered