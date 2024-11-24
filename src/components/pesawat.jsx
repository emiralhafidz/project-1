import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Plane from "../../public/Plane"; // Assuming Plane is a component that represents your 3D plane model

const toRadians = (degrees) => degrees * (Math.PI / 180);

const Pesawat = () => {
  const [data, setData] = useState({ roll: 0, pitch: 0, yaw: 0 });


  return (
    <div className="pesawat">
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        {" "}
        {/* Mengatur posisi awal kamera */}
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Plane
            scale={[0.8, 0.8, 0.8]}
            rotation={[
              toRadians(data.pitch),
              toRadians(-data.yaw),
              toRadians(-data.roll),
            ]}
          />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
    </div>
  );
};

export default Pesawat;
