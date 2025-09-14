import { StarIcon, MapPinIcon } from "../lib/icons";
import pharmacies from "../../data/pharmacies.json";

export default function PharmacyCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-balance">
            Featured Pharmacies
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto text-pretty">
            Discover top-rated pharmacies in your area with verified reviews and
            comprehensive services.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.pharmacyId}
                className="flex-none w-80 glassmorphism rounded-2xl p-6 border border-neutral-200 hover-lift snap-start"
              >
                {/* Pharmacy image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={pharmacy.image || "/placeholder.svg"}
                    alt={pharmacy.pharmacyName}
                    className="w-full h-full object-cover"
                  />
                  {/* Status badge */}
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                      pharmacy.isOpen
                        ? "bg-emerald-500 text-white"
                        : "bg-neutral-500 text-white"
                    }`}
                  >
                    {pharmacy.isOpen ? "Open" : "Closed"}
                  </div>
                  {/* 24/7 badge */}
                  {pharmacy.tags.includes("24x7") && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
                      24/7
                    </div>
                  )}
                </div>

                {/* Pharmacy info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-neutral-800 flex-1">
                      {pharmacy.pharmacyName}
                    </h3>
                    <div className="flex items-center gap-1 ml-2">
                      <StarIcon className="w-4 h-4 text-yellow-400" filled />
                      <span className="text-sm font-medium text-neutral-600">
                        {pharmacy.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-600">
                    <MapPinIcon className="w-4 h-4" />
                    <span className="text-sm">{pharmacy.address}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {pharmacy.distance} miles away
                    </span>
                    {pharmacy.tags.includes("Home Delivery") && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        Delivery Available
                      </span>
                    )}
                  </div>

                  <button className="w-full pill-button bg-emerald-500 hover:bg-emerald-600 text-white py-3 font-medium mt-4">
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {pharmacies.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-emerald-500 cursor-pointer transition-colors"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
