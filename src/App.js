import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About'
import { GlobalStyle } from './GlobalStyle';
import Projects from './components/projects/Projects';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Welcome />
      <About />
      <Projects />
    </div>
  );
}

export default App;
