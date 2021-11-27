import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
