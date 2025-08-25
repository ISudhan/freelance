import { motion } from "framer-motion";

export default function JobCard({ title, department, location, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl border border-amber-100 p-6 shadow-lg bg-amber-50 hover:shadow-xl hover:scale-105 transition-transform duration-500"
    >
      <h3 className="text-amber-600 font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-800 mb-2">{department} | {location}</p>
      <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-500">
        Apply Now
      </button>
    </motion.div>
  );
}
