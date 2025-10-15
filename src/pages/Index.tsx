import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Shield, Sparkles, Target, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-spa.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import results from "@/assets/results.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import treatmentProcess from "@/assets/treatment-process.jpg";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Hero carousel images
  const heroImages = [
    { src: heroImage, alt: "Luxury spa treatment room" },
    { src: treatmentRoom, alt: "Professional treatment environment" },
    { src: clinicInterior, alt: "Modern clinic interior" },
    { src: treatmentProcess, alt: "Advanced skincare treatment" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Hero image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      icon: Sparkles,
      title: "PRP Treatments",
      description: "Platelet-Rich Plasma therapy for face and hair to stimulate natural collagen production and hair growth.",
    },
    {
      icon: Zap,
      title: "HIFU Treatments",
      description: "High-Intensity Focused Ultrasound for non-invasive face lifting and vaginal rejuvenation.",
    },
    {
      icon: Target,
      title: "Advanced Skin Boosters",
      description: "Injectable treatments including Botox, Fillers, and IV Glutathione for comprehensive skin enhancement.",
    },
  ];

  const benefits = [
    { icon: Award, title: "Expert Practitioners", description: "Board-certified aestheticians with specialized training" },
    { icon: Shield, title: "Medical-Grade Products", description: "Premium formulations with proven clinical results" },
    { icon: Users, title: "Personalized Approach", description: "Custom treatment plans tailored to your unique needs" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-40' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-hero z-0" />
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Premium Skincare & Aesthetics
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] opacity-0 animate-fade-up text-balance" style={{ animationDelay: '100ms' }}>
              Unlock Your
              <br />
              <span className="text-primary">Natural Radiance</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/70 mb-10 leading-relaxed max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Experience transformative skincare treatments in a sanctuary of wellness where science meets luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto text-base px-10 py-7 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white">
                  Begin Your Journey
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-10 py-7 transition-smooth hover:scale-105 border-2 hover:border-primary bg-background">
                  Discover Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "10K+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "50+", label: "Premium Treatments" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center opacity-0 animate-fade-up ${isVisible ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Our Expertise
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Transformative Treatments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Each treatment is meticulously designed to deliver visible, lasting results through the perfect blend of artistry and science
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 150}
              />
            ))}
          </div>

          <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Link to="/services">
              <Button size="lg" variant="outline" className="px-10 py-6 text-base transition-smooth hover:scale-105 border-2 hover:border-primary hover:bg-primary/5 bg-background">
                Explore All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Sky Difference Section - Revamped */}
      <section className="py-28 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
                The Sky Difference
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                Experience world-class care in an environment designed for your complete transformation
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <img 
                  src={treatmentRoom} 
                  alt="Luxurious treatment room" 
                  className="rounded-2xl shadow-premium w-full h-[500px] object-cover"
                />
              </div>
              <div className="space-y-8">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="flex gap-6 items-start opacity-0 animate-fade-up group"
                      style={{ animationDelay: `${350 + idx * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 gradient-primary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg" />
                          <div className="relative w-16 h-16 rounded-xl gradient-primary/10 flex items-center justify-center transition-transform group-hover:scale-110 transition-smooth border border-primary/20">
                            <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <div className="relative group overflow-hidden rounded-2xl shadow-premium">
                <img 
                  src={results} 
                  alt="Beautiful results" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Visible Results</h3>
                    <p className="text-foreground/80">See the transformation from your very first visit</p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-premium">
                <img 
                  src={clinicInterior} 
                  alt="Clinic interior" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Premium Environment</h3>
                    <p className="text-foreground/80">Relax in our luxurious, state-of-the-art facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Start Today
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 opacity-0 animate-fade-up text-balance" style={{ animationDelay: '100ms' }}>
              Your Transformation Begins Here
            </h2>
            
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Book your personalized consultation and discover the perfect treatment plan designed exclusively for you
            </p>
            
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link to="/book">
                <Button size="lg" className="text-base px-12 py-7 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
