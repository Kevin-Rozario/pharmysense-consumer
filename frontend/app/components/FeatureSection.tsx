import {
  MapPinIcon,
  StarIcon,
  ClockIcon,
  TruckIcon,
  HeartIcon,
  SearchIcon,
} from "../lib/icons";

const features = [
  {
    icon: MapPinIcon,
    title: "Location-Based Search",
    description:
      "Find pharmacies near you with precise GPS location and distance calculations",
    color: "from-emerald-500 to-teal-500",
    animation: "group-hover:animate-pulse",
  },
  {
    icon: StarIcon,
    title: "Verified Details",
    description:
      "Access verified pharmacy information including licenses, certifications, and services",
    color: "from-teal-500 to-cyan-500",
    animation: "group-hover:rotate-12",
  },
  {
    icon: ClockIcon,
    title: "24/7 & Delivery Filters",
    description:
      "Filter by operating hours and delivery options to find exactly what you need",
    color: "from-cyan-500 to-blue-500",
    animation: "group-hover:scale-110",
  },
  {
    icon: TruckIcon,
    title: "Live Status Updates",
    description:
      "Real-time information about pharmacy hours, availability, and current wait times",
    color: "from-blue-500 to-indigo-500",
    animation: "group-hover:animate-bounce",
  },
  {
    icon: HeartIcon,
    title: "User Ratings & Reviews",
    description:
      "Read authentic reviews and ratings from verified customers in your community",
    color: "from-indigo-500 to-purple-500",
    animation: "group-hover:animate-pulse",
  },
  {
    icon: SearchIcon,
    title: "Quick Contact & Directions",
    description:
      "Get instant directions, phone numbers, and contact information with one tap",
    color: "from-purple-500 to-pink-500",
    animation: "group-hover:scale-110",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-balance">
            Everything You Need to Find Healthcare
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-pretty">
            Our comprehensive platform provides all the tools and information
            you need to make informed healthcare decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover-lift border border-neutral-100 hover:border-emerald-200 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
              >
                <feature.icon
                  className={`w-8 h-8 text-white transition-transform duration-300 ${feature.animation}`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-pretty">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="pill-button bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
