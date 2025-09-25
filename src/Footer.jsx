import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { LOGO } from "./utils/Endpoints";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo */}
          <div>
            <img src={LOGO} alt="logo" className="h-10" />
            <p className="mt-2 text-sm text-gray-500">
              Discover the best food & drinks in your city
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">About Zomato</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Work With Us</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Restaurants</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">Partner With Us</a>
                </li>
                <li>
                  <a href="#">Apps For You</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Enterprises</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">Zomato For Work</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Learn More</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex justify-between">
          <span>© 2025 Zomato™ Ltd. All rights reserved.</span>
          <span>Made with ❤️ for foodies</span>
        </div>
      </div>
    </footer>
  );
}
