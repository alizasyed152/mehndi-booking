import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromBooking = location.state?.from?.pathname === "/booking";
  const from = location.state?.from?.pathname || "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      navigate(from, { replace: true });

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f1] px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >

        {fromBooking && (
            <p className="text-sm text-center text-[#302D21] font-medium bg-[#f8f5f1] py-2 rounded-lg">
            Please log in to continue booking your appointment 💍
            </p>
        )}

        <h1 className="text-2xl font-semibold text-[#302D21]">
          Welcome Back
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-[#302D21] text-white py-3 rounded-full hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 pt-2">
            Don&apos;t have an account?{" "}
            <Link
                to="/signup"
                className="text-[#302D21] font-medium hover:underline"
            >
                Sign up!
            </Link>
        </p>

      </form>
    </div>
  );
}