import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Checklist from './checklist';
import JobLog from './add-job';
import About from './about';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/add-job" element={<JobLog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
