import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";
import MarkerInfoCard from "./MarkerInfoCard";

const PharmaMarkers = ({ pharmacies }: { pharmacies: IPharmacy[] }) => {
  const [selectedPharmacy, setSelectedPharmacy] = useState<IPharmacy | null>(
    null
  );

  const handleMarkerClick = useCallback((pharmacy: IPharmacy) => {
    setSelectedPharmacy(pharmacy);
  }, []);

  const handleCloseInfoWindow = useCallback(() => {
    setSelectedPharmacy(null);
  }, []);

  return (
    <>
      {pharmacies.map((pharmacy) => (
        <AdvancedMarker
          key={pharmacy.pharmacyId}
          position={pharmacy.location}
          clickable={true}
          onClick={() => handleMarkerClick(pharmacy)}
        />
      ))}

      {selectedPharmacy && (
        <InfoWindow
          position={selectedPharmacy.location}
          onCloseClick={handleCloseInfoWindow}
          pixelOffset={[0, -30]}
        >
          <MarkerInfoCard selectedPharmacy={selectedPharmacy} />
        </InfoWindow>
      )}
    </>
  );
};

export default PharmaMarkers;
