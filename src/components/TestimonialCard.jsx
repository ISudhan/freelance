export default function TestimonialCard({ name="Customer", text="Loved it!", rating=5 }) {
    return (
      <div className="border rounded-xl p-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="flex gap-1 text-yellow-500">
          {Array.from({ length: rating }).map((_, i) => <span key={i}>★</span>)}
        </div>
        <p className="mt-3">{text}</p>
        <p className="mt-2 text-sm text-gray-500">— {name}</p>
      </div>
    );
  }
  