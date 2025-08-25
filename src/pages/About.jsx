import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    { year: "2015", title: "Founded", desc: "Mona Textiles was established to bring luxury fabrics and designer sarees to every home." },
    { year: "2017", title: "First Boutique", desc: "Opened our first boutique showcasing premium fabrics and curated collections." },
    { year: "2020", title: "Online Presence", desc: "Launched our online store to reach customers globally with luxury fabrics." },
    { year: "2023", title: "Luxury Collection", desc: "Introduced exclusive designer collections and collaborations." },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-center tracking-tight text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Mona Textiles
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Mona Textiles, luxury is woven into every thread. Our mission is to deliver premium fabrics, timeless sarees, and exclusive collections that celebrate tradition and elegance.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="border-l-2 border-amber-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative w-full md:w-1/2 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className={`bg-amber-50 rounded-2xl p-6 shadow-lg border border-amber-100 ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <h3 className="text-amber-600 text-xl font-semibold mb-2">{m.year} - {m.title}</h3>
                  <p className="text-gray-800">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
