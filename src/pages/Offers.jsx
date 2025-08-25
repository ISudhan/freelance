import { motion } from "framer-motion";

export default function Offers() {
  const offers = [
    { id: 1, title: "Festive Discount", desc: "Up to 40% off on Sarees", image: "/images/offer1.avif" },
    { id: 2, title: "Bridal Week", desc: "Exclusive bridal collections", image: "/images/offer2.avif" },
    { id: 3, title: "Summer Sale", desc: "Flat 30% off on Fabrics", image: "/images/offer3.avif" },
    { id: 4, title: "Limited Edition", desc: "Designer wear at special prices", image: "/images/offer4.avif" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Current Offers</h1>
        <p className="text-gray-700 mb-12">Check out the latest offers and exclusive collections.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl shadow-lg overflow-hidden bg-amber-50 hover:shadow-xl hover:scale-105 transition-transform duration-500"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-100/50 via-transparent to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-amber-700 text-xl font-semibold">{offer.title}</h3>
                  <p className="text-gray-900">{offer.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
