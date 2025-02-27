import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(25, 25, 25, 0);
  backdrop-filter: blur(5px);
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto; /* Push to the right */
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
`

const SocialIcon = styled.a`
  color: white;
  font-size: 22px;
  transition: color 0.3s ease;
  
  &:hover {
    color: orangered;
  }
`;

const Logo = styled.img`
  height: 60px;
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
  font-weight: 500;
  &:hover {
    color: orangered;
  }
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
  &:hover {
    background-color: #ff5722;
  }
`;

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png" />
                    <List>
                        <ListItem onClick={() => scrollToSection('hero')}>About</ListItem>
                        {/* <ListItem onClick={() => scrollToSection('who')}>Studio</ListItem> */}
                        {/* <ListItem onClick={() => scrollToSection('works')}>Works</ListItem> */}
                        <ListItem onClick={() => scrollToSection('projects')}>Projects</ListItem>
                        <ListItem onClick={() => scrollToSection('contact')}>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <SocialIcons>
                        <SocialIcon href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIcon>
                        <SocialIcon href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIcon>
                    </SocialIcons>
                    <Button onClick={() => scrollToSection('contact')}>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;