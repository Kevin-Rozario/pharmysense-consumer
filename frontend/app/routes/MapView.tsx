import { useEffect, useState } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import pharmacies from "../../data/pharmacies.json";
import { getDistance } from "~/utils/haverDistance";
import CircleOverlay from "~/components/CircleOverlay";
import PharmaMarkers from "~/components/PharmaMarkers";

const MapView = () => {
  const [userLocation, setUserLocation] = useState({
    lat: 19.38567402882208,
    lng: 72.82604810315601,
  });
  const [radius, setRadius] = useState(500); // 500 m default

  // get user GPS location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  // filter pharmacies inside radius
  const filteredPharmacies = pharmacies.filter((pharmacy) => {
    const distance = getDistance(
      userLocation.lat,
      userLocation.lng,
      pharmacy.location.lat,
      pharmacy.location.lng
    );
    return distance <= radius;
  });

  return (
    <div className="h-screen relative">
      {/* Radius Selector */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow text-black z-10">
        <label className="mr-2 font-medium">Radius:</label>
        <select
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          <option value={500}>500 m</option>
          <option value={1000}>1 km</option>
          <option value={1500}>1.5 km</option>
          <option value={2000}>2 km</option>
        </select>
      </div>

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          zoom={14.8}
          center={userLocation}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          className="w-full h-full"
        >
          {/* User Marker */}
          <Marker position={userLocation} label="You" />

          {/* Circle Overlay */}
          <CircleOverlay center={userLocation} radius={radius} />

          {/* Pharmacy markers */}
          <PharmaMarkers pharmacies={filteredPharmacies} />
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default MapView;
