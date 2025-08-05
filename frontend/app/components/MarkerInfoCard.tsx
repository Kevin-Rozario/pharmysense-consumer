import React from "react";

const MarkerInfoCard = ({
  selectedPharmacy,
}: {
  selectedPharmacy: IPharmacy;
}) => {
  return (
    <div className="w-80 px-4 py-1 rounded-xl shadow-lg bg-white text-gray-800 space-y-3">
      <h2 className="text-lg font-semibold text-black">
        {selectedPharmacy.pharmacyName}
      </h2>

      <div className="flex items-start gap-2">
        <span className="text-yellow-500 text-lg">⭐</span>
        <p className="text-sm">
          <span className="font-medium">Rating:</span> {selectedPharmacy.rating}
        </p>
      </div>

      <div className="flex items-start gap-2">
        <span className="text-green-600 text-lg">📞</span>
        <p className="text-sm">
          <span className="font-medium">Phone:</span>{" "}
          {selectedPharmacy.phoneNumber}
        </p>
      </div>

      <div className="flex items-start gap-2">
        <span className="text-red-600 text-lg">📍</span>
        <p className="text-sm">
          <span className="font-medium">Address:</span>{" "}
          {selectedPharmacy.address}
        </p>
      </div>
    </div>
  );
};

export default MarkerInfoCard;
