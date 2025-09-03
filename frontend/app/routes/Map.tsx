import React from "react";
import Sidebar from "~/components/Sidebar";
import MapView from "../components/MapView";
import pharmacies from "../../data/pharmacies.json";

const Map = () => {
  return (
    <div className="h-screen relative w-full">
      <Sidebar pharmacies={pharmacies} />
      <div className="h-full w-full">
        <MapView pharmacies={pharmacies} />
      </div>
    </div>
  );
};

export default Map;
