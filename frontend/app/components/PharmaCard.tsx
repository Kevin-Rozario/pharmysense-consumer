import { Star, MapPin } from "lucide-react";

const PharmaCard = ({ pharmacy }: { pharmacy: IPharmacy }) => {
  return (
    <div className="w-full px-4 py-3 rounded-xl shadow-md bg-white text-gray-800 space-y-2 border border-slate-100">
      <p className="font-semibold text-lg">{pharmacy.pharmacyName}</p>

      <p className="text-sm flex items-center gap-2 font-semibold">
        <Star className="w-4 h-4 fill-orange-300" /> {pharmacy.rating}
        <span>(300)</span>
      </p>

      <p className="text-sm flex items-center gap-4 text-justify">
        {pharmacy.address}
      </p>

      <div className="flex justify-between items-center font-semibold text-black rounded-full">
        <p className="text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {pharmacy.distance}
        </p>
        <p
          className={`text-sm ${pharmacy.isOpen ? "text-green-600" : "text-red-600"}`}
        >
          {pharmacy.isOpen ? "Open" : "Closed"}
        </p>
      </div>
    </div>
  );
};

export default PharmaCard;
