import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";

export default function Home() {
  const categories = [
    { title: "Sarees", image: "/saree.jpeg", link: "/collections" },
    { title: "Salwar", image: "/salwar1.jpg", link: "/collections" },
    { title: "Men’s", image: "/mens.webp", link: "/collections" },
    { title: "Kids", image: "/kids1.webp", link: "/collections" },
    { title: "Fabrics", image: "/fabric.webp", link: "/collections" },
  ];

  const newArrivals = [
    { id: 1, title: "Kanchipuram Saree", brand: "Mona", price: 4500, image: "/kanchipuram.webp" },
    { id: 2, title: "Cotton Salwar", brand: "Mona", price: 1800, image: "/csalwar.png" },
  ];

  const testimonials = [
    { name: "Anjali", text: "Loved the saree collection!", rating: 5 },
    { name: "Ravi", text: "Great offers and quality.", rating: 4 },
    { name: "Priya", text: "The fabrics feel so premium!", rating: 5 },
  ];

  const topOffers = [
    { title: "Festive Discount", desc: "Up to 40% off on Sarees" },
    { title: "Bridal Week", desc: "Exclusive bridal collections" },
    { title: "Summer Sale", desc: "Flat 30% off on Fabrics" },
  ];

  return (
    <>
      <Hero />

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          Featured Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6">
          {categories.map((c, i) => (
            <CategoryCard
              key={i}
              title={c.title}
              image={c.image}
              link={c.link}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          New Arrivals
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* Top Offers */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          Top Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {topOffers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="p-6 border rounded-2xl shadow-lg bg-amber-50 hover:scale-105 transform transition duration-500"
            >
              <h3 className="font-semibold text-amber-600">{offer.title}</h3>
              <p>{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          What Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
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
