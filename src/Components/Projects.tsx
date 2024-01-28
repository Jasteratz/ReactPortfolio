"use client"

import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { Projects } from '../Projects/index.ts'

const PageSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  scroll-snap-align: center;
  justify-content: center;

`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 90%;
  max-height: 90%;
`

const Page = () => {
    return (
        <PageSection>
            <ProjectsContainer>
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        text={project.text}
                        image={project.src}
                    />
                ))}
            </ProjectsContainer>
        </PageSection>
    )
}

export default Page
