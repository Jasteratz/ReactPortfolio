import React from 'react'
import styled from 'styled-components'
import { Projects as ProjectsData } from '../Projects/index.ts'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`

const ProjectTitle = styled.h2`
  font-size: 24px;
  color: white;
`

const ProjectText = styled.p`
  font-size: 16px;
  color: lightgray;
`

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {ProjectsData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.src} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectText>{project.text}</ProjectText>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

export default Projects 