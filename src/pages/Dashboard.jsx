import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  const user = auth.currentUser;

  // Normalize today's date to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Separate bookings
  const upcomingBookings = bookings.filter(
    (booking) => new Date(booking.date) >= today
  );

  const pastBookings = bookings.filter(
    (booking) => new Date(booking.date) < today
  );

  const handleCancelBooking = async (bookingId) => {
    const confirmDelete = window.confirm(
        "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    try {
        await deleteDoc(doc(db, "bookings", bookingId));

        setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== bookingId)
        );

    } catch (error) {
        console.error(error);
        alert("Failed to cancel booking.");
    }
    };

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "bookings"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(q);

        const bookingData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(bookingData);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, [user]);

  return (
    <div className="min-h-screen bg-[#f8f5f1] px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold text-[#302D21] mb-4">
          My Dashboard
        </h1>

        {/* USER EMAIL */}
        {user && (
          <p className="text-gray-600 mb-12">
            Signed in as {user.email}
          </p>
        )}

        {/* UPCOMING BOOKINGS */}
        <div className="mb-16">

          <h2 className="text-2xl font-semibold text-[#302D21] mb-6">
            Upcoming Bookings
          </h2>

          {upcomingBookings.length === 0 ? (
            <p className="text-gray-600">
              No upcoming bookings.
            </p>
          ) : (
            <div className="grid gap-6">

              {upcomingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="text-xl font-semibold text-[#302D21] capitalize">
                        {booking.service}
                      </h3>

                      <p className="text-gray-600 mt-3">
                        Date: {booking.date}
                      </p>

                      <p className="text-gray-600">
                        Time: {booking.time}
                      </p>

                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="mt-4 text-sm border border-red-300 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition"
                    >
                        Cancel Booking
                    </button>
                    </div>

                    <span className="text-xs bg-[#E6C7A8] text-[#302D21] px-3 py-1 rounded-full font-medium">
                      Upcoming
                    </span>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

        {/* PAST BOOKINGS */}
        <div>

          <h2 className="text-2xl font-semibold text-[#302D21] mb-6">
            Past Bookings
          </h2>

          {pastBookings.length === 0 ? (
            <p className="text-gray-600">
              No past bookings.
            </p>
          ) : (
            <div className="grid gap-6">

              {pastBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white p-6 rounded-xl shadow-sm opacity-80"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="text-xl font-semibold text-[#302D21] capitalize">
                        {booking.service}
                      </h3>

                      <p className="text-gray-600 mt-3">
                        Date: {booking.date}
                      </p>

                      <p className="text-gray-600">
                        Time: {booking.time}
                      </p>
                    </div>

                    <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                      Completed
                    </span>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}