import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import mehndi1 from "../assets/mehndi1.jpg";

export default function Home() {
  return (
    <div className="bg-[#f8f5f1] text-[#302D21] overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[calc(100vh-88px)] flex items-center px-6 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,28,22,0.25), rgba(30,28,22,0.35)),
            url(${mehndi1})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
              Elegant Mehndi <br />
              Designed for <br />
              Your Special Moments
            </h1>

            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
              Traditional henna artistry with a modern luxury experience —
              handcrafted bridal, festival, and celebration designs tailored uniquely for you.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                to="/services"
                className="bg-[#E6C7A8] text-[#302D21] px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg"
              >
                Explore Services
              </Link>

              <Link
                to="/booking"
                className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#302D21] transition duration-300"
              >
                Book Appointment
              </Link>

            </div>

          </div>

          {/* RIGHT FLOATING CARD */}
          <div className="relative hidden md:flex items-center justify-center h-full">

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[2rem] p-8 text-white shadow-2xl max-w-sm">

              <p className="uppercase text-xs tracking-[0.25em] text-[#E6C7A8] mb-3">
                Summer 2026
              </p>

              <h2 className="text-3xl font-semibold leading-tight">
                Bridal Appointments <br /> Now Open
              </h2>

              <p className="mt-5 text-white/75 text-sm leading-relaxed">
                Secure your wedding mehndi session early for custom consultation,
                premium detailing, and personalized bridal artistry.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="text-2xl font-semibold">100+</h3>
                  <p className="text-xs text-white/70 mt-1">Happy Clients</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="text-2xl font-semibold">5+</h3>
                  <p className="text-xs text-white/70 mt-1">Years Experience</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST BAR */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white border-y border-[#e8dfd5] py-7"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-sm text-gray-600 font-medium">
          <p>Organic Henna</p>
          <p>Bridal Specialist</p>
          <p>Custom Designs</p>
          <p>Online Booking</p>
          <p>Luxury Experience</p>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="uppercase tracking-[0.25em] text-[#9b8168] text-sm mb-4">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Crafted for Every Celebration
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
              From intricate bridal patterns to elegant event designs,
              every mehndi session is customized with detail and care.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Bridal"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Bridal Mehndi</h3>
                <p className="text-gray-600 text-sm">
                  Luxurious full-hand bridal artistry tailored for weddings.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617191519105-d07b98b4f5c5?auto=format&fit=crop&w=1200&q=80"
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Party"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Party Mehndi</h3>
                <p className="text-gray-600 text-sm">
                  Elegant designs for celebrations and events.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition duration-500">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605631982771-7f3d1d0b2c5f?auto=format&fit=crop&w=1200&q=80"
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  alt="Festival"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Festival Designs</h3>
                <p className="text-gray-600 text-sm">
                  Traditional and modern henna for cultural celebrations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </motion.section>

    </div>
  );
}