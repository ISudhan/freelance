import { useState, useEffect } from "react";

export default function WishlistButton({ productId }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setSaved(wishlist.some((item) => item.id === productId));
  }, [productId]);

  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (saved) {
      wishlist = wishlist.filter((item) => item.id !== productId);
      setSaved(false);
    } else {
      wishlist.push({ id: productId });
      setSaved(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`p-3 rounded-full border border-amber-600 text-amber-600 font-semibold shadow hover:bg-amber-50 hover:scale-110 transition-transform duration-300`}
    >
      {saved ? "♥" : "♡"}
    </button>
  );
}
