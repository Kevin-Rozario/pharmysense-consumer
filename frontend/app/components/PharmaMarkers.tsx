import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { FaCapsules } from "react-icons/fa6";

const PharmaMarkers = ({
  pharmacies,
  selectedPharmacy,
  onSelectPharmacy,
}: {
  pharmacies: IPharmacy[];
  selectedPharmacy: IPharmacy | null;
  onSelectPharmacy: (pharmacy: IPharmacy) => void;
}) => {
  return (
    <>
      {pharmacies.map((pharmacy) => (
        <AdvancedMarker
          key={pharmacy.pharmacyId}
          position={pharmacy.location}
          clickable={true}
          onClick={() => onSelectPharmacy(pharmacy)}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md
      ${selectedPharmacy?.pharmacyId === pharmacy.pharmacyId ? "bg-green-600 text-white border-2 border-white" : "bg-white text-green-600 border-2 border-green-600"}`}
          >
            <FaCapsules size={14} />
          </div>
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PharmaMarkers;
