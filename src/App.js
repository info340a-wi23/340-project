import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Checklist from './checklist';
import JobLog from './add-job';
import About from './about';
import Home from './home';
import Dashboard from './dashboard';
import Footer from './footer'
import Profile from './profile';
import Login from './login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export default function App() {
    const [jobs, setJobs] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const addJob = (newJob) => {
      setJobs([...jobs, newJob]);
    };
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (firebaseUser) => {
          if(firebaseUser) {
              firebaseUser.userId = firebaseUser.uid;
              firebaseUser.userName = firebaseUser.displayName;
              firebaseUser.userEmail = firebaseUser.email;
              setCurrentUser(firebaseUser);
              console.log("sign in as", firebaseUser.displayName);
              console.log(currentUser);
          }
          else {
              console.log("sign out");
              setCurrentUser('');
          }
      });
    }, [])
    function ProtectedPage(props) {
      if(props.currentUser.userName === "") { 
          return <Navigate to="/login" />;
      }
      else { 
          return <Outlet />;
      }
  }
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
        <Route path="/login" element={<Login currentUser={currentUser}/>} />
        <Route path="/profile" element={<Profile currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </Router>
  );

}


