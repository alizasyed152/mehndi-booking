import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const navLinkStyles = (path) =>
    `relative transition duration-300 hover:text-[#E6C7A8] ${
      location.pathname === path
        ? "text-[#E6C7A8]"
        : "text-white"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#302D21]/90 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-[#302D21]"
      }`}
    >

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >

          {/* LEFT BRAND */}
          <Link
            to="/"
            className="flex flex-col leading-tight group"
          >

            <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-white group-hover:text-[#E6C7A8] transition duration-300">
              Aliza&apos;s Mehndi
            </h1>

            <span className="text-xs text-white/60 italic tracking-wide">
              Luxury Henna Artistry
            </span>

          </Link>

          {/* CENTER NAV */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">

            <Link
              to="/"
              className={navLinkStyles("/")}
            >
              Home

              {location.pathname === "/" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E6C7A8] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={navLinkStyles("/about")}
            >
              About

              {location.pathname === "/about" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E6C7A8] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/services"
              className={navLinkStyles("/services")}
            >
              Services

              {location.pathname === "/services" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E6C7A8] rounded-full"></span>
              )}
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className={navLinkStyles("/dashboard")}
              >
                Dashboard

                {location.pathname === "/dashboard" && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E6C7A8] rounded-full"></span>
                )}
              </Link>
            )}

            <Link
              to="/contact"
              className={navLinkStyles("/contact")}
            >
              Contact

              {location.pathname === "/contact" && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E6C7A8] rounded-full"></span>
              )}
            </Link>

          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/booking"
              className="bg-[#E6C7A8] text-[#302D21] px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition duration-300 shadow-md"
            >
              Book Now
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-[#302D21] transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-[#302D21] transition duration-300"
              >
                Login
              </Link>
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5"
          >

            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#302D21]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5 text-sm font-medium animate-fadeIn">

          <Link
            to="/"
            className="block text-white hover:text-[#E6C7A8]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block text-white hover:text-[#E6C7A8]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            className="block text-white hover:text-[#E6C7A8]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="block text-white hover:text-[#E6C7A8]"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}

          <Link
            to="/contact"
            className="block text-white hover:text-[#E6C7A8]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/booking"
            className="block w-fit bg-[#E6C7A8] text-[#302D21] px-5 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="block border border-white/20 px-5 py-2 rounded-full text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-fit border border-white/20 px-5 py-2 rounded-full text-white"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}

        </div>
      )}

    </nav>
  );
}