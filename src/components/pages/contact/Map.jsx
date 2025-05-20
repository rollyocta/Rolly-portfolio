import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png'; // Import the icon

const Map = () => {
  const position = [14.3146, 120.8755]; // Coordinates for Bagtas, Tanza

  const icon = new L.Icon({
    iconUrl: markerIcon, // Correctly use the imported icon
    iconSize: [25, 41],  // Default size of the marker icon
    iconAnchor: [12, 41], // Anchor position of the icon
    popupAnchor: [1, -34], // Popup position
  });

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Bagtas, Tanza
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
