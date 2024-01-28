"use client"
import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

interface CardFaceProps {
    image: string;
}

const Card = styled.div`
    width: 450px;
    height: 280px;
    cursor: pointer;
    border-radius: 0.375rem;
`

const FlipCardInner = styled(motion.div)`
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
`

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 0.375rem;
    background-size: cover;
    background-position: center;
`

const CardFront = styled(CardFace) <CardFaceProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.image});
`

const CardBack = styled(CardFace) <CardFaceProps>`
    background-image: url(${props => props.image});
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;

    color: white;
`

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s ease;
    ${CardFront}:hover & {
        opacity: 0.4;
    }
`

const Title = styled.h1`
    font-size: 1.25rem; // 20px
    font-weight: bold;
    filter:none
`

const Text = styled.p`
    font-size: 1.25rem; // 20px
    color: #ccc;
    filter:none;
    
`

const ProjectCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <Card onClick={handleFlip}>
            <FlipCardInner
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <CardFront image={image}>
                    <Overlay />
                    <div>Learn more &gt;</div>
                </CardFront>
                <CardBack image={image}>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </CardBack>
            </FlipCardInner>
        </Card>
    )
}

export default ProjectCard
