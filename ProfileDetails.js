import React from 'react';
import './styles/ProfileDetails.css';
const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfileDetails;
