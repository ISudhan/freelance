import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function Collections() {
  const products = [
    { id: 1, title: "Banarasi Saree", brand: "Mona", price: 6000, image: "/images/saree1.avif" },
    { id: 2, title: "Silk Kurta", brand: "Mona", price: 2500, image: "/images/kurta1.avif" },
    { id: 3, title: "Cotton Salwar", brand: "Mona", price: 1800, image: "/images/salwar1.avif" },
    { id: 4, title: "Men’s Sherwani", brand: "Mona", price: 5000, image: "/images/men1.avif" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Collections</h1>
        <p className="text-gray-700 mb-6">Browse categories with filters and sorting.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select className="border border-gray-300 rounded-xl p-3 bg-white text-gray-900 hover:border-amber-600 transition duration-300">
            <option>Sort by Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <select className="border border-gray-300 rounded-xl p-3 bg-white text-gray-900 hover:border-amber-600 transition duration-300">
            <option>Color</option>
            <option>Red</option>
            <option>Blue</option>
          </select>
          <select className="border border-gray-300 rounded-xl p-3 bg-white text-gray-900 hover:border-amber-600 transition duration-300">
            <option>Fabric</option>
            <option>Silk</option>
            <option>Cotton</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <ProductCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
