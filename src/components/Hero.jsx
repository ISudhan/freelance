import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const phrases = ["Luxury", "Elegance", "Timeless Beauty"];
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayed(phrases[current].slice(0, i + 1));
      i++;
      if (i === phrases[current].length) clearInterval(typing);
    }, 150);
    return () => clearInterval(typing);
  }, [current]);

  return (
    <section className="relative bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="text-amber-600">{displayed}</span> Woven Into Every Thread
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">
            Explore premium fabrics, timeless sarees, designer wear, and exclusive collections crafted with elegance.
          </p>
          <div className="pt-4">
            <Link
              to="/collections"
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200 to-transparent rounded-3xl blur-2xl opacity-40"></div>
          <img
            src="/saree1.avif"
            alt="Luxury Fabric Showcase"
            className="relative rounded-3xl shadow-xl object-cover w-full max-w-[500px] aspect-[4/5]"
          />
        </motion.div>
      </div>
    </section>
  );
}
