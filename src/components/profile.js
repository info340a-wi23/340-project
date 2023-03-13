import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';


export default function Profile(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(props.currentUser.skills || '');
  const [qualifications, setQualifications] = useState(props.currentUser.qualifications || '');
  const [bio, setBio] = useState(props.currentUser.bio || '');

  const handleSave = (newProfile) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${props.currentUser.uid}`);
    set(userRef, newProfile);
    setSkills(newProfile.skills);
    setQualifications(newProfile.qualifications);
    setBio(newProfile.bio);
    setIsEditing(false);
  }

  return (
    <div>
      <main>
          <header className="profile-header">
            <h1>Profile</h1>
          </header>
    <div className='card'>
      <div className="profile">
        <h1>Welcome {props.currentUser.userName && props.currentUser.userName}!</h1>
        {isEditing ? (
          <ProfileForm currentUser={props.currentUser} onSave={handleSave} />
        ) : (
          <div>
            <p>Skills: {skills}</p>
            <p>Qualifications: {qualifications}</p>
            <p>Bio: {bio}</p>
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