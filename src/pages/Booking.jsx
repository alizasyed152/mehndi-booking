import { useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Booking() {
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const [bookedTimes, setBookedTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // ✅ NEW: booking success state
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const timeSlots = ["10am", "12pm", "2pm", "4pm"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchBookedTimes = async (date) => {
    if (!date) return;

    const q = query(
      collection(db, "bookings"),
      where("date", "==", date)
    );

    const snapshot = await getDocs(q);

    const times = snapshot.docs.map((doc) => doc.data().time);
    setBookedTimes(times);
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = getDaysInMonth(year, month);

    const calendar = [];

    for (let i = 1; i <= days; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(
        2,
        "0"
      )}-${String(i).padStart(2, "0")}`;

      calendar.push(dateStr);
    }

    return calendar;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);

    setFormData((prev) => ({
      ...prev,
      date,
      time: "",
    }));

    fetchBookedTimes(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      alert("Please select a date and time");
      return;
    }

    setShowConfirmModal(true);
  };

  const confirmBooking = async () => {
    try {
      const q = query(
        collection(db, "bookings"),
        where("date", "==", formData.date),
        where("time", "==", formData.time)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        alert("This time slot is already booked 😢");
        return;
      }

      const docRef = await addDoc(collection(db, "bookings"), {
        ...formData,
        userId: user?.uid,
        createdAt: new Date(),
      });

      // ✅ NEW: store confirmed booking + switch page
      setConfirmedBooking({
        id: docRef.id,
        ...formData,
      });

      setBookingConfirmed(true);
      setShowConfirmModal(false);

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        service: "",
      });

      setBookedTimes([]);
      setSelectedDate("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong 😢");
    }
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // ---------------- SUCCESS PAGE ----------------
  if (bookingConfirmed && confirmedBooking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5f1] px-6">
        <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md w-full">

          <h1 className="text-3xl font-semibold text-[#302D21] mb-4">
            Booking Confirmed 💍✨
          </h1>

          <p className="text-gray-600 mb-6">
            Your appointment has been successfully scheduled.
          </p>

          <div className="bg-[#f1ece6] p-4 rounded-lg text-sm text-left space-y-2">
            <p><strong>Name:</strong> {confirmedBooking.name}</p>
            <p><strong>Date:</strong> {confirmedBooking.date}</p>
            <p><strong>Time:</strong> {confirmedBooking.time}</p>
            <p><strong>Service:</strong> {confirmedBooking.service}</p>
          </div>

          <button
            onClick={() => setBookingConfirmed(false)}
            className="mt-6 bg-[#302D21] text-white px-6 py-3 rounded-full"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  // ---------------- MAIN BOOKING PAGE ----------------
  return (
    <div className="min-h-screen bg-[#f8f5f1] px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h1 className="text-3xl font-semibold mb-6 text-[#302D21]">
            Book Your Mehndi Appointment 💍
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
              required
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
              required
            />

            {/* MONTH NAV */}
            <div className="flex items-center justify-between mb-2">
              <button type="button" onClick={prevMonth}>◀</button>

              <p className="text-sm font-medium">
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <button type="button" onClick={nextMonth}>▶</button>
            </div>

            {/* CALENDAR */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {generateCalendar().map((date) => {
                const isSelected = selectedDate === date;
                const isPast =
                  new Date(date) <
                  new Date().setHours(0, 0, 0, 0);

                return (
                  <button
                    key={date}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDateClick(date)}
                    className={`p-2 rounded-md border ${
                      isPast
                        ? "bg-gray-100 text-gray-400"
                        : isSelected
                        ? "bg-[#302D21] text-white"
                        : "bg-white hover:bg-[#f1ece6]"
                    }`}
                  >
                    {new Date(date).getDate()}
                  </button>
                );
              })}
            </div>

            {/* TIME */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {timeSlots.map((time) => {
                const isBooked = bookedTimes.includes(time);
                const isSelected = formData.time === time;

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={isBooked}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, time }))
                    }
                    className={`px-4 py-3 rounded-lg border text-sm ${
                      isBooked
                        ? "bg-gray-100 text-gray-400"
                        : isSelected
                        ? "bg-[#302D21] text-white"
                        : "hover:bg-[#f1ece6]"
                    }`}
                  >
                    {time === "10am" && "10:00 AM"}
                    {time === "12pm" && "12:00 PM"}
                    {time === "2pm" && "2:00 PM"}
                    {time === "4pm" && "4:00 PM"}
                  </button>
                );
              })}
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
              required
            >
              <option value="">Select Service</option>
              <option value="bridal">Bridal Mehndi</option>
              <option value="party">Party Mehndi</option>
              <option value="festival">Festival Designs</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#302D21] text-white py-3 rounded-full"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">
              What to Expect
            </h2>
            <p className="text-sm text-gray-600">
              Custom hand-drawn mehndi designs for your special event.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">
              Booking Policy
            </h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Arrive 10 minutes early</li>
              <li>• No double bookings allowed</li>
              <li>• 24h cancellation policy</li>
            </ul>
          </div>

          <div className="bg-[#302D21] text-white p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Need Help?
            </h2>
            <p className="text-sm text-white/80">
              Contact us if you have any questions.
            </p>
          </div>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-lg font-semibold mb-4">
              Confirm Booking?
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              {formData.date} at {formData.time}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm"
              >
                Cancel
              </button>

              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-[#302D21] text-white rounded-full text-sm"
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}