import { MapPinIcon } from "../lib/icons";

export default function MapPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-balance">
            Interactive Map Experience
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto text-pretty">
            Visualize pharmacy locations, get real-time information, and plan
            your route with our interactive map.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map container */}
          <div className="relative h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden shadow-2xl border border-emerald-200">
            {/* Mock map background */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200"></div>
              {/* Grid pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* Sample pharmacy pins */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Pin 1 */}
                <div className="absolute top-12 left-16 group cursor-pointer">
                  <div
                    className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glassmorphism px-3 py-2 rounded-lg text-sm font-medium text-neutral-800 whitespace-nowrap">
                      HealthPlus Pharmacy
                    </div>
                  </div>
                </div>

                {/* Pin 2 */}
                <div className="absolute top-24 right-12 group cursor-pointer">
                  <div
                    className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glassmorphism px-3 py-2 rounded-lg text-sm font-medium text-neutral-800 whitespace-nowrap">
                      MediCare Express
                    </div>
                  </div>
                </div>

                {/* Pin 3 */}
                <div className="absolute bottom-20 left-20 group cursor-pointer">
                  <div
                    className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glassmorphism px-3 py-2 rounded-lg text-sm font-medium text-neutral-800 whitespace-nowrap">
                      Community Wellness
                    </div>
                  </div>
                </div>

                {/* Pin 4 */}
                <div className="absolute bottom-12 right-24 group cursor-pointer">
                  <div
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
                    style={{ animationDelay: "2s" }}
                  >
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glassmorphism px-3 py-2 rounded-lg text-sm font-medium text-neutral-800 whitespace-nowrap">
                      24/7 Pharmacy
                    </div>
                  </div>
                </div>

                {/* Central location indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-medium text-neutral-600">
                    Your Location
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay CTA */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="pill-button glassmorphism border border-white/30 text-neutral-800 hover:bg-white/90 px-6 py-3 font-medium transition-all">
                Try Full Map Experience →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
