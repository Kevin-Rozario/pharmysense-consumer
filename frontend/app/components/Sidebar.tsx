import React from "react";
import PharmaCard from "./PharmaCard";

const Sidebar = ({ pharmacies }: { pharmacies: IPharmacy[] }) => {
  return (
    <div className="absolute left-0 top-0 h-full w-90 p-4 z-50 bg-transparent flex flex-col space-y-4">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search pharmacy..."
        className="w-full pl-5 pr-10 py-2 bg-white placeholder:text-slate-400
        text-slate-600 text-sm border border-slate-200 rounded-full transition
        duration-300 ease-in-out focus:outline-none focus:border-slate-400
        hover:border-slate-300 shadow-sm focus:shadow selection:bg-slate-300"
      />

      {/* Pharmacy List */}
      <div className="flex-1 overflow-y-auto space-y-4 scrollbar-hide">
        {pharmacies.map((pharmacy) => (
          <PharmaCard key={pharmacy.pharmacyId} pharmacy={pharmacy} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
