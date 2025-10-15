import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone, Sparkles, X, CheckCircle2, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
      
      // Simulate booking submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-100 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-xl shadow-premium border border-border/50 transform scale-100 transition-transform duration-300 flex flex-col">
        
        {/* Confirmation Screen */}
        {showConfirmation ? (
          <div className="p-12 text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center transform scale-100 transition-transform duration-300">
                <CheckCircle2 className="w-12 h-12 text-white opacity-100 transition-opacity duration-300" style={{ animationDelay: '200ms' }} />
              </div>
              <div className="absolute inset-0 animate-ping">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/20" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              Booking Confirmed!
            </h3>
            <p className="text-xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
              Thank you, {formData.name}! We've received your appointment request.
            </p>
            <div className="space-y-2 text-muted-foreground animate-fade-up" style={{ animationDelay: '500ms' }}>
              <p>📅 {formData.date} at {formData.time}</p>
              <p>💆‍♀️ {formData.service}</p>
              <p>📞 We'll call you at {formData.phone} to confirm</p>
            </div>
            
            {/* Celebration Animation */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce">
              <PartyPopper className="w-8 h-8 text-primary opacity-60" />
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-border/50 flex-shrink-0">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Book Your Appointment</h2>
                  <p className="text-muted-foreground text-lg">Schedule your consultation with us</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="rounded-full w-12 h-12 p-0 hover:bg-muted"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Form Container */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <form onSubmit={handleSubmit} className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label htmlFor="modal-name" className="flex items-center gap-2 text-base font-medium">
                    <User className="w-5 h-5 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={`h-12 text-base transition-all duration-200 ${errors.name ? "border-destructive" : "focus:border-primary"}`}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-4">
                  <Label htmlFor="modal-email" className="flex items-center gap-2 text-base font-medium">
                    <Mail className="w-5 h-5 text-primary" />
                    Email *
                  </Label>
                  <Input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`h-12 text-base transition-all duration-200 ${errors.email ? "border-destructive" : "focus:border-primary"}`}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label htmlFor="modal-phone" className="flex items-center gap-2 text-base font-medium">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone *
                  </Label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 12345 67890"
                    className={`h-12 text-base transition-all duration-200 ${errors.phone ? "border-destructive" : "focus:border-primary"}`}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-4">
                  <Label htmlFor="modal-service" className="flex items-center gap-2 text-base font-medium">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Select Treatment *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className={`h-12 text-base transition-all duration-200 ${errors.service ? "border-destructive" : "focus:border-primary"}`}>
                      <SelectValue placeholder="Choose your desired treatment" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50 max-h-60">
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
                  {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label htmlFor="modal-date" className="flex items-center gap-2 text-base font-medium">
                    <Calendar className="w-5 h-5 text-primary" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="modal-date"
                    type="date"
                    min={minDate}
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={`h-12 text-base transition-all duration-200 ${errors.date ? "border-destructive" : "focus:border-primary"}`}
                  />
                  {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
                </div>

                <div className="space-y-4">
                  <Label htmlFor="modal-time" className="flex items-center gap-2 text-base font-medium">
                    <Clock className="w-5 h-5 text-primary" />
                    Preferred Time *
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                    <SelectTrigger className={`h-12 text-base transition-all duration-200 ${errors.time ? "border-destructive" : "focus:border-primary"}`}>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
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
                  {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="modal-message" className="text-base font-medium">Additional Notes</Label>
                <Textarea
                  id="modal-message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your skin concerns or any questions..."
                  rows={4}
                  className={`text-base transition-all duration-200 ${errors.message ? "border-destructive" : "focus:border-primary"}`}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <div className="flex gap-6 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 h-14 text-base"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 h-14 text-base gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105"
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

                <div className="text-center text-sm text-muted-foreground">
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