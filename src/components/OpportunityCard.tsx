import { Bell, ChevronRight } from "lucide-react";

export const OpportunityCard = () => {
  return (
    <button 
      className="w-full bg-secondary border border-border rounded-[2rem] p-5 mb-6 flex items-center gap-4 hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="View new investment opportunity: Eco-friendly stocks are on the rise"
    >
      <div className="bg-primary/20 rounded-full p-3 flex-shrink-0" aria-hidden="true">
        <Bell className="h-5 w-5 text-primary" />
      </div>
      
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-foreground mb-1">New Investment Opportunity</h3>
        <p className="text-sm text-muted-foreground">
          Eco-friendly stocks are on the rise. Check it out!
        </p>
      </div>
      
      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
    </button>
  );
};
