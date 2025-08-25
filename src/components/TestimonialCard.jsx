export default function TestimonialCard({ name = "Customer", text = "Loved it!", rating = 5 }) {
  return (
    <div className="border rounded-2xl p-6 bg-amber-50 shadow-lg text-gray-900">
      {/* Rating Stars */}
      <div className="flex gap-1 text-amber-600">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="mt-4 text-gray-800">{text}</p>

      {/* Customer Name */}
      <p className="mt-3 text-sm text-gray-600 font-semibold">— {name}</p>
    </div>
  );
}