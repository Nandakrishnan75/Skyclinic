import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle2, Star, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import treatmentRoom from "@/assets/treatment-room.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Book Your Appointment
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 opacity-0 animate-fade-up text-balance" style={{ animationDelay: '100ms' }}>
            Begin Your
            <br />
            <span className="text-primary">Beauty Journey</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Schedule your personalized consultation and take the first step towards radiant, confident skin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Side - Clinic Info & Benefits */}
              <div className="space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
                
                {/* Clinic Information Card */}
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Sky Skin Clinic</h3>
                        <p className="text-muted-foreground">Premium Skincare & Aesthetics</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground text-sm">
                            North Fort Gate, Opposite to Old Sreekala Theatre<br />
                            Thripunithura, Kochi
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:+917994341414" className="text-primary hover:underline">
                            +91 79-94341414
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-muted-foreground text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold">Why Choose Us</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        "Expert practitioners with specialized training",
                        "Medical-grade products and equipment",
                        "Personalized treatment plans",
                        "Comfortable, luxurious environment",
                        "Proven results and satisfied clients",
                        "Comprehensive aftercare support"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-foreground/90">{benefit}</p>
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
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Modern Facility</h4>
                      <p className="text-white/90 text-sm">State-of-the-art equipment in a relaxing environment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Book Now CTA */}
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <Card className="shadow-premium border-border/50 bg-gradient-to-br from-background to-accent/5 sticky top-8">
                  <CardContent className="p-10 text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Schedule your personalized consultation and begin your transformation journey
                      </p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30">
                        <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold">Expert Consultation</p>
                          <p className="text-sm text-muted-foreground">Personalized treatment plan</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold">Quick & Easy</p>
                          <p className="text-sm text-muted-foreground">Book in under 2 minutes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/30">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-semibold">No Payment Required</p>
                          <p className="text-sm text-muted-foreground">Secure your slot today</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      size="lg" 
                      className="w-full text-xl py-8 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        Book My Appointment
                      </div>
                    </Button>

                    <div className="mt-6 text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Available Monday - Saturday, 9 AM - 7 PM
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 opacity-0 animate-fade-up">
              Trusted by Thousands of Happy Clients
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
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