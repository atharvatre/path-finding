"use client";
import Maps from "../_components/Maps";
import Particles from "../_components/particles";
const myMap: React.FC = () => {
  return (
    <div className="">
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={60}
      />
      <h1 className="text-center">Map Preview</h1>
      <Maps containerId="map" />
    </div>
  );
};

export default myMap;
