import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ProfileMap = ({ profile, onCloseMap }) => {
  return (
    <div className="profile-map">
      <MapContainer center={profile.address.coordinates} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={profile.address.coordinates}>
          <Popup>{profile.address.full}</Popup>
        </Marker>
      </MapContainer>
      <button onClick={onCloseMap}>Close Map</button>
    </div>
  );
};

export default ProfileMap;
