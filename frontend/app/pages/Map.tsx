import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import MapView from "~/components/MapView";
import PharmaDetailCard from "~/components/PharmaDetailCard";
import pharmacies from "../../data/pharmacies.json";

import type { Route } from "../pages/+types/Map";
import type { LoaderFunctionArgs } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pharmysense | Map" },
    { name: "description", content: "Map view of Pharmysense" },
  ];
}

const Map = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState<IPharmacy | null>(
    null
  );
  const [filteredPharmacies, setFilteredPharmacies] = useState<IPharmacy[]>([]);

  return (
    <div className="h-screen relative w-full flex">
      {/* Sidebar shows only filtered pharmacies */}
      <Sidebar
        pharmacies={filteredPharmacies}
        onSelectPharmacy={setSelectedPharmacy}
      />

      {/* Map handles filtering + passes pharmacies back */}
      <div className="flex-1 h-full">
        <MapView
          pharmacies={pharmacies}
          onPharmaciesFiltered={setFilteredPharmacies}
          selectedPharmacy={selectedPharmacy}
          onSelectPharmacy={setSelectedPharmacy}
        />
      </div>

      {/* Pharmacy Detail Card */}
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
