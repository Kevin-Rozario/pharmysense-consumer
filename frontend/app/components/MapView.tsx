import { useEffect, useMemo } from "react";
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
import { usePharmaStore } from "~/stores/pharmaStore";

const MapView = ({
  pharmacies,
  onPharmaciesFiltered,
  selectedPharmacy,
  onSelectPharmacy,
}: {
  pharmacies: IPharmacy[];
  onPharmaciesFiltered: (list: IPharmacy[]) => void;
  selectedPharmacy: IPharmacy | null;
  onSelectPharmacy: (pharmacy: IPharmacy) => void;
}) => {
  const { userLocation, setUserLocation, radius, zoom, setZoom } =
    usePharmaStore();

  // get user GPS location once
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) =>
        setUserLocation({ lat: coords.latitude, lng: coords.longitude })
      );
    }
  }, [setUserLocation]);

  // Filter pharmacies inside radius
  const filteredPharmacies = useMemo(
    () =>
      userLocation
        ? pharmacies.filter((pharmacy) => {
            const distance = getDistance(
              userLocation.lat,
              userLocation.lng,
              pharmacy.location.lat,
              pharmacy.location.lng
            );
            return distance <= radius;
          })
        : [],
    [pharmacies, userLocation, radius]
  );

  // Notify parent whenever pharmacies in range change
  useEffect(() => {
    onPharmaciesFiltered(filteredPharmacies);
  }, [filteredPharmacies, onPharmaciesFiltered]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Radius Selector */}
      <div className="absolute top-6 right-6 bg-white p-3 rounded-2xl shadow-lg z-10 flex space-x-3">
        {[500, 1000, 1500, 2000].map((r) => (
          <button
            key={r}
            onClick={() => usePharmaStore.setState({ radius: r })}
            className={`px-4 py-2 rounded-full font-medium transition ${
              radius === r
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {r >= 1000 ? `${r / 1000} km` : `${r} m`}
          </button>
        ))}
      </div>

      {/* Google Map */}
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
            <div className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 bg-blue-400 opacity-30 rounded-full animate-ping" />
              <span className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow" />
            </div>
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
