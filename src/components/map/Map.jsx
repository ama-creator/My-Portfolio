import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[55.7264428606496, 37.62010971909251]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Anatoly</h3>
        <span>Markevich</span>
        <br />
        <span>Location : Moscow, Russia</span>
        <br />
        <span>Email: markduho0@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
