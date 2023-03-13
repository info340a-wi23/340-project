import { getDatabase, ref, set } from 'firebase/database';
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

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
      <h1>Welcome {props.currentUser.userName && props.currentUser.userName}!</h1>
      {isEditing ? (
        <ProfileForm currentUser={props.currentUser} onSave={handleSave} />
      ) : (
        <div>
          <p>Skills: {skills}</p>
          <p>Qualifications: {qualifications}</p>
          <p>Bio: {bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}