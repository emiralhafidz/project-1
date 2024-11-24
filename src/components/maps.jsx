//program untuk mendapatkan titik terbaru langsung


import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import WebSocket from "isomorphic-ws";

// Komponen untuk menggerakkan peta ke posisi baru
const MapUpdater = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      map.flyTo([latitude, longitude], 14);
    }
  }, [latitude, longitude, map]);

  return null;
};

const Maps = () => {
  const [data, setData] = useState({ latitude: -7.7743284, longitude: 110.3886447 });
  const [path, setPath] = useState([]);



  useEffect(() => {
    if (data.latitude !== null && data.longitude !== null) {
      setPath(prevPath => [...prevPath, [data.latitude, data.longitude]]);
    }
  }, [data]);

  return (
    <div className="maps">
      <MapContainer 
        style={{ height: "400px", width: "100%" }} 
        center={data.latitude && data.longitude ? [data.latitude, data.longitude] : [0, 0]} 
        zoom={14}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater latitude={data.latitude} longitude={data.longitude} />
        {data.latitude && data.longitude && (
          <Marker position={[data.latitude, data.longitude]}>
            <Popup>
              Longitude: {data.longitude}, Latitude: {data.latitude}
            </Popup>
          </Marker>
        )}
        <Polyline positions={path} color="blue" />
      </MapContainer>
    </div>
  );
};

export default Maps;
