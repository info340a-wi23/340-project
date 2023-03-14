import { getDatabase, ref, set, onValue } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';


export default function Profile(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(props.currentUser.skills || '');
  const [qualifications, setQualifications] = useState(props.currentUser.qualifications || '');
  const [bio, setBio] = useState(props.currentUser.bio || '');
  const [jobsAppliedTo, setJobsAppliedTo] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const userJobsRef = ref(db, `users/${props.currentUser.uid}/jobs`);
    onValue(userJobsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const jobs = Object.values(data);
        setJobsAppliedTo(jobs);
      }
    });
  }, [props.currentUser]);

  const handleSave = (newProfile) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${props.currentUser.uid}`);
    set(userRef, newProfile);
    setSkills(newProfile.skills);
    setQualifications(newProfile.qualifications);
    setBio(newProfile.bio);
    setIsEditing(false);
  }

  const jobsAppliedToCount = jobsAppliedTo.length;

  return (
    <div>
      <main>
        <header className="profile-header">
          <h1>Profile</h1>
        </header>
      <div className='card'>
        <div className="profile">
          <p className="profile-welcome">Welcome {props.currentUser.userName && props.currentUser.userName}!</p>
          {isEditing ? (
            <ProfileForm currentUser={props.currentUser} onSave={handleSave} />
          ) : (
            <div className="profile-info">
              <p>Skills: {skills}</p>
              <p>Qualifications: {qualifications}</p>
              <p>Bio: {bio}</p>
              <p>Jobs Applied To: {jobsAppliedToCount}</p>
              <button type="button" className="btn btn-light btn-lg" onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          )}
            <div className="dashboard-link">
              <p>Dashboard</p>
              <Link to="/dashboard">
                <button type="button" className="btn btn-light btn-lg">View Your Dashboard</button>
              </Link>  
            </div> 
          </div>
        </div>
      </main>
    </div>
  );
}