
import CategoryCard from "../components/CategoryCard";

const categories = [
  { title: "Sarees", image: "/saree1.avif", link: "/collections" },
  { title: "Fabrics", image: "/fabric1.avif", link: "/collections" },
  { title: "Designer Wear", image: "/", link: "/collections" },
  { title: "Accessories", image: "/accessory1.avif", link: "/collections" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              image={cat.image}
              title={cat.title}
              link={cat.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
