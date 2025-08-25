import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  // Featured categories with images
  const categories = [
    { title: "Sarees", image: "/saree.jpeg", link: "/collections" },
    { title: "Salwar", image: "/salwar1.jpg", link: "/collections" },
    { title: "Men’s", image: "/mens.webp", link: "/collections" },
    { title: "Kids", image: "/kids1.webp", link: "/collections" },
    { title: "Fabrics", image: "/fabric.webp", link: "/collections" },
  ];

  // New arrivals
  const newArrivals = [
    { id: 1, title: "Kanchipuram Saree", brand: "Mona", price: 4500, image: "/kanchipuram.webp" },
    { id: 2, title: "Cotton Salwar", brand: "Mona", price: 1800, image: "/csalwar.png" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Anjali", text: "Loved the exquisite saree collection!", rating: 5 },
    { name: "Ravi", text: "Premium fabrics and luxurious designs.", rating: 5 },
    { name: "Priya", text: "Fast delivery and excellent quality!", rating: 4 },
  ];

  return (
    <>
      <Hero />

      {/* Featured Categories */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">Featured Categories</h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((c, i) => (
            <CategoryCard key={i} {...c} index={i} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">New Arrivals</h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newArrivals.map((p, i) => (
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
      </section>

      {/* Top Offers */}
      <section className="py-20 bg-amber-50 text-gray-900">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">Top Offers</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <motion.div
            className="p-8 bg-white rounded-3xl shadow-lg border border-amber-100 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-amber-600 text-xl font-semibold mb-2">Festive Discount</h3>
            <p>Up to 40% off on Sarees during festive season.</p>
          </motion.div>
          <motion.div
            className="p-8 bg-white rounded-3xl shadow-lg border border-amber-100 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-amber-600 text-xl font-semibold mb-2">Bridal Week</h3>
            <p>Exclusive designer bridal collections.</p>
          </motion.div>
          <motion.div
            className="p-8 bg-white rounded-3xl shadow-lg border border-amber-100 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-amber-600 text-xl font-semibold mb-2">Limited Edition</h3>
            <p>Handwoven fabrics with limited stock.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">What Customers Say</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
