import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './index';
import Checklist from './checklist';
import JobTracker from './add-job';
import About from './about';

function App() {
  return (
    <Router>
    <NavBar />
    </Router>
  );
}

export default App;
