import styled from "styled-components"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Works from "./Components/Works"
import Projects from "./Components/Projects"

const Container = styled.div`

height: 100vh;
background-color: rebeccapurple;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color:white;
background: url("./img/bg.jpg");

&::-webkit-scrollbar{
  display: none;
}

`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Projects />
      <Contact />
    </Container>
  )
};

export default App;
