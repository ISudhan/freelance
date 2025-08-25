export default function ProductDetails() {
    const product = {
      title: "Kanchipuram Silk Saree",
      brand: "Mona",
      fabric: "Silk",
      weave: "Handwoven",
      work: "Zari",
      price: 8500,
    };
  
    return (
      <section className="section grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="bg-gray-200 dark:bg-gray-700 h-80 rounded-lg flex items-center justify-center">
          Product Image
        </div>
  
        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">Brand: {product.brand}</p>
          <p className="text-gray-600 dark:text-gray-400">Fabric: {product.fabric}</p>
          <p className="text-gray-600 dark:text-gray-400">Weave: {product.weave}</p>
          <p className="text-gray-600 dark:text-gray-400">Work: {product.work}</p>
          <p className="mt-2 font-semibold">₹{product.price}</p>
  
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg">
            Add to Wishlist
          </button>
        </div>
      </section>
    );
  }
  