import React from 'react'
import Home from './Home.jsx'
import Project from './Project.jsx';
import Into from './Into.jsx';
import Contact from './contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';









function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Into />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  )
}

export default App
