import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Contact from "./Components/Contact.jsx"
import Hero from "./Components/Hero.jsx"
import Who from "./Components/Who.jsx"
import Works from "./Components/Works.jsx"
import Projects from "./Components/Projects.jsx"
import Navbar from "./Components/Navbar.jsx"

// Define gradient colors for each section
const sectionGradients = {
  hero: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
  who: "linear-gradient(135deg, #2c3e50, #4ca1af)",
  works: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  projects: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  contact: "linear-gradient(135deg, #000428, #004e92)"
};

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  position: relative;
  transition: background 0.8s ease;
  background: ${props => props.gradient || sectionGradients.hero};

  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  
  // Function to determine which section is currently in view
  const handleScroll = () => {
    const sections = ["hero", "who", "works", "projects", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the section is in the viewport
        if (rect.top <= 300 && rect.bottom >= 300) {
          setCurrentSection(section);
          break;
        }
      }
    }
  };
  
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container gradient={sectionGradients[currentSection]}>
      <Navbar />
      {/* <Hero /> */}
      <Who />
      {/* <Works /> */}
      <Projects />
      <Contact />
    </Container>
  )
}

export default App;
