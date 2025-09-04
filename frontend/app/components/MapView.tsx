import { useEffect, useState, useMemo } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  ControlPosition,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import { getDistance } from "~/utils/haverDistance";
import CircleOverlay from "~/components/CircleOverlay";
import PharmaMarkers from "~/components/PharmaMarkers";
import CustomZoomControl from "~/components/CustomZoomControl";

const MapView = ({
  pharmacies,
  selectedPharmacy,
  onSelectPharmacy,
}: {
  pharmacies: IPharmacy[];
  selectedPharmacy: IPharmacy | null;
  onSelectPharmacy: (pharmacy: IPharmacy) => void;
}) => {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral>({
    lat: 19.38567402882208,
    lng: 72.82604810315601,
  });
  const [radius, setRadius] = useState(500);
  const [zoom, setZoom] = useState(16);

  // get user GPS location once
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) =>
        setUserLocation({ lat: coords.latitude, lng: coords.longitude })
      );
    }
  }, []);

  // filter pharmacies inside radius
  const filteredPharmacies = useMemo(
    () =>
      pharmacies.filter((pharmacy) => {
        const distance = getDistance(
          userLocation.lat,
          userLocation.lng,
          pharmacy.location.lat,
          pharmacy.location.lng
        );
        return distance <= radius;
      }),
    [pharmacies, userLocation, radius]
  );

  return (
    <div className="h-screen relative">
      {/* Radius Selector */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow text-black z-10 flex space-x-2">
        {[500, 1000, 1500, 2000].map((r) => (
          <button
            key={r}
            onClick={() => setRadius(r)}
            className={`px-3 py-1 rounded-full border ${
              radius === r ? "bg-green-600 text-white" : "bg-white text-black"
            }`}
          >
            {r >= 1000 ? `${r / 1000} km` : `${r} m`}
          </button>
        ))}
      </div>

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          disableDefaultUI
          gestureHandling="greedy"
          zoom={zoom}
          onZoomChanged={(ev) => setZoom(ev.detail.zoom)}
          center={userLocation}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          className="w-full h-full"
        >
          {/* Custom Zoom Control */}
          <CustomZoomControl
            controlPosition={ControlPosition.RIGHT_BOTTOM}
            zoom={zoom}
            onZoomChange={setZoom}
          />

          {/* User Marker */}
          <AdvancedMarker position={userLocation}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#4285F4", // blue
                border: "2px solid white",
                boxShadow: "0 0 6px rgba(0,0,0,0.3)",
              }}
            />
          </AdvancedMarker>

          {/* Circle Overlay */}
          <CircleOverlay center={userLocation} radius={radius} />

          {/* Pharmacy markers */}
          <PharmaMarkers
            pharmacies={filteredPharmacies}
            selectedPharmacy={selectedPharmacy}
            onSelectPharmacy={onSelectPharmacy}
          />
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default MapView;
