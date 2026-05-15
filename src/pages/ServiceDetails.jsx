import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="p-10">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f1] px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

        <img
          src={service.image}
          className="w-full h-64 object-cover"
          alt={service.title}
        />

        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-semibold text-[#302D21]">
            {service.title}
          </h1>

          <p className="text-gray-600">
            {service.description}
          </p>

          <p className="font-medium">
            Price Range: {service.price}
          </p>

          <button
            onClick={() => navigate("/booking")}
            className="mt-4 bg-[#302D21] text-white px-6 py-3 rounded-full"
          >
            Book This Service
          </button>
        </div>

      </div>
    </div>
  );
}