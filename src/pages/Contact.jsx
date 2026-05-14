import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: new Date(),
      });

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1] px-6 py-16">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold text-[#302D21] text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Have questions about bookings, pricing, or designs?
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <input
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border px-4 py-3 rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#302D21] text-white py-3 rounded-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {success && (
            <p className="text-green-600 text-center mt-4">
              Message sent successfully ✅
            </p>
          )}

        </div>
      </div>
    </div>
  );
}