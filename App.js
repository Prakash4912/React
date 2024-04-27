import React, { useState } from 'react';
import './styles/app.css';
import ProfileCard from './components/ProfileCard';
import Map from './components/Map';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    { id: 1, name: 'Prakash Pawar', photo: 'Prakash.jpg', description: 'Master Computer Science', address: 'Pune' },
    { id: 2, name: 'Akash Pawar', photo: 'Akash.jpg', description: 'Mechanical Engineer', address: 'Hadpsar' },
    
  ];

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
        ))}
      </div>
      <div className="map-container">
        {selectedProfile && <Map address={selectedProfile.address} />}
      </div>
      <div className="profile-details-container">
        {selectedProfile && <ProfileDetails profile={selectedProfile} />}
      </div>
    </div>
  );
};

export default App;