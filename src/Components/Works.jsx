import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
padding-top: 80px; /* Add padding for fixed navbar */
display: flex;
justify-content: center;
align-items: center;
`

const Works = () => {
    return (
        <Section id="works">Works</Section>
    )
};

export default Works;
