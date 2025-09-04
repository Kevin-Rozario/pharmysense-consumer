import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import MapView from "../components/MapView";
import PharmaDetailCard from "../components/PharmaDetailCard";
import pharmacies from "../../data/pharmacies.json";

const Map = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState<IPharmacy | null>(
    null
  );

  return (
    <div className="h-screen relative w-full">
      {/* Sidebar */}
      <Sidebar pharmacies={pharmacies} onSelectPharmacy={setSelectedPharmacy} />

      {/* Map */}
      <div className="h-full w-full">
        <MapView
          pharmacies={pharmacies}
          selectedPharmacy={selectedPharmacy}
          onSelectPharmacy={setSelectedPharmacy}
        />
      </div>

      {/* Show detail card only if a pharmacy is selected */}
      {selectedPharmacy && (
        <PharmaDetailCard
          pharmacy={selectedPharmacy}
          onClose={() => setSelectedPharmacy(null)}
        />
      )}
    </div>
  );
};

export default Map;
