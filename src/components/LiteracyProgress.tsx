import { Progress } from "@/components/ui/progress";

export const LiteracyProgress = () => {
  return (
    <section className="bg-card border border-border rounded-[2rem] p-6 mb-6" aria-label="Financial literacy progress">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Your Literacy Progress</h2>
        <span className="text-2xl font-bold text-foreground" aria-label="65 percent complete">65%</span>
      </div>
      
      <Progress value={65} className="h-3 mb-4" aria-label="Progress bar showing 65% completion" />
      
      <p className="text-muted-foreground text-sm">
        Great job! Keep going to unlock new investment opportunities.
      </p>
    </section>
  );
};
