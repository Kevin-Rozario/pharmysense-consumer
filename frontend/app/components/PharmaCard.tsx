import { Star, MapPin } from "lucide-react";

const PharmaCard = ({ pharmacy }: { pharmacy: IPharmacy }) => {
  return (
    <div
      className="w-full px-5 py-4 rounded-2xl shadow-lg bg-white text-gray-800 
      border border-slate-200 hover:shadow-xl transition cursor-pointer space-y-2"
    >
      {/* Name */}
      <p className="font-semibold text-lg truncate">{pharmacy.pharmacyName}</p>

      {/* Rating */}
      <p className="text-sm flex items-center gap-2 font-medium text-gray-700">
        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
        {pharmacy.rating}
        <span className="text-gray-500">(300)</span>
      </p>

      {/* Address */}
      <p className="text-sm text-gray-600 leading-snug line-clamp-2">
        {pharmacy.address}
      </p>

      {/* Distance & Status */}
      <div className="flex justify-between items-center font-semibold mt-2">
        <p className="text-sm flex items-center gap-2 text-gray-700">
          <MapPin className="w-4 h-4 text-green-600" />
          {pharmacy.distance}
        </p>
        <p
          className={`text-xs px-3 py-1 rounded-full ${
            pharmacy.isOpen
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {pharmacy.isOpen ? "Open" : "Closed"}
        </p>
      </div>
    </div>
  );
};

export default PharmaCard;
