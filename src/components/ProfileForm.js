import React, { useState } from 'react';

export default function ProfileForm(props) {
  const [skills, setSkills] = useState(props.currentUser.skills || '');
  const [qualifications, setQualifications] = useState(props.currentUser.qualifications || '');
  const [bio, setBio] = useState(props.currentUser.bio || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the user's profile with the new information
    props.onSave({
      skills: skills,
      qualifications: qualifications,
      bio: bio
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Skills:
        <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
      </label>
      <br />
      <label>
        Qualifications:
        <input type="text" value={qualifications} onChange={(event) => setQualifications(event.target.value)} />
      </label>
      <br />
      <label>
        Career Objective Bio:
        <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}
