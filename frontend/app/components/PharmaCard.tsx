import React from "react";

const PharmaCard = ({ pharmacy }: { pharmacy: IPharmacy }) => {
  return (
    <div className="w-full px-4 py-3 rounded-xl shadow-md bg-white text-gray-800 space-y-2 border border-slate-100">
      <p className="font-semibold text-lg">{pharmacy.pharmacyName}</p>
      <p className="text-sm">⭐ {pharmacy.rating}</p>
      <p className="text-sm">📞 {pharmacy.phoneNumber}</p>
      <p className="text-sm">📍 {pharmacy.address}</p>
      <p className="text-sm">9:00 AM - 9:00 PM</p>
      <p className="text-sm">{pharmacy.isOpen ? "Open" : "Closed"}</p>
    </div>
  );
};

export default PharmaCard;
