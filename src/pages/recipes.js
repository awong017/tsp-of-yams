import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

const RecipesDiv = Styled.div`
    min-height: 80vh;
    margin-bottom: 5vh;
    text-align: center;
    color: white;
`

const Recipes = () => {
    return (
        <Layout>
            <RecipesDiv>
                <h1>Recipes Page</h1>
            </RecipesDiv>
        </Layout>
    )
}

export default Recipes