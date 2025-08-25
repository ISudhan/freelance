import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ p }) {
  if (!p) return null;

  return (
    <motion.div
      className="bg-white border border-amber-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500"
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/product/${p.id}`}>
        <div className="relative w-full aspect-[4/5]">
          <img
            src={p.image || "/placeholder.jpg"}
            alt={p.title}
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>

        <div className="p-4">
          <h3 className="text-amber-600 font-semibold text-lg mb-1">{p.title}</h3>
          <p className="text-gray-700 mb-2">{p.brand}</p>
          <p className="text-gray-900 font-bold">₹{p.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
