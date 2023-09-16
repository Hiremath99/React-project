import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import ProfileMap from './components/ProfileMap';
import profilesData from './data/profilesData';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseMap = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="App">
      <h1>Profile Viewer</h1>
      <ProfileList profiles={profilesData} onSummaryClick={handleSummaryClick} />
      {selectedProfile && (
        <ProfileMap profile={selectedProfile} onCloseMap={handleCloseMap} />
      )}
    </div>
  );
}

export default App;
