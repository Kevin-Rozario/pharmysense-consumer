import React from "react";
import { Play, MapPin, ArrowRight, Plus, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Enhanced Background with multiple gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/20 to-cyan-400/30"></div>

        {/* Sophisticated animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/25 to-emerald-300/15 rounded-full blur-3xl animate-pulse opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-teal-300/20 to-cyan-300/10 rounded-full blur-3xl animate-pulse opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Subtitle badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-emerald-200">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Healthcare Innovation
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Healthcare.{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-200 to-teal-200">
                  Simplified.
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50/90 leading-relaxed font-light max-w-lg">
              Discover trusted pharmacies near you, filter by services, and get
              directions instantly with our intelligent healthcare platform.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-white text-emerald-600 hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Explore Pharmacies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <Play className="w-5 h-5 fill-current" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-emerald-200">Pharmacies</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-emerald-200">Happy Users</div>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-emerald-200">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Visual */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Main 3D Map Container */}
            <div className="relative w-full h-[500px] bg-gradient-to-br from-white/15 to-white/5 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl shadow-emerald-500/10">
              {/* Floating cards around the map */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      24/7 Pharmacy
                    </div>
                    <div className="text-xs text-gray-500">0.2 miles away</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float z-10"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      Quick Delivery
                    </div>
                    <div className="text-xs text-gray-500">Under 30 min</div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Area */}
              <div className="absolute inset-8">
                <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/30 overflow-hidden">
                  {/* Map grid background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-white/10"></div>
                      ))}
                    </div>
                  </div>

                  {/* Animated pharmacy pins */}
                  <div className="relative w-full h-full">
                    {[
                      {
                        top: "20%",
                        left: "25%",
                        color: "emerald-400",
                        delay: "0.5s",
                      },
                      {
                        top: "30%",
                        right: "20%",
                        color: "cyan-400",
                        delay: "1s",
                      },
                      {
                        bottom: "35%",
                        left: "30%",
                        color: "teal-400",
                        delay: "1.5s",
                      },
                      {
                        bottom: "20%",
                        right: "25%",
                        color: "emerald-300",
                        delay: "2s",
                      },
                      {
                        top: "50%",
                        left: "50%",
                        color: "cyan-500",
                        delay: "2.5s",
                      },
                    ].map((pin, index) => (
                      <div
                        key={index}
                        className={`absolute animate-bounce cursor-pointer group`}
                        style={{
                          top: pin.top,
                          left: pin.left,
                          right: pin.right,
                          bottom: pin.bottom,
                          animationDelay: pin.delay,
                        }}
                      >
                        <div
                          className={`w-10 h-10 bg-${pin.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200 relative`}
                        >
                          <MapPin className="w-5 h-5 text-white" />
                          <div
                            className={`absolute inset-0 bg-${pin.color} rounded-full animate-ping opacity-75`}
                          ></div>
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Pharmacy #{index + 1}
                        </div>
                      </div>
                    ))}

                    {/* Central search indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-cyan-400/50 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-center mt-3">
                        <div className="text-white/90 text-sm font-medium">
                          Your Location
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom info card */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-2xl z-10">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      15
                    </div>
                    <div className="text-xs text-gray-500">Nearby</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">
                      0.8mi
                    </div>
                    <div className="text-xs text-gray-500">Closest</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">24/7</div>
                    <div className="text-xs text-gray-500">Open</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
