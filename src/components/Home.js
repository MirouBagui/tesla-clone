import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container >
            <Section
            title="Model S"
            descriptions="Oreder online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
             />
            <Section 
            title="Model Y"
            descriptions="Oreder online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            <Section 
            title="Model 3"
            descriptions="Oreder online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            <Section 
            title="Model X"
            descriptions="Oreder online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                discreption="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for new Roofs"
                discreption="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                discreption=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home
const Container = styled.div`
    height:100vh;

`