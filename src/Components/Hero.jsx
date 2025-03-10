import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 80px;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;

const Title = styled.h1`
font-size: 74px;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;

`;

const Line = styled.img`
height: 8px;
`;

const Subtitle = styled.h2`
color: orangered;

`;

const Description = styled.p`
font-size: 24px;
color: lightgray;
`;

const Button = styled.button`
background-color: orangered;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;

`;

const Right = styled.div`
position: relative;
flex: 3;

`;

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom:0;
left:0;
right:0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(20px);
    }
}

`;



const Hero = () => {
    const scrollToWho = () => {
        const whoSection = document.getElementById('who');
        if (whoSection) {
            whoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section id="hero">
            <Container>
                <Left>
                    <Title>JUUUUUST.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Description>we enjoy a lot of stuff</Description>
                    <Button onClick={scrollToWho}>Learn more</Button>
                </Left>
                <Right>
                    {/* 3d model */}
                    <Img src="./img/just.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;
