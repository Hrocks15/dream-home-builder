import { Bell, ChevronRight } from "lucide-react";

export const OpportunityCard = () => {
  return (
    <div className="bg-secondary border border-border rounded-[2rem] p-5 mb-6 flex items-center gap-4">
      <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
        <Bell className="h-5 w-5 text-primary" />
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">New Investment Opportunity</h3>
        <p className="text-sm text-muted-foreground">
          Eco-friendly stocks are on the rise. Check it out!
        </p>
      </div>
      
      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
    </div>
  );
};
