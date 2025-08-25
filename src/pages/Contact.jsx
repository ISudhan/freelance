import { useState } from "react";
import { motion } from "framer-motion";
import FAQAccordion from "../components/FAQAccordion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const faqs = [
    { question: "What is your return policy?", answer: "You can return any product within 30 days of purchase." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to most countries worldwide." },
    { question: "How can I track my order?", answer: "You will receive a tracking link once your order is shipped." },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!"); // placeholder
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have questions or feedback? Reach out to us using the form below or check our FAQ.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl p-4 bg-white text-gray-900 focus:ring-amber-500 focus:border-amber-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl p-4 bg-white text-gray-900 focus:ring-amber-500 focus:border-amber-500 transition"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 rounded-xl p-4 bg-white text-gray-900 focus:ring-amber-500 focus:border-amber-500 transition h-40 resize-none"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-500"
          >
            Send Message
          </button>
        </motion.form>

        {/* FAQ Section */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
