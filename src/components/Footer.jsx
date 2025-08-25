import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Mona Textiles</h4>
          <p className="text-sm text-gray-600">Crafting elegance since 1982.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-pink-600">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-pink-600">Careers</Link></li>
            <li><Link to="/offers" className="hover:text-pink-600">Offers & Events</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-pink-600">Contact & Support</Link></li>
            <li><a href="#returns" className="hover:text-pink-600">Returns & Exchange</a></li>
            <li><Link to="/search" className="hover:text-pink-600">Search</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Get in touch</h5>
          <p className="text-sm">WhatsApp: +91 90000 00000</p>
          <p className="text-sm">Phone: 044-4000 4000</p>
          <p className="text-sm">Email: support@monatextiles.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Mona Textiles. All rights reserved.
      </div>
    </footer>
  );
}
