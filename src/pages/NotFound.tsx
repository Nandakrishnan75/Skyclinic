import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mobile-min-vh-100 bg-gradient-to-b from-background via-accent/10 to-background safe-area-top safe-area-bottom">
      <Navigation />
      
      <div className="flex mobile-min-vh-100 items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8 safe-area-left safe-area-right">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-4 xs:mb-6 sm:mb-8">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-primary mb-3 xs:mb-4 opacity-0 animate-fade-up">404</h1>
            <h2 className="responsive-text-xl font-bold mb-2 xs:mb-3 sm:mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Page Not Found
            </h2>
            <p className="responsive-text-base text-muted-foreground mb-4 xs:mb-6 sm:mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link to="/" className="w-full xs:w-auto">
              <Button size="lg" className="w-full xs:w-auto gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105 tap-target responsive-text-sm">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="w-full xs:w-auto border-2 hover:border-primary hover:bg-primary/5 tap-target responsive-text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
