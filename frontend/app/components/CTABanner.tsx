"use client";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600">
        {/* Animated map pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          Pharmacy Access.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200">
            Anytime. Anywhere.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          PharmySense helps you stay connected to healthcare around you. Find
          trusted pharmacies, compare services, and get the care you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="pill-button bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
            Explore Pharmacies Now
          </button>
          <button className="pill-button border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transition-all">
            Download Mobile App
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0px) translateX(10px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
}
