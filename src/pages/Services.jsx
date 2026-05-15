import { useState } from "react";
import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f5f1] px-6 py-16">

      <h1 className="text-4xl font-semibold text-center text-[#302D21] mb-10">
        Our Services
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          >

            {/* IMAGE */}
            <div
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-2">

              <h2 className="text-xl font-semibold text-[#302D21]">
                {service.title}
              </h2>

              <p className="text-sm text-gray-600">
                {service.short}
              </p>

              <p className="text-sm font-medium text-[#302D21]">
                {service.price}
              </p>

              <div className="flex gap-2 pt-3">

                {/* QUICK VIEW */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-sm border px-3 py-1 rounded-full hover:bg-[#f1ece6]"
                >
                  Quick View
                </button>

                {/* BOOK */}
                <button
                  onClick={() => navigate("/booking")}
                  className="text-sm bg-[#302D21] text-white px-3 py-1 rounded-full"
                >
                  Book
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6">

          <div className="bg-white max-w-md w-full rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-2 text-[#302D21]">
              {selectedService.title}
            </h2>

            <p className="text-sm text-gray-600 mb-3">
              {selectedService.description}
            </p>

            <p className="font-medium mb-4">
              Price: {selectedService.price}
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-sm"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedService(null);
                  navigate("/booking");
                }}
                className="px-4 py-2 bg-[#302D21] text-white rounded-full text-sm"
              >
                Book Now
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}