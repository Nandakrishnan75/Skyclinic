import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone, Sparkles, X, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { sendAppointmentEmail } from "@/lib/emailjs";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent background scrolling when modal is open and handle animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Start animation after modal is rendered
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsAnimating(false);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      bookingSchema.parse(formData);
      setIsSubmitting(true);

      // Send email using EmailJS
      await sendAppointmentEmail(formData);

      setShowConfirmation(true);

      // Reset form after showing confirmation
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
        setShowConfirmation(false);
        onClose();
        toast.success("Booking confirmed! We'll contact you shortly.", {
          duration: 5000,
        });
      }, 3000);

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form for errors");
      } else {
        console.error('Email sending failed:', error);
        toast.error("Failed to send booking request. Please try again or call us directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 safe-area-top safe-area-bottom safe-area-left safe-area-right">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-4xl mobile-modal bg-white dark:bg-gray-900 rounded-lg xs:rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out flex flex-col ${isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>

        {/* Confirmation Screen */}
        {showConfirmation ? (
          <div className="relative p-6 xs:p-8 sm:p-10 lg:p-12 text-center bg-gradient-to-br from-background via-accent/5 to-background rounded-lg xs:rounded-xl overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            </div>
            
            {/* Success Icon with Animation */}
            <div className="relative mb-6 xs:mb-8">
              <div className="relative mx-auto">
                {/* Outer ring animation */}
                <div className="absolute inset-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-primary/20 animate-ping" 
                     style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                
                {/* Main success circle */}
                <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mx-auto rounded-full gradient-primary flex items-center justify-center shadow-premium animate-scale-in-center" 
                     style={{ animationDelay: '0.2s' }}>
                  <CheckCircle2 className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white opacity-0 animate-fade-in" 
                                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute -top-2 -right-2 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                  <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-primary animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                  <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-secondary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
              <h3 className="responsive-text-2xl font-bold text-foreground opacity-0 animate-fade-up" 
                  style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Appointment Confirmed!
              </h3>
              <p className="responsive-text-base text-muted-foreground opacity-0 animate-fade-up max-w-md mx-auto" 
                 style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                Thank you, <span className="font-semibold text-foreground">{formData.name}</span>! Your consultation has been successfully scheduled.
              </p>
            </div>

            {/* Appointment Details */}
            <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8 opacity-0 animate-fade-up" 
                 style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              
              {/* Date & Time */}
              <div className="flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl bg-accent/30 border border-border/50">
                <Calendar className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="responsive-text-sm font-semibold text-foreground">{formData.date}</p>
                  <p className="responsive-text-xs text-muted-foreground">at {formData.time}</p>
                </div>
              </div>

              {/* Service */}
              <div className="flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl bg-accent/30 border border-border/50">
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="responsive-text-sm font-semibold text-foreground">{formData.service}</p>
                  <p className="responsive-text-xs text-muted-foreground">Treatment selected</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center gap-2 xs:gap-3 p-3 xs:p-4 rounded-xl bg-accent/30 border border-border/50">
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-primary flex-shrink-0" />
                <div className="text-center">
                  <p className="responsive-text-sm font-semibold text-foreground">{formData.phone}</p>
                  <p className="responsive-text-xs text-muted-foreground">We'll call to confirm</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="p-4 xs:p-5 rounded-xl bg-primary/5 border border-primary/20 opacity-0 animate-fade-up" 
                 style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 xs:w-7 xs:h-7 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 xs:w-4 xs:h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="responsive-text-sm font-semibold text-foreground mb-1">What's Next?</p>
                  <p className="responsive-text-xs text-muted-foreground leading-relaxed">
                    Our team will contact you within 24 hours to confirm your appointment and answer any questions you may have.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements for visual appeal */}
            <div className="absolute top-4 left-4 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="absolute top-8 right-6 opacity-20 animate-pulse" style={{ animationDelay: '2.5s' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            </div>
            <div className="absolute bottom-6 left-8 opacity-20 animate-pulse" style={{ animationDelay: '3s' }}>
              <div className="w-1 h-1 rounded-full bg-primary" />
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-3 xs:p-4 sm:p-6 lg:p-8 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-t-lg xs:rounded-t-xl">
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-5">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg xs:rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                  <Calendar className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h2 className="responsive-text-lg font-bold text-gray-900 dark:text-white">Book Your Appointment</h2>
                  <p className="text-gray-600 dark:text-gray-300 responsive-text-xs">Schedule your consultation with us</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="rounded-full w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 p-0 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 tap-target"
              >
                <X className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>

            {/* Form Container */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <form onSubmit={handleSubmit} className="p-3 xs:p-4 sm:p-6 lg:p-8 space-y-4 xs:space-y-6 sm:space-y-8">
                <div className="grid mobile-grid-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-name" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <User className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="modal-name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 tap-target ${errors.name ? "border-destructive" : "focus:border-primary"}`}
                    />
                    {errors.name && <p className="responsive-text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-email" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Email *
                    </Label>
                    <Input
                      id="modal-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 tap-target ${errors.email ? "border-destructive" : "focus:border-primary"}`}
                    />
                    {errors.email && <p className="responsive-text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid mobile-grid-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-phone" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Phone *
                    </Label>
                    <Input
                      id="modal-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 12345 67890"
                      className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 tap-target ${errors.phone ? "border-destructive" : "focus:border-primary"}`}
                    />
                    {errors.phone && <p className="responsive-text-xs text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-service" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Select Treatment *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white tap-target ${errors.service ? "border-destructive" : "focus:border-primary"}`}>
                        <SelectValue placeholder="Choose your desired treatment" className="text-gray-500 dark:text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 z-50 max-h-60">
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                        <SelectItem value="microneedling">Microneedling</SelectItem>
                        <SelectItem value="hydrafacial">Hydrafacial</SelectItem>
                        <SelectItem value="laser-hair">Laser Hair Removal</SelectItem>
                        <SelectItem value="carbon-peel">Carbon Peel</SelectItem>
                        <SelectItem value="chemical-peel">Chemical Peel</SelectItem>
                        <SelectItem value="hifu-face">HIFU for Face</SelectItem>
                        <SelectItem value="hifu-vagina">HIFU for Vaginal Rejuvenation</SelectItem>
                        <SelectItem value="prp-face">PRP for Face</SelectItem>
                        <SelectItem value="prp-hair">PRP for Hair</SelectItem>
                        <SelectItem value="botox">Botox</SelectItem>
                        <SelectItem value="fillers">Dermal Fillers</SelectItem>
                        <SelectItem value="iv-glutathione">IV Glutathione</SelectItem>
                        <SelectItem value="skin-boosters">Skin Boosters</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="responsive-text-xs text-destructive">{errors.service}</p>}
                  </div>
                </div>

                <div className="grid mobile-grid-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-date" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="modal-date"
                      type="date"
                      min={minDate}
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white tap-target ${errors.date ? "border-destructive" : "focus:border-primary"}`}
                    />
                    {errors.date && <p className="responsive-text-xs text-destructive">{errors.date}</p>}
                  </div>

                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    <Label htmlFor="modal-time" className="flex items-center gap-1.5 xs:gap-2 responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                      <SelectTrigger className={`h-10 xs:h-11 sm:h-12 responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white tap-target ${errors.time ? "border-destructive" : "focus:border-primary"}`}>
                        <SelectValue placeholder="Select time" className="text-gray-500 dark:text-gray-400" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 z-50">
                        <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                        <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                        <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                        <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                        <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                        <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                        <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.time && <p className="responsive-text-xs text-destructive">{errors.time}</p>}
                  </div>
                </div>

                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <Label htmlFor="modal-message" className="responsive-text-sm font-semibold text-gray-800 dark:text-gray-200">Additional Notes</Label>
                  <Textarea
                    id="modal-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your skin concerns or any questions..."
                    rows={3}
                    className={`responsive-text-sm transition-all duration-200 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 ${errors.message ? "border-destructive" : "focus:border-primary"}`}
                  />
                  {errors.message && <p className="responsive-text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 pt-4 xs:pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 h-12 xs:h-13 sm:h-14 responsive-text-sm border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 tap-target"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 h-12 xs:h-13 sm:h-14 responsive-text-sm gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105 tap-target"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Booking...
                      </div>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </div>

                <div className="text-center responsive-text-xs text-gray-600 dark:text-gray-400 mt-3 xs:mt-4">
                  We'll confirm your appointment within 24 hours
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;