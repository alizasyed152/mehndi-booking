import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      name: "Bridal Mehndi",
      desc: "Intricate full-hand bridal designs for your special day.",
    },
    {
      name: "Party Mehndi",
      desc: "Elegant designs perfect for events and celebrations.",
    },
    {
      name: "Festival Designs",
      desc: "Beautiful henna for Eid, Diwali, and cultural events.",
    },
  ];

  return (
    <div className="bg-[#f8f5f1] text-[#302D21] py-20 px-6">

      <h1 className="text-4xl font-semibold text-center mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.name}
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              {service.desc}
            </p>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: { service: service.name },
                })
              }
              className="bg-[#302D21] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              Book This
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}