import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Zap, Wind, Sun, Shield, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import prpTreatment from "@/assets/prp-treatment.jpg";
import hifuTreatment from "@/assets/hifu-treatment.jpg";
import skinBoosters from "@/assets/skin-boosters.jpg";
import treatmentProcess from "@/assets/treatment-process.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Microneedling",
      description: "Advanced collagen induction therapy to improve skin texture, reduce scars, and enhance overall skin rejuvenation.",
    },
    {
      icon: Droplets,
      title: "Hydrafacial",
      description: "Deep cleansing and hydration treatment that extracts impurities while infusing nourishing serums for instant glow.",
    },
    {
      icon: Zap,
      title: "Laser Hair Removal",
      description: "Permanent hair reduction using advanced laser technology for smooth, hair-free skin.",
    },
    {
      icon: Wind,
      title: "Carbon Peel",
      description: "Deep exfoliation treatment that removes dead skin cells, reduces pores, and improves skin texture.",
    },
    {
      icon: Sun,
      title: "Chemical Peel",
      description: "Professional-grade exfoliation to reveal brighter, smoother, and more youthful-looking skin.",
    },
    {
      icon: Shield,
      title: "Laser Tattoo Removal",
      description: "Safe and effective laser treatment to fade and remove unwanted tattoos.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Comprehensive skin analysis using advanced diagnostics to understand your concerns, goals, and lifestyle factors.",
    },
    {
      number: "02",
      title: "Custom Plan",
      description: "Personalized treatment roadmap designed specifically for your skin type, concerns, and desired outcomes.",
    },
    {
      number: "03",
      title: "Treatment",
      description: "Relax in our tranquil treatment rooms while our expert aestheticians deliver precise, results-driven care.",
    },
    {
      number: "04",
      title: "Aftercare",
      description: "Customized home skincare routine with professional-grade products and scheduled follow-ups to maintain results.",
    },
  ];

  return (
    <div className="mobile-min-vh-100 prevent-scroll">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-12 xs:pb-16 sm:pb-20 relative overflow-hidden safe-area-top">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center relative z-10 safe-area-left safe-area-right">
          <div className="inline-block mb-4 xs:mb-5 sm:mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
            <span className="px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs xs:text-sm font-medium border border-primary/20">
              Premium Treatments
            </span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 xs:mb-6 sm:mb-8 opacity-0 animate-fade-up text-balance leading-[1.05] xs:leading-[1.1]" style={{ animationDelay: '100ms' }}>
            Expertly Curated
            <br />
            <span className="text-primary">Transformations</span>
          </h1>
          
          <p className="text-base xs:text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto opacity-0 animate-fade-up leading-relaxed px-3 xs:px-4" style={{ animationDelay: '200ms' }}>
            Advanced skincare solutions designed to reveal your skin's healthiest, most radiant potential
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments with Images */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-block mb-3 sm:mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20">
                  Featured Treatments
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
                Experience Our Signature Services
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-up px-4" style={{ animationDelay: '200ms' }}>
                Discover the transformative power of our most sought-after treatments
              </p>
            </div>
            
            <div className="space-y-12 sm:space-y-16">
              {/* PRP Treatment */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <div className="order-2 lg:order-1">
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      NATURAL REJUVENATION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">PRP Treatments</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Platelet-Rich Plasma (PRP) therapy harnesses your body's natural healing power. This revolutionary treatment uses concentrated plasma rich in growth factors from your own blood to stimulate collagen production and cell regeneration.
                  </p>
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>PRP for Face:</strong> Eliminates fine lines and wrinkles for a natural, youthful glow</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>PRP for Hair:</strong> Reverses hair loss and activates dormant follicles</span>
                    </div>
                  </div>
                  <Link to="/book">
                    <Button size="lg" className="w-full sm:w-auto gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                      Book PRP Treatment
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-primary rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <img 
                      src={prpTreatment} 
                      alt="PRP Treatment" 
                      className="relative rounded-2xl shadow-premium w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* HIFU Treatment */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-primary rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <img 
                      src={hifuTreatment} 
                      alt="HIFU Treatment" 
                      className="relative rounded-2xl shadow-premium w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      NON-INVASIVE LIFTING
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">HIFU Treatments</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    High-Intensity Focused Ultrasound (HIFU) is a revolutionary non-surgical facelift alternative. Using ultrasound energy, it targets deep skin layers to stimulate collagen production and tighten skin naturally.
                  </p>
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>HIFU for Face:</strong> Non-invasive facelift with immediate tightening effects</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>HIFU for Vaginal Rejuvenation:</strong> Restore confidence with safe, effective treatment</span>
                    </div>
                  </div>
                  <Link to="/book">
                    <Button size="lg" className="w-full sm:w-auto gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                      Book HIFU Treatment
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Advanced Skin Boosters */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center opacity-0 animate-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="order-2 lg:order-1">
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      PREMIUM INJECTABLES
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Advanced Skin Boosters</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Our comprehensive range of injectable treatments offers targeted solutions for every aesthetic concern. From wrinkle reduction to volume enhancement and skin brightening.
                  </p>
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>Botox & Fillers:</strong> Smooth wrinkles and restore facial volume</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>IV Glutathione:</strong> Master antioxidant for skin brightening</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90"><strong>Skin Boosters:</strong> Deep hydration and radiance from within</span>
                    </div>
                  </div>
                  <Link to="/book">
                    <Button size="lg" className="w-full sm:w-auto gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-primary rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <img 
                      src={skinBoosters} 
                      alt="Skin Boosters and Injectables" 
                      className="relative rounded-2xl shadow-premium w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0ms' }}>
                <div className="relative">
                  <div className="absolute inset-0 gradient-primary rounded-2xl opacity-20 blur-2xl" />
                  <img 
                    src={treatmentProcess} 
                    alt="Treatment Process" 
                    className="relative rounded-2xl shadow-premium w-full h-[600px] object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="text-left mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      Our Process
                    </span>
                  </div>
                  <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                    Your Path to Radiance
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    A seamless journey from consultation to lasting transformation
                  </p>
                </div>
                
                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <div
                      key={step.number}
                      className="flex gap-6 items-start opacity-0 animate-fade-up group"
                      style={{ animationDelay: `${200 + idx * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 gradient-primary rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
                          <div className="relative w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110 transition-smooth shadow-premium">
                            {step.number}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 pt-1">
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Your Experience
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
                What to Expect
              </h2>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                Every visit is designed for comfort, care, and exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Personalized skin assessment and analysis",
                "Luxurious, relaxing treatment environment",
                "Medical-grade products and equipment",
                "Expert guidance and education",
                "Visible results from your first visit",
                "Ongoing support and follow-up care",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 opacity-0 animate-fade-up group hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${300 + idx * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                  <span className="text-lg text-foreground/90">{item}</span>
                </div>
              ))}
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
                Ready to Begin?
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 opacity-0 animate-fade-up text-balance" style={{ animationDelay: '100ms' }}>
              Discover Your Perfect Treatment
            </h2>
            
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Book a consultation and let our experts create your personalized transformation plan
            </p>
            
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link to="/book">
                <Button size="lg" className="text-base px-12 py-7 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white">
                  Book Your Treatment
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

export default Services;
