import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-hover opacity-0 animate-fade-up bg-gradient-to-br from-background to-accent/5"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 gradient-primary opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-5' : ''}`} />
      
      <div className="relative p-8 xs:p-10 sm:p-8">
        <div className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-16 sm:h-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mb-6 xs:mb-7 sm:mb-6 transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
          <Icon className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl xs:text-xl sm:text-xl font-heading font-semibold mb-3 xs:mb-4 sm:mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-base xs:text-base sm:text-[15px]">
          {description}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 gradient-primary transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </Card>
  );
};

export default ServiceCard;
