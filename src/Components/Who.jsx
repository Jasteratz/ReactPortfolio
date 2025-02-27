import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
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


const Right = styled.div`

flex: 1;
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

const Left = styled.div`
position: relative;
flex: 1;
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



const Who = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="who">
      <Container>
        <Left>
          {/* 3d model */}
          <Img src="./img/doit.png" />
        </Left>
        <Right>
          <Title>DOOOOOIIIIT.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Description>we enjoy a lot of stuff</Description>
          <Button onClick={scrollToWorks}>Learn more</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;
