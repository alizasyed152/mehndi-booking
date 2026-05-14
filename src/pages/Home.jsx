export default function Home() {
  return (
    <div className="bg-[#f8f5f1] text-[#302D21]">

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#302D21] to-[#3b3628] text-white">

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Elegant Mehndi Designs <br /> for Every Occasion
        </h1>

        <p className="mt-4 text-white/80 max-w-xl text-sm md:text-base">
          Traditional henna artistry with a modern touch — crafted with care for weddings, festivals, and special moments.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#services"
            className="bg-[#E6C7A8] text-[#302D21] px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            View Services
          </a>

          <a
            href="#contact"
            className="border border-white/40 px-6 py-2 rounded-full hover:bg-white hover:text-[#302D21] transition"
          >
            Book Now
          </a>
        </div>

      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Bridal Mehndi</h3>
            <p className="text-sm text-gray-600">
              Intricate full-hand bridal designs tailored for your special day.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Party Mehndi</h3>
            <p className="text-sm text-gray-600">
              Elegant and quick designs perfect for celebrations and events.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Festival Designs</h3>
            <p className="text-sm text-gray-600">
              Beautiful henna for Eid, Diwali, and cultural celebrations.
            </p>
          </div>

        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 px-6 bg-[#f1ece6] text-center">

        <h2 className="text-3xl font-semibold mb-10">Recent Designs</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="h-40 bg-[#ddd] rounded-lg"></div>
          <div className="h-40 bg-[#ddd] rounded-lg"></div>
          <div className="h-40 bg-[#ddd] rounded-lg"></div>
          <div className="h-40 bg-[#ddd] rounded-lg"></div>
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We specialize in handcrafted mehndi designs that blend tradition with modern elegance. Every design is customized, detailed, and created with care to make your moments memorable.
        </p>

      </section>

    </div>
  );
}