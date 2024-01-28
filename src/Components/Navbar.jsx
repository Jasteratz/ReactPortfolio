import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
padding: 10px 0px;

`;

const Links = styled.div`
display:  flex;
align-items: center;
gap: 50px;

`;

const Icons = styled.div`
display:  flex;
align-items: center;
gap: 20px;
`

const Logo = styled.img`
height: 80px;
border-radius: 20px;
border: none;
`;

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

`;

const ListItem = styled.li`
cursor: pointer;

`;

const Icon = styled.img`
width: 20px;
cursor: pointer;
`;

const Button = styled.button`
cursor: pointer;
width: 100px;
padding: 10px;
background-color: orangered;
color: white;
border: none;
border-radius: 5px;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    {/* Changed the image due to copyright problems */}
                    <Icon src="./img/search_button.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section >
    );
};

export default Navbar;