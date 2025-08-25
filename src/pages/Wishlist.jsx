import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function Wishlist() {
  // Example: using localStorage or dummy data
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Replace with localStorage retrieval if needed
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [
      { id: 1, title: "Banarasi Saree", brand: "Mona", price: 6000, image: "/images/saree1.avif" },
      { id: 2, title: "Silk Kurta", brand: "Mona", price: 2500, image: "/images/kurta1.avif" },
    ];
    setWishlist(stored);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <section className="py-20 bg-white text-gray-900">
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
                className="relative group"
              >
                <ProductCard p={item} />

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 bg-white text-red-600 p-2 rounded-full shadow hover:scale-110 transition-transform duration-300"
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
