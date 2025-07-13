import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 22.5726,  // Example: Kolkata latitude
  lng: 88.3639   // Example: Kolkata longitude
};

function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCQ5y6GtmXmZibucAzVoqgLE4xbDZ7FuFg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
