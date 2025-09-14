import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-neutral-800 mb-8">
            Contact Us
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                  Get in Touch
                </h2>
                <p className="text-neutral-600 mb-4">
                  Have questions or feedback? We'd love to hear from you.
                </p>
                <div className="space-y-2">
                  <p className="text-neutral-600">
                    Email: support@pharmysense.com
                  </p>
                  <p className="text-neutral-600">Phone: (555) 123-4567</p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                  <button className="pill-button bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-medium">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
