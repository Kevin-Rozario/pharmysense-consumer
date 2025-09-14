import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-neutral-800 mb-8">
            About PharmySense
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-neutral-600 leading-relaxed mb-6">
              PharmySense is dedicated to connecting communities with trusted
              healthcare services. Our platform makes it easy to find, compare,
              and access pharmacies in your area.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Founded with the mission to simplify healthcare access, we provide
              comprehensive information about pharmacy services, hours, and
              availability to help you make informed decisions about your
              healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
