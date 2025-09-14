import { SearchIcon, FilterIcon, PharmacyIcon, MapPinIcon } from "../lib/icons";

const steps = [
  {
    icon: SearchIcon,
    title: "Search",
    description:
      "Enter your location or search for specific pharmacies and services",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FilterIcon,
    title: "Filter",
    description:
      "Narrow down results by hours, delivery options, and services offered",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: PharmacyIcon,
    title: "Select",
    description:
      "Choose from verified pharmacies with ratings and detailed information",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: MapPinIcon,
    title: "Navigate",
    description:
      "Get instant directions and contact information for your chosen pharmacy",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto text-pretty">
            Finding the right pharmacy has never been easier. Follow these
            simple steps to get started.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 via-cyan-500 to-blue-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-neutral-200 text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-pretty">
                    {step.description}
                  </p>

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-teal-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
