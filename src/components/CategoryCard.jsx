import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({ image, title, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <Link
        to={link}
        className="group relative overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
      >
        {/* Wrapper with aspect ratio */}
        <div className="w-full aspect-[4/5]">
          <img
            src={image || "/placeholder.jpg"}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/70 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-amber-600">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
