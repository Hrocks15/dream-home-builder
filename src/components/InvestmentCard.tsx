import { TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InvestmentCard = () => {
  return (
    <div className="bg-card border border-border rounded-[2rem] p-6 mb-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-muted-foreground text-sm mb-1">Total Investments</p>
          <p className="text-3xl font-bold text-foreground">₹1,50,000</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-1">Growth Rate</p>
          <p className="text-3xl font-bold text-success">+8.3%</p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl h-12 font-semibold">
          <TrendingUp className="h-4 w-4 mr-2" />
          Invest Now
        </Button>
        <Button variant="secondary" className="flex-1 rounded-2xl h-12 font-semibold">
          <GraduationCap className="h-4 w-4 mr-2" />
          Start Learning
        </Button>
      </div>
    </div>
  );
};
