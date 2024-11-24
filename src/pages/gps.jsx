import React, { useEffect, useState } from "react";

import { BiFlag } from "react-icons/bi";
import { BiMapPin, BiMapAlt } from "react-icons/bi";
import Maps from '../components/maps'
import Pesawat from '../components/pesawat';


const gps = () => {
  const [data, setData] = useState({ latitude: -7.7743284, longitude: 110.3886447});


  return (
    <div className="positionPage">
      <h1 className="title">
        <BiFlag className="icon" />
        Halaman Maps
      </h1>
      <div className="box">
        <div className="item styleBox" style={{ height:"80px" }}>
          <BiMapPin className="icon"/>
          <div className="value">{data.latitude}</div>
        </div>
        <div className="item styleBox" style={{ height:"80px" }}>
          <BiMapAlt className="icon"/>
          <div className="value">{data.longitude}</div>
        </div>
      </div>
      <Maps/>
      <br />
      <Pesawat/>

    </div>
  );
};

export default gps;
