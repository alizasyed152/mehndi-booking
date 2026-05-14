import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(data);
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
        await deleteDoc(doc(db, "bookings", id));

        // update UI instantly after delete
        setBookings((prev) => prev.filter((b) => b.id !== id));

        alert("Booking deleted 🗑️");
    } catch (error) {
        console.error("Delete error:", error);
        alert("Failed to delete booking");
    }
    };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard 📊</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Email:</strong> {b.email}</p>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Time:</strong> {b.time}</p>
            <p><strong>Service:</strong> {b.service}</p>

            <button
                onClick={() => handleDelete(b.id)}
                style={{
                    marginTop: "10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
                >
                Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}