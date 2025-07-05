import React from "react";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1d4e1a] text-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-gold-400" />
              <span className="text-xl font-bold">Brewhaus</span>
            </div>
            <p className="text-cream-200 mb-4 max-w-md">
              Crafting exceptional coffee experiences since 2015. We source the
              finest beans from around the world and roast them to perfection in
              our local roastery.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-cream-200 hover:text-gold-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-cream-200 hover:text-gold-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-cream-200 hover:text-gold-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200 text-sm">
                  123 Coffee Street, Bean City
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200 text-sm">(555) 123-BREW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-400" />
                <span className="text-cream-200 text-sm">
                  hello@brewhaus.com
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-cream-200 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1d4e1a] mt-8 pt-8 text-center">
          <p className="text-cream-200 text-sm">
            © 2024 Brewhaus Coffee. All rights reserved. Made with ❤️ and lots
            of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
