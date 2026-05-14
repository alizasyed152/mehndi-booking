import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-[#302D21] text-white w-full sticky top-0 z-50 shadow-md">

      {/* MAIN NAV */}
      <div className="w-full px-10 py-5 flex items-center justify-between">

        {/* LEFT: BRAND */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Aliza&apos;s Mehndi Designs
          </h1>
          <span className="text-xs text-white/70 italic">
            Beautiful henna designs for all occasions
          </span>
        </div>

        {/* CENTER: NAV LINKS */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link to="/" className="hover:text-[#E6C7A8] transition">Home</Link>
          <Link to="/about" className="hover:text-[#E6C7A8] transition">About</Link>
          <Link to="/services" className="hover:text-[#E6C7A8] transition">Services</Link>
          <Link to="/contact" className="hover:text-[#E6C7A8] transition">Contact</Link>
        </div>

        {/* RIGHT: AUTH BUTTON */}
        <div className="flex justify-end">

          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm border border-white/30 px-4 py-1 rounded-full hover:bg-white hover:text-[#302D21] transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-sm border border-white/30 px-4 py-1 rounded-full hover:bg-white hover:text-[#302D21] transition"
            >
              Login / Sign Up
            </Link>
          )}

        </div>

      </div>

      {/* MOBILE TOP ROW */}
      <div className="md:hidden flex justify-between items-center px-6 pb-3">
        <div className="flex flex-col leading-tight">
          <h1 className="text-sm font-semibold">
            Aliza&apos;s Mehndi Designs
          </h1>
          <span className="text-[10px] text-white/70 italic">
            Beautiful henna designs for all occasions
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm">
          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/contact" className="block">Contact</Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="block mt-2 border border-white/30 px-3 py-1 rounded-full w-fit"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block mt-2 border border-white/30 px-3 py-1 rounded-full w-fit"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}