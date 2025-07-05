import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { navlink } from "../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoffeeMenuOpen, setIsCoffeeMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#1d4e1a] text-cream-50 sticky top-0 z-50 relative overflow-hidden rounded-b-[100px] shadow-md">
      {/* iPhone-style Notch */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0f2910] rounded-b-full z-40 shadow-inner shadow-black/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-gold-400" />
            <span className="text-xl font-bold">Brewhaus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navlink.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive(item.route) ? "text-gold-400" : "text-cream-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Coffee Menu Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCoffeeMenuOpen(!isCoffeeMenuOpen)}
              className="bg-gold-500 hover:bg-gold-600 text-coffee-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Coffee className="h-4 w-4" />
              <span>Menu</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-coffee-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-coffee-800 py-4">
            <nav className="flex flex-col space-y-2">
              {navlink.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.route)
                      ? "text-gold-400 bg-[#1d4e1a]"
                      : "text-cream-50 hover:bg-coffee-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Coffee Menu Overlay */}
      {isCoffeeMenuOpen && (
        <div className="absolute top-16 inset-x-0 bg-[#1d4e1a] border-t border-coffee-700 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-cream-50">
                Our Coffee Menu
              </h3>
              <button
                onClick={() => setIsCoffeeMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-coffee-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gold-400 mb-3">
                  Signature Blends
                </h4>
                <ul className="space-y-2 text-sm text-cream-100">
                  <li>Brewhaus Dark Roast - $3.50</li>
                  <li>Morning Glory Medium - $3.25</li>
                  <li>Smooth Operator Light - $3.00</li>
                  <li>Decaf Dreamer - $3.25</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gold-400 mb-3">
                  Specialty Drinks
                </h4>
                <ul className="space-y-2 text-sm text-cream-100">
                  <li>Caramel Macchiato - $4.50</li>
                  <li>Vanilla Latte - $4.25</li>
                  <li>Mocha Supreme - $4.75</li>
                  <li>Iced Coffee Blend - $3.75</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gold-400 mb-3">
                  Seasonal Favorites
                </h4>
                <ul className="space-y-2 text-sm text-cream-100">
                  <li>Pumpkin Spice Latte - $5.00</li>
                  <li>Peppermint Mocha - $4.95</li>
                  <li>Cinnamon Roll Cappuccino - $4.50</li>
                  <li>Chai Tea Latte - $4.25</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/menyu"
                onClick={() => setIsCoffeeMenuOpen(false)}
                className="inline-block bg-gold-500 hover:bg-gold-600 text-coffee-900 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
