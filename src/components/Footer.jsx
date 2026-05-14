import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#302D21] text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND SECTION */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            Aliza&apos;s Mehndi Designs
          </h2>
          <p className="text-sm text-white/70 mt-2 italic">
            Beautiful henna designs for all occasions
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-[#E6C7A8]">
            Quick Links
          </h3>

          <div className="space-y-2 text-sm">
            <Link to="/" className="block hover:text-[#E6C7A8] transition">Home</Link>
            <Link to="/about" className="block hover:text-[#E6C7A8] transition">About</Link>
            <Link to="/services" className="block hover:text-[#E6C7A8] transition">Services</Link>
            <Link to="/contact" className="block hover:text-[#E6C7A8] transition">Contact</Link>
          </div>
        </div>

        {/* SERVICES SUMMARY */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-[#E6C7A8]">
            Services
          </h3>

          <div className="space-y-2 text-sm text-white/80">
            <p>Bridal Mehndi</p>
            <p>Party Mehndi</p>
            <p>Festival Designs</p>
            <p>Custom Designs</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Aliza&apos;s Mehndi Designs. All rights reserved.
      </div>

    </footer>
  );
}