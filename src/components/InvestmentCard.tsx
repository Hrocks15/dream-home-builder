import { TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
export const InvestmentCard = () => {
  return <section className="bg-card border border-border rounded-[2rem] p-6 mb-6" aria-label="Investment overview">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-muted-foreground text-sm mb-1" id="total-investments-label">Total Investments</p>
          <p className="text-3xl font-bold text-foreground" aria-labelledby="total-investments-label">₹1,50,000</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-1" id="growth-rate-label">Growth Rate</p>
          <p className="text-3xl font-bold text-success" aria-labelledby="growth-rate-label">+5.0%</p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl h-12 font-semibold" aria-label="Start investing now">
          <TrendingUp className="h-4 w-4 mr-2" aria-hidden="true" />
          Invest Now
        </Button>
        <Button variant="secondary" className="flex-1 rounded-2xl h-12 font-semibold" aria-label="Begin learning about investing">
          <GraduationCap className="h-4 w-4 mr-2" aria-hidden="true" />
          Start Learning
        </Button>
      </div>
    </section>;
};