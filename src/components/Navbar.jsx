import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collections", label: "Collections" },
    { path: "/offers", label: "Offers" },
    { path: "/about", label: "About" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
    { path: "/wishlist", label: "Wishlist" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logofin.png"
            alt="Mona Textiles Logo"
            className="h-12 w-12 object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-2xl font-extrabold text-black tracking-wide transition-all duration-500 group-hover:text-amber-600">
            Mona Textiles
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-black transition duration-500 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-600 after:left-0 after:-bottom-1 
                  hover:after:w-full after:transition-all after:duration-500
                  ${isActive ? "text-amber-600 after:w-full" : "hover:text-amber-600"}`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/search"
            className="px-4 py-2 rounded-full border border-gray-400 text-black hover:border-amber-600 hover:text-amber-600 transition transform hover:scale-105 duration-500"
          >
            Search
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden px-3 py-2 border border-gray-400 text-black rounded-lg transition hover:border-amber-600 hover:text-amber-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <nav className="flex flex-col p-4 space-y-3 font-semibold">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="relative text-black hover:text-amber-600 transition duration-500 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-600 after:left-0 after:-bottom-1 
                  hover:after:w-full after:transition-all after:duration-500"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/search"
              className="mt-2 px-4 py-2 rounded-full border border-gray-400 hover:border-amber-600 hover:text-amber-600 text-sm text-center transition transform hover:scale-105 duration-500"
              onClick={() => setMenuOpen(false)}
            >
              Search
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
