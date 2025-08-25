import { motion } from "framer-motion";

export default function ProductCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative border rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-500 bg-white"
    >
      <img
        src={p.image || "/placeholder.jpg"}
        alt={p.title}
        className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
        <p className="text-sm text-gray-500">{p.brand}</p>
        <p className="text-amber-600 font-bold text-lg">₹{p.price}</p>
      </div>

      <div className="absolute inset-0 bg-amber-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 transition transform hover:scale-105 duration-500">
          View Product
        </button>
      </div>
    </motion.div>
  );
}
