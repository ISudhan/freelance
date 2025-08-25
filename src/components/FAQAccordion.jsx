import { useState } from "react";

export default function FAQAccordion({ items=[] }) {
  return (
    <div className="space-y-2">
      {items.map((it, i) => <FAQItem key={i} q={it.q} a={it.a} />)}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg dark:border-gray-700">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-3 flex justify-between">
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-3 pb-3 text-gray-600 dark:text-gray-400">{a}</p>}
    </div>
  );
}
