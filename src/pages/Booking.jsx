import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();
  const selectedService = location.state?.service || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: selectedService,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const q = query(
        collection(db, "bookings"),
        where("date", "==", formData.date),
        where("time", "==", formData.time)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("This time slot is already booked 😢");
        return;
      }

      await addDoc(collection(db, "bookings"), {
        ...formData,
        createdAt: new Date(),
      });

      alert("Booking confirmed 💍✨");

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        service: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong 😢");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f1] flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-xl shadow-md space-y-4"
      >

        <h1 className="text-2xl font-semibold text-[#302D21] mb-2">
          Book Your Mehndi Appointment 💍
        </h1>

        {/* NAME */}
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        {/* DATE */}
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        {/* TIME */}
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        >
          <option value="">Select Time Slot</option>
          <option value="10am">10:00 AM</option>
          <option value="12pm">12:00 PM</option>
          <option value="2pm">2:00 PM</option>
          <option value="4pm">4:00 PM</option>
        </select>

        {/* SERVICE (AUTO FILLED) */}
        <input
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service"
          className="w-full border px-4 py-2 rounded-lg bg-gray-100"
        />

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-[#302D21] text-white py-3 rounded-full hover:opacity-90 transition"
        >
          Submit Booking
        </button>

      </form>
    </div>
  );
}