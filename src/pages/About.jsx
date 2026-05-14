export default function About() {
  return (
    <div className="bg-[#f8f5f1] text-[#302D21]">

      {/* HERO */}
      <section className="bg-[#302D21] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          About Aliza&apos;s Mehndi Designs
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          Where tradition meets creativity — crafting elegant henna designs for every special moment.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Aliza&apos;s Mehndi Designs was created out of a passion for intricate
          henna artistry and cultural expression. What started as a creative
          hobby has grown into a service dedicated to making weddings,
          festivals, and celebrations more meaningful through beautiful,
          handcrafted designs.
          <br /><br />
          Every design is carefully created with attention to detail,
          blending traditional patterns with modern aesthetics to suit each
          individual client.
        </p>
      </section>

      {/* SPECIALTIES */}
      <section className="bg-[#f1ece6] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-10">What We Specialize In</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Bridal Mehndi</h3>
              <p className="text-sm text-gray-600">
                Detailed, elegant full-hand bridal designs tailored for your big day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Festival Designs</h3>
              <p className="text-sm text-gray-600">
                Beautiful henna for Eid, Diwali, and cultural celebrations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">Custom Art</h3>
              <p className="text-sm text-gray-600">
                Personalized designs created to match your style and occasion.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Every design tells a story
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          We believe mehndi is more than decoration — it&apos;s tradition,
          celebration, and personal expression woven together in art.
        </p>
      </section>

    </div>
  );
}