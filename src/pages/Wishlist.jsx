import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  const loadWishlist = () => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  };

  useEffect(() => {
    loadWishlist();
    // Listen for changes in localStorage (multi-tab support)
    const handleStorage = () => loadWishlist();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <section className="py-20 bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Your Wishlist</h1>
        <p className="text-gray-700 mb-6">Browse your saved items and manage your favorites.</p>

        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center py-20">Your wishlist is empty.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="relative group rounded-3xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-2xl transition-all duration-500"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover rounded-t-3xl"
                />

                {/* Product Info */}
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.brand}</p>
                  <p className="text-amber-600 font-semibold text-xl mt-2">₹ {item.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 bg-white text-red-600 p-2 rounded-full shadow hover:scale-110 transition-transform duration-300"
                  title="Remove from wishlist"
                >
                  ✖
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
