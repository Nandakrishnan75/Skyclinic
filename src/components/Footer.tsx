import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-md" />
                <img src={logo} alt="Sky Skin Clinic Logo" className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" />
              </div>
              <span className="text-lg sm:text-xl font-heading font-semibold">Sky Skin Clinic</span>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Elevating beauty through science. Experience transformative skincare treatments in a sanctuary of wellness.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  North Fort Gate, Opposite to Old Sreekala Theatre,<br />
                  Thripunithura, Kochi
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+917994341414" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7994341414
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@skyskinclinic.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@skyskinclinic.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Working Hours</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-foreground font-medium">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Sunday</p>
                  <p className="text-foreground font-medium">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © 2025 Sky Skin Clinic. All rights reserved. Elevating beauty through science.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
