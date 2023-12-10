"use client"

import Link from 'next/link'

import Image from 'next/image'

import { GoogleMap, LoadScript, MarkerF, Circle } from "@react-google-maps/api"
import React, { useState, useEffect } from 'react'

import style from 'src/app/styles/common.module.css'

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const containerStyle = {
  height: "100vh",
  width: "100%",
}

const center = {
  lat: 35.69575,
  lng: 139.77521,
}

const positionAkiba = {
  lat: 26.2030332,
  lng: 127.8169709
  ,
}

const positionIwamotocho = {
  lat: 26.3730332,
  lng: 127.7169709
  ,
}

export default function Home() {
  const [coords, setCoords] = useState({latitude: 0, longitude: 0})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({latitude: position.coords.latitude, longitude: position.coords.longitude})
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [])

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between" style={{position:'relative'}}>
      <Link href="/post" style={{
         position: "absolute",
         zIndex: 999,
         right: 'calc(50%-40px)',
         bottom: 20,
         }} >
        <Image src={"/images/submit.png"} alt="投稿画面へ" height={80} width={80}/>
      </Link>
      <LoadScript googleMapsApiKey="AIzaSyAVPsOx5qu0HQarewYdPiIovz49PD8-Uck">
        <GoogleMap mapContainerStyle={containerStyle} center={{lat: coords.latitude, lng: coords.longitude}} zoom={10}>
          <MarkerF position={{lat: coords.latitude, lng: coords.longitude}} icon={"/images/user.png"}>
          </MarkerF>
          <MarkerF position={positionAkiba} icon={"/images/post1.png"}>
          </MarkerF>
          <MarkerF position={positionIwamotocho} icon={"/images/post2.png"}>
          </MarkerF>
        </GoogleMap>
      </LoadScript>
      
    </main>
  )
}
