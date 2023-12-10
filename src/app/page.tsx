"use client"

import Link from 'next/link'

import Image from 'next/image'

import { GoogleMap, LoadScript, MarkerF, Circle, Marker } from "@react-google-maps/api"
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


const positionAkiba = {
  comment: "Akiba",
  url: "/images/post1.png",
  lat: 26.2030332,
  lng: 127.8169709
  ,
}

const positionIwamotocho = {
  comment: "Iwamotocho",
  url: "/images/post2.png",
  lat: 26.3730332,
  lng: 127.7169709
  ,
}

const positionIsa = {
  comment: "Isa",
  url: "/images/post3.png",
  lat: 26.2936320,
  lng: 127.7536631
  ,
}

const positionOnna = {
  comment: "Onna",
  url: "/images/post4.png",
  lat: 26.4964987,
  lng: 127.8910149
  ,
}

const positionKurasiki = {
  comment: "Kurasiki",
  url: "/images/post5.png",
  lat: 26.3889167,
  lng: 127.7928395
  ,
}

const positionHaebaru = {
  comment: "Haebaru",
  url: "/images/post6.png",
  lat: 26.1706415,
  lng: 127.7294804
  ,
}

const positionAwase = {
  comment: "Awase",
  url: "/images/post7.png",
  lat: 26.3205933,
  lng: 127.8373011
  ,
}

const positionOkinawacity = {
  comment: "Okinawacity",
  url: "/images/post8.png",
  lat: 26.3484104,
  lng: 127.7915638
  ,
}

const positionYogi = {
  comment: "Yogi",
  url: "/images/post9.png",
  lat: 26.3095273,
  lng: 127.8095989
  ,
}

const positionKina = {
  comment: "Kina",
  url: "/images/post10.png",
  lat: 26.3950946,
  lng: 127.7632348
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
          <MarkerF position={{ lat:positionAkiba.lat, lng:positionAkiba.lng, url:positionAkiba.url, comment:positionAkiba.comment  }} icon={"/images/post1.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionIwamotocho.lat, lng:positionIwamotocho.lng, url:positionIwamotocho.url, comment:positionIwamotocho.comment }} icon={"/images/post2.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionIsa.lat, lng:positionIsa.lng, url:positionIsa.url, comment:positionIsa.comment }} icon={"/images/post3.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionOnna.lat, lng:positionOnna.lng, url:positionOnna.url, comment:positionOnna.comment }} icon={"/images/post4.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionKurasiki.lat, lng:positionKurasiki.lng, url:positionKurasiki.url, comment:positionKurasiki.comment }} icon={"/images/post5.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionHaebaru.lat, lng:positionHaebaru.lng, url:positionHaebaru.url, comment:positionHaebaru.comment }} icon={"/images/post6.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionAwase.lat, lng:positionAwase.lng, url:positionAwase.url, comment:positionAwase.comment }} icon={"/images/post7.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionOkinawacity.lat, lng:positionOkinawacity.lng, url:positionOkinawacity.url, comment:positionOkinawacity.comment }} icon={"/images/post8.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionYogi.lat, lng:positionYogi.lng, url:positionYogi.url, comment:positionYogi.comment }} icon={"/images/post9.png"}>
          </MarkerF>
          <MarkerF position={{ lat:positionKina.lat, lng:positionKina.lng, url:positionKina.url, comment:positionKina.comment }} icon={"/images/post10.png"}>
          </MarkerF>
         </GoogleMap>
      </LoadScript>
      
    </main>
  )
}
