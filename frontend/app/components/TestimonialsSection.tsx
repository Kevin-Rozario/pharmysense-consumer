import { StarIcon } from "../lib/icons";
import { TESTIMONIALS } from "../utils/constants";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 text-balance">
            Trusted by Students, Families & Communities
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied users who rely on PharmySense for their
            healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover-lift border border-neutral-100"
            >
              {/* Quote bubble shape */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45 border-l border-t border-neutral-100"></div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400 hover:scale-110 transition-transform"
                    filled
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 mb-6 leading-relaxed text-pretty">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos section */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 mb-8">
            Trusted by leading healthcare providers
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold text-neutral-400">CVS</div>
            <div className="text-2xl font-bold text-neutral-400">Walgreens</div>
            <div className="text-2xl font-bold text-neutral-400">Rite Aid</div>
            <div className="text-2xl font-bold text-neutral-400">Walmart</div>
          </div>
        </div>
      </div>
    </section>
  );
}
