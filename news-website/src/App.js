import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About/About.jsx'
import NewsBoard from './components/NewsBoard/NewsBoard.jsx';
import React, {useState} from 'react';


function App() {
  const [category, setCategory] = useState("general");
  return (
    <Router>
      <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      </div>
    </Router>
  );
}

export default App;
