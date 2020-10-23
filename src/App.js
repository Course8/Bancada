import React from 'react';
import './App.css';
import Header from './pages/header/header.js';
import GitHub from './pages/github/github.js';
import Footer from './pages/footer/footer.js';
import Apidragon from './pages/api-dragon/apidragon';

function App() {
  return (
    <div className="App">
        <Header></Header>
        {/* <GitHub></GitHub> */}
        <Apidragon></Apidragon>
        <Footer></Footer>
    </div>
  );
}

export default App;
