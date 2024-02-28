
import React from 'react';
import './App.css';
import Home from './Home';
import Learning from './Learning';
import Disability from './Disability';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Home1';
import Option from './Option';
import Unit1ch from './Unit1ch';
import Picture from './Picture';
 import Speaktest from './Speaktest';
import Lettertest from './Letterpractice';
//import Soundtest from './Soundtest';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/Disability" element={<Disability />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/Option" element={<Option />} />
        <Route path="/unit1ch" element={<Unit1ch/>} />
        <Route path="/Picture" element={<Picture/>} />
        <Route path="/Speaktest" element={<Speaktest/>} />
        <Route path="/Lettertest" element={<Lettertest/>} />

      </Routes>
    </Router>
    // <Unit1ch/>
    // <Speaktest/>
    // <Soundtest/>
  );
}

export default App;
