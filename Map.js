import React from 'react';
import './styles/Map.css';
const Map = ({ address }) => {
  // Implement map rendering logic here, e.g., using Google Maps API
  return (
    <div className="map">
      Map for {address} will be displayed here
    </div>
  );
};

export default Map;