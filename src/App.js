import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Checklist from './checklist';
import JobLog from './add-job';
import About from './about';
import Home from './home';
import Dashboard from './dashboard';
import Footer from './footer'
import MySignInScreen from './login';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<Checklist title="Resume Checklist"/>} />
        <Route path="/add-job" element={<JobLog />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<MySignInScreen/>} />
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;

