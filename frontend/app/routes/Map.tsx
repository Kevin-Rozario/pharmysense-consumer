import React from "react";
import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import Marker from "~/components/Marker";
import pharmacies from "../../data/pharmacies.json";

const Map = () => {
  const position = { lat: 19.38567402882208, lng: 72.82604810315601 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="h-screen">
        <GoogleMap
          zoom={16}
          defaultCenter={position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
        >
          <Marker pharmacies={pharmacies} />
        </GoogleMap>
      </div>
    </APIProvider>
  );
};

export default Map;
