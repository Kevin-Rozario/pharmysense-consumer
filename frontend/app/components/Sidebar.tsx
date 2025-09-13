import { useState, useEffect, useMemo } from "react";
import { Building2, Clock4, Star, Box } from "lucide-react";
import PharmaCard from "./PharmaCard";

const Sidebar = ({
  pharmacies,
  onSelectPharmacy,
}: {
  pharmacies: IPharmacy[];
  onSelectPharmacy: (pharmacy: IPharmacy) => void;
}) => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Compute filtered pharmacies whenever search/filter changes
  const filteredList = useMemo(() => {
    let list = [...pharmacies];

    // Apply filter
    if (activeFilter === "open") {
      list = list.filter((p) => p.isOpen);
    } else if (activeFilter === "24x7") {
      list = list.filter((p) => p.tags.includes("24x7"));
    } else if (activeFilter === "delivery") {
      list = list.filter((p) => p.tags.includes("delivery"));
    } else if (activeFilter === "rating") {
      list = list.filter((p) => p.rating >= 4);
    }

    // Apply search by name
    if (search.trim()) {
      list = list.filter((p) =>
        p.pharmacyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    return list;
  }, [pharmacies, search, activeFilter]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  return (
    <div
      className="absolute left-4 top-4 bottom-4 w-80 z-50 
      bg-white/90 backdrop-blur-md rounded-2xl shadow-xl 
      flex flex-col overflow-hidden border border-gray-200"
    >
      {/* Search + Filters */}
      <div className="p-4 border-b border-gray-200 space-y-3 sticky top-0 bg-white/90 backdrop-blur-md z-10">
        {/* Search Box */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pharmacy..."
          className="w-full pl-5 pr-10 py-2 bg-white placeholder:text-slate-400
          text-slate-600 text-sm border border-slate-200 rounded-full transition
          duration-300 ease-in-out focus:outline-none focus:border-green-500
          hover:border-slate-300 shadow-sm"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            className={`rounded-full px-3 py-1.5 text-sm flex items-center gap-2 border transition ${
              activeFilter === "open"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-black border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => handleFilterClick("open")}
          >
            <Clock4 className="w-4 h-4" /> Open
          </button>

          <button
            className={`rounded-full px-3 py-1.5 text-sm flex items-center gap-2 border transition ${
              activeFilter === "24x7"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-black border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => handleFilterClick("24x7")}
          >
            <Building2 className="w-4 h-4" /> 24x7
          </button>

          <button
            className={`rounded-full px-3 py-1.5 text-sm flex items-center gap-2 border transition ${
              activeFilter === "delivery"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-black border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => handleFilterClick("delivery")}
          >
            <Box className="w-4 h-4" /> Delivery
          </button>

          <button
            className={`rounded-full px-3 py-1.5 text-sm flex items-center gap-2 border transition ${
              activeFilter === "rating"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-black border-gray-200 hover:bg-gray-100"
            }`}
            onClick={() => handleFilterClick("rating")}
          >
            <Star className="w-4 h-4" /> Rating 4.0+
          </button>
        </div>
      </div>

      {/* Pharmacy List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {filteredList.length === 0 ? (
          <p className="text-sm text-gray-500 text-center pt-8">
            No pharmacies found!
          </p>
        ) : (
          filteredList.map((pharmacy) => (
            <div
              key={pharmacy.pharmacyId}
              onClick={() => onSelectPharmacy(pharmacy)}
              className="cursor-pointer transition hover:scale-[1.02]"
            >
              <PharmaCard pharmacy={pharmacy} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
