import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function Search() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Dummy search results
    const products = [
      { id: 1, title: "Banarasi Saree", brand: "Mona", price: 6000, image: "/images/saree1.avif" },
      { id: 2, title: "Silk Kurta", brand: "Mona", price: 2500, image: "/images/kurta1.avif" },
      { id: 3, title: "Designer Salwar", brand: "Mona", price: 3200, image: "/images/salwar1.avif" },
    ];
    const filtered = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return (
    <section className="py-20 bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold mb-4 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Search Products
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find your favorite fabrics, sarees, and designer wear.
        </motion.p>

        {/* Search Box */}
        <SearchBox onSearch={handleSearch} />

        {/* Results Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full mt-6">No results found.</p>
          ) : (
            results.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <ProductCard p={p} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
