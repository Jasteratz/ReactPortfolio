import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
padding-top: 80px; /* Add padding for fixed navbar */
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
`;

const InfoIcon = styled.div`
  color: orangered;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const SocialIconsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: orangered;
    transform: translateY(-5px);
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  
  &:focus {
    outline: 1px solid orangered;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: 1px solid orangered;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff5722;
  }
`;

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert('Form submitted! This is a placeholder - implement actual form handling.');
    };

    return (
        <Section id="contact">
            <Container>
                <Title>Get In Touch</Title>
                <ContentWrapper>
                    <ContactInfo>
                        <InfoItem>
                            <InfoIcon><FaEnvelope /></InfoIcon>
                            youremail@example.com
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon><FaPhone /></InfoIcon>
                            +31 6 19317 058
                        </InfoItem>
                        
                        <SocialIconsWrapper>
                            <SocialIcon href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </SocialIcon>
                            <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIcon>
                            <SocialIcon href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIcon>
                        </SocialIconsWrapper>
                    </ContactInfo>
                    
                    <FormWrapper>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Your Name" required />
                            <Input type="email" placeholder="Your Email" required />
                            <Input type="text" placeholder="Subject" />
                            <TextArea placeholder="Your Message" required />
                            <SubmitButton type="submit">Send Message</SubmitButton>
                        </Form>
                    </FormWrapper>
                </ContentWrapper>
            </Container>
        </Section>
    )
}

export default Contact;
