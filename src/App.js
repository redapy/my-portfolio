import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About'
import { GlobalStyle } from './GlobalStyle';
import Projects from './components/projects/Projects';
import ContactForm from './components/contact/ContactForm';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
