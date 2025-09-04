import { useState } from "react";
import { Building2, Clock4, Tablets } from "lucide-react";
import PharmaCard from "./PharmaCard";

const Sidebar = ({
  pharmacies,
  onSelectPharmacy,
}: {
  pharmacies: IPharmacy[];
  onSelectPharmacy: (pharmacy: IPharmacy) => void;
}) => {
  const [filteredPharmacies, setFilteredPharmacies] =
    useState<IPharmacy[]>(pharmacies);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
    if (filter === "open") {
      setFilteredPharmacies(pharmacies.filter((p) => p.isOpen));
    } else if (filter === "24x7") {
      setFilteredPharmacies(pharmacies.filter((p) => p.tags.includes("24x7")));
    } else if (filter === "tablets") {
      setFilteredPharmacies(
        pharmacies.filter((p) => p.tags.includes("tablets"))
      );
    } else {
      setFilteredPharmacies(pharmacies);
    }
  };

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

      {/* Filter */}
      <div className="flex space-x-2">
        <button
          className={`rounded-full px-4 py-2 flex items-center gap-2 border transition ${
            activeFilter === "open"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-black border-gray-200 hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("open")}
        >
          <Clock4 className="w-4 h-4" />
          Open
        </button>

        <button
          className={`rounded-full px-4 py-2 flex items-center gap-2 border transition ${
            activeFilter === "24x7"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-black border-gray-200 hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("24x7")}
        >
          <Building2 className="w-4 h-4" />
          24x7
        </button>

        <button
          className={`rounded-full px-4 py-2 flex items-center gap-2 border transition ${
            activeFilter === "tablets"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-black border-gray-200 hover:bg-gray-100"
          }`}
          onClick={() => handleFilterClick("tablets")}
        >
          <Tablets className="w-4 h-4" />
          Tablets
        </button>
      </div>

      {/* Pharmacy List */}
      <div className="flex-1 overflow-y-auto space-y-4 scrollbar-hide">
        {filteredPharmacies.map((pharmacy) => (
          <div
            key={pharmacy.pharmacyId}
            onClick={() => onSelectPharmacy(pharmacy)}
            className="cursor-pointer"
          >
            <PharmaCard pharmacy={pharmacy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
