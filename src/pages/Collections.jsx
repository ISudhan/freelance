import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Collections() {
  const allProducts = [
    { id: 1, title: "Banarasi Saree", brand: "Mona", price: 6000, image: "/saree.jpeg", color: "Red", fabric: "Silk" },
    { id: 2, title: "Silk Kurta", brand: "Mona", price: 2500, image: "/salwar.jpeg", color: "Blue", fabric: "Silk" },
    { id: 3, title: "Cotton Salwar", brand: "Mona", price: 1800, image: "/salwar1.jpg", color: "Green", fabric: "Cotton" },
    { id: 4, title: "Men’s Sherwani", brand: "Mona", price: 5000, image: "/mens.webp", color: "Gold", fabric: "Silk" },
  ];

  const [products, setProducts] = useState(allProducts);

  const handleFilter = (key, value) => {
    if (!value) return setProducts(allProducts);
    const filtered = allProducts.filter(p => p[key] === value);
    setProducts(filtered);
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Collections</h1>
        <p className="text-gray-600 mb-6">Browse categories with filters and sorting.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select onChange={e => handleFilter("color", e.target.value)} className="border border-gray-300 rounded-xl p-3 bg-white text-gray-900 hover:border-amber-600 transition duration-300">
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Gold">Gold</option>
          </select>
          <select onChange={e => handleFilter("fabric", e.target.value)} className="border border-gray-300 rounded-xl p-3 bg-white text-gray-900 hover:border-amber-600 transition duration-300">
            <option value="">All Fabrics</option>
            <option value="Silk">Silk</option>
            <option value="Cotton">Cotton</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
