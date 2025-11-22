import { Progress } from "@/components/ui/progress";

export const LiteracyProgress = () => {
  return (
    <div className="bg-card border border-border rounded-[2rem] p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Your Literacy Progress</h2>
        <span className="text-2xl font-bold text-foreground">65%</span>
      </div>
      
      <Progress value={65} className="h-3 mb-4" />
      
      <p className="text-muted-foreground text-sm">
        Great job! Keep going to unlock new investment opportunities.
      </p>
    </div>
  );
};
