import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const heroHeight = window.innerHeight * 0.9; // 90vh hero section
        setIsScrolled(window.scrollY > heroHeight);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Always solid on non-home pages
      setIsScrolled(true);
    }
  }, [isHomePage]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-md" />
              <img 
                src={logo} 
                alt="Sky Skin Clinic" 
                className="w-10 h-10 relative z-10 transition-transform group-hover:scale-110 transition-smooth" 
              />
            </div>
            <span className={`text-2xl font-heading font-semibold tracking-tight transition-colors ${
              isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
            }`}>Sky Skin Clinic</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-200 relative group py-2 ${
                isActive('/') ? 'text-primary' : `${isScrolled || !isHomePage ? 'text-foreground/70 hover:text-foreground' : 'text-white/90 hover:text-white'}`
              }`}
            >
              Home
              <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-primary opacity-100 scale-x-100' 
                  : 'bg-current opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
              }`} />
            </Link>
            
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-all duration-200 relative group py-2 ${
                isActive('/services') ? 'text-primary' : `${isScrolled || !isHomePage ? 'text-foreground/70 hover:text-foreground' : 'text-white/90 hover:text-white'}`
              }`}
            >
              Services
              <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-200 ${
                isActive('/services') 
                  ? 'bg-primary opacity-100 scale-x-100' 
                  : 'bg-current opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
              }`} />
            </Link>
            
            <Link to="/book">
              <Button 
                className="shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white border-0"
                size="default"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled || !isHomePage ? 'text-foreground' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-premium">
          <div className="container mx-auto px-4 py-6 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 text-base font-medium transition-all duration-200 rounded-lg relative ${
                isActive('/') ? 'text-primary bg-primary/10' : 'text-foreground/70 hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
              )}
            </Link>
            
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 text-base font-medium transition-all duration-200 rounded-lg relative ${
                isActive('/services') ? 'text-primary bg-primary/10' : 'text-foreground/70 hover:text-foreground hover:bg-accent/50'
              }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
              )}
            </Link>
            
            <div className="pt-2">
              <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full shadow-premium gradient-primary text-white">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
