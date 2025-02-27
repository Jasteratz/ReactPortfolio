import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Contact from "./Components/Contact.jsx"
import Hero from "./Components/Hero.jsx"
import Who from "./Components/Who.jsx"
import Works from "./Components/Works.jsx"
import Projects from "./Components/Projects.jsx"
import Navbar from "./Components/Navbar.jsx"

// Define black and orange gradient colors for each section
const sectionGradients = {
  hero: "linear-gradient(25deg, #000000, #1a1a1a, #7e381f)",
  who: "linear-gradient(135deg, #000000, #FF6347)",
  works: "linear-gradient(135deg, #121212, #FF8C00)",
  projects: "linear-gradient(135deg, #0D0D0D, #FF5722)",
  contact: "linear-gradient(135deg, #171717, #FF7043)"
};

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  background: rgba(255, 69, 0, 0.3);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 20px 5px rgba(255, 69, 0, 0.4);
`;

const EdgeLight = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    circle at var(--x) var(--y),
    rgba(255, 69, 0, 0.4) 0%,
    transparent 70%
  );
  width: 300px;
  height: 300px;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  position: relative;
  transition: background 1.5s ease;
  background: ${props => props.gradient || sectionGradients.hero};
  background-attachment: fixed;
  cursor: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 20, height: 20 });
  const [edgeLights, setEdgeLights] = useState({
    top: { opacity: 0, x: '50%', y: '0%' },
    right: { opacity: 0, x: '100%', y: '50%' },
    bottom: { opacity: 0, x: '50%', y: '100%' },
    left: { opacity: 0, x: '0%', y: '50%' }
  });

  // Function to handle cursor movement and edge lighting
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth: width, innerHeight: height } = window;
    
    // Update cursor position
    setMousePos({ x: clientX, y: clientY });

    // Edge detection distances (in pixels)
    const edgeDistance = 100;
    
    // Calculate distances to edges
    const toTop = clientY;
    const toRight = width - clientX;
    const toBottom = height - clientY;
    const toLeft = clientX;

    // Calculate edge light positions and opacities
    setEdgeLights({
      top: {
        opacity: Math.max(0, 1 - (toTop / edgeDistance)),
        x: `${(clientX / width) * 100}%`,
        y: '0%'
      },
      right: {
        opacity: Math.max(0, 1 - (toRight / edgeDistance)),
        x: '100%',
        y: `${(clientY / height) * 100}%`
      },
      bottom: {
        opacity: Math.max(0, 1 - (toBottom / edgeDistance)),
        x: `${(clientX / width) * 100}%`,
        y: '100%'
      },
      left: {
        opacity: Math.max(0, 1 - (toLeft / edgeDistance)),
        x: '0%',
        y: `${(clientY / height) * 100}%`
      }
    });

    // Update cursor size when near edges
    const isNearEdge = toTop < edgeDistance || toRight < edgeDistance || 
                      toBottom < edgeDistance || toLeft < edgeDistance;
    setCursorSize({
      width: isNearEdge ? 35 : 20,
      height: isNearEdge ? 35 : 20
    });
  }, []);

  // Function to determine which section is currently in view
  const handleScroll = useCallback(() => {
    const sections = ["hero", "who", "works", "projects", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 300) {
          if (currentSection !== section) {
            setCurrentSection(section);
          }
          break;
        }
      }
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <>
      <Cursor 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          width: `${cursorSize.width}px`,
          height: `${cursorSize.height}px`
        }} 
      />
      <EdgeLight 
        style={{ 
          top: '-150px', 
          left: `calc(${edgeLights.top.x} - 150px)`,
          opacity: edgeLights.top.opacity,
          '--x': '50%',
          '--y': '0%'
        }} 
      />
      <EdgeLight 
        style={{ 
          top: `calc(${edgeLights.right.y} - 150px)`, 
          right: '-150px',
          opacity: edgeLights.right.opacity,
          '--x': '100%',
          '--y': '50%'
        }} 
      />
      <EdgeLight 
        style={{ 
          bottom: '-150px', 
          left: `calc(${edgeLights.bottom.x} - 150px)`,
          opacity: edgeLights.bottom.opacity,
          '--x': '50%',
          '--y': '100%'
        }} 
      />
      <EdgeLight 
        style={{ 
          top: `calc(${edgeLights.left.y} - 150px)`, 
          left: '-150px',
          opacity: edgeLights.left.opacity,
          '--x': '0%',
          '--y': '50%'
        }} 
      />
      <Container gradient={sectionGradients[currentSection]}>
        <Navbar />
        <Hero />
        {/* <Who /> */}
        {/* <Works /> */}
        <Projects />
        <Contact />
      </Container>
    </>
  )
}

export default App;
