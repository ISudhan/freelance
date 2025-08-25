import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  // Example product data
  const allProducts = [
    { id: "1", title: "Banarasi Saree", brand: "Mona", price: 6000, image: "/saree.jpeg", desc: "Elegant silk saree perfect for festivals." },
    { id: "2", title: "Silk Kurta", brand: "Mona", price: 2500, image: "/salwar.jpeg", desc: "Premium silk kurta for men." },
    { id: "3", title: "Cotton Salwar", brand: "Mona", price: 1800, image: "/salwar1.jpg", desc: "Comfortable cotton salwar suit." },
    { id: "4", title: "Men’s Sherwani", brand: "Mona", price: 5000, image: "/mens.webp", desc: "Traditional sherwani for weddings." },
  ];


  useEffect(() => {
    const p = allProducts.find(prod => prod.id === id);
    setProduct(p);

    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, [id]);

  const toggleWishlist = () => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.some(item => item.id === product.id)) {
      const updated = stored.filter(item => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
    } else {
      const updated = [...stored, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
    }
  };

  if (!product) return <p className="text-gray-700 text-center py-20">Product not found.</p>;

  const inWishlist = wishlist.some(item => item.id === product.id);

  return (
    <section className="py-20 bg-white text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg" />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-amber-600 mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-2">{product.brand}</p>
            <p className="text-gray-900 font-bold text-2xl mb-4">₹{product.price}</p>
            <p className="text-gray-700 mb-6">{product.desc}</p>
          </div>

          <button
            onClick={toggleWishlist}
            className={`px-6 py-3 rounded-full font-semibold shadow-md text-white ${inWishlist ? "bg-red-600 hover:bg-red-500" : "bg-amber-600 hover:bg-amber-500"} transition transform hover:scale-105`}
          >
            {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </section>
  );
}
