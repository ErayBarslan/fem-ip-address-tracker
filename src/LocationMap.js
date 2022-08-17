import { MapContainer, Marker, TileLayer } from "react-leaflet";
import React from 'react'
import L from "leaflet"
import marker from '../public/images/icon-location.svg'
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ info }) => {
  if (info.location) {
    const latitude = info.location.lat
    const longitude = info.location.lng
    if (info.location.lat && info.location.lng) {
      var position = [latitude, longitude]
    }
  }
  const markerIcon = new L.icon({
    iconUrl: marker,
    iconSize: [46, 56],
  })

  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon} />
    </MapContainer>
  )
}

export default LocationMap