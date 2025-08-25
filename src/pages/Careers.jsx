import { motion } from "framer-motion";

export default function Careers() {
  const jobs = [
    { id: 1, title: "UI/UX Designer", department: "Design", location: "Remote" },
    { id: 2, title: "Frontend Developer", department: "Engineering", location: "Bangalore" },
    { id: 3, title: "Marketing Specialist", department: "Marketing", location: "Mumbai" },
    { id: 4, title: "Sales Executive", department: "Sales", location: "Delhi" },
  ];

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Careers at Mona Textiles
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Join our team and help us craft luxury textiles for customers worldwide. Explore open roles below.
        </motion.p>

        {/* Job Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl border border-amber-100 p-6 shadow-lg bg-amber-50 hover:shadow-xl hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-amber-600 font-semibold text-xl mb-2">{job.title}</h3>
              <p className="text-gray-800 mb-4">{job.department} | {job.location}</p>
              <button className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-500">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
