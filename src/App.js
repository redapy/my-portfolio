import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About'
import { GlobalStyle } from './GlobalStyle';
import Card from './components/card/Card';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Welcome />
      <About />
      <Card />
    </div>
  );
}

export default App;
