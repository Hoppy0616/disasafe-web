"use client"

import Image from 'next/image'

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"



const containerStyle = {
  height: "100vh",
  width: "100%",
}

const center = {
  lat: 35.69575,
  lng: 139.77521,
}

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747,
}

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762,
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">


      <LoadScript googleMapsApiKey="AIzaSyAVPsOx5qu0HQarewYdPiIovz49PD8-Uck">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <MarkerF position={positionAkiba} icon={"/images/post1.png"}>
          </MarkerF>
          <MarkerF position={positionIwamotocho} icon={"/images/post2.png"}>
          </MarkerF>
        </GoogleMap>
      </LoadScript>

    </main>
  )
}
