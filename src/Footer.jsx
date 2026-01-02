const Footer = () => {
  return (
    <footer className="w-full z-50 px-0 py-0 border-2 bg-blue-950 border-white rounded-xl shadow-xl">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">GRABIT</h2>
          <p className="mt-3 text-sm text-gray-400">
            Delicious food delivered to your doorstep. Fast, fresh, and reliable.
          </p>
        </div>

        {/* Links */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
            <li className="cursor-pointer hover:text-white">Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-3">
            <a href="tel:6204451500">+91 6204451500</a>
          </h3>
          <p className="text-sm">📍 Kanpur, India</p>
          <p className="text-sm">📧 support@grabitapp.com</p>
          <p className="text-sm">
            <a href="tel:6204451500">📞 +91 6204451500</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GRABIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
