import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, CheckCircle2, Star, Sparkles, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import treatmentRoom from "@/assets/treatment-room.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mobile-min-vh-100 bg-gradient-to-b from-background via-accent/10 to-background prevent-scroll">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-24 xs:pt-28 sm:pt-32 pb-10 xs:pb-12 sm:pb-16 relative overflow-hidden safe-area-top">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${treatmentRoom})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center relative z-10 safe-area-left safe-area-right">
          <div className="inline-block mb-4 xs:mb-5 sm:mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
            <span className="px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs xs:text-sm font-medium border border-primary/20">
              Book Your Appointment
            </span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-5 xs:mb-6 sm:mb-8 opacity-0 animate-fade-up text-balance leading-[1.05] xs:leading-[1.1]" style={{ animationDelay: '100ms' }}>
            Begin Your
            <br />
            <span className="text-primary">Beauty Journey</span>
          </h1>
          
          <p className="text-base xs:text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-up px-3 xs:px-4 leading-relaxed" style={{ animationDelay: '200ms' }}>
            Schedule your personalized consultation and take the first step towards radiant, confident skin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              
              {/* Left Side - Clinic Info & Benefits */}
              <div className="space-y-6 sm:space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
                
                {/* Clinic Information Card */}
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">Sky Skin Clinic</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Premium Skincare & Aesthetics</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Location</p>
                          <a 
                            href="https://share.google/ymMPekzvnhfocEgQl" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-xs sm:text-sm"
                          >
                            North Fort Gate, Opposite to Old Sreekala Theatre<br />
                            Thripunithura, Kochi
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Phone</p>
                          <a href="tel:+917994341414" className="text-primary hover:underline text-sm sm:text-base">
                            +91 7994341414
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">WhatsApp</p>
                          <a href="https://wa.me/917994341414" className="text-primary hover:underline text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                            +91 7994341414
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Hours</p>
                          <p className="text-muted-foreground text-xs sm:text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-xl sm:text-2xl font-bold">Why Choose Us</h3>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        "Expert practitioners with specialized training",
                        "Medical-grade products and equipment",
                        "Personalized treatment plans",
                        "Comfortable, luxurious environment",
                        "Proven results and satisfied clients",
                        "Comprehensive aftercare support"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-foreground/90 text-sm sm:text-base">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Clinic Image */}
                <div className="relative group overflow-hidden rounded-2xl shadow-premium">
                  <img 
                    src={clinicInterior} 
                    alt="Sky Skin Clinic Interior" 
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Modern Facility</h4>
                      <p className="text-white/90 text-xs sm:text-sm">State-of-the-art equipment in a relaxing environment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Book Now CTA */}
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5 lg:sticky lg:top-8">
                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-4 sm:mb-6">
                        <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Book?</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                        Schedule your personalized consultation and begin your transformation journey
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-accent/30">
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold text-sm sm:text-base">Expert Consultation</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Personalized treatment plan</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-accent/30">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold text-sm sm:text-base">Quick & Easy</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Book in under 2 minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-accent/30">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold text-sm sm:text-base">No Payment Required</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Secure your slot today</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      size="lg" 
                      className="w-full text-lg sm:text-xl py-6 sm:py-8 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                        Book My Appointment
                      </div>
                    </Button>

                    <div className="mt-4 sm:mt-6 text-center space-y-1 sm:space-y-2">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Available Monday - Saturday, 9 AM - 7 PM
                      </p>
                      <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        <span>Instant confirmation</span>
                        <span>•</span>
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        <span>Free consultation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 opacity-0 animate-fade-up">
              Trusted by Thousands of Happy Clients
            </h3>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">10K+</div>
                <p className="text-muted-foreground text-xs sm:text-base">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">15+</div>
                <p className="text-muted-foreground text-xs sm:text-base">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">98%</div>
                <p className="text-muted-foreground text-xs sm:text-base">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default Book;