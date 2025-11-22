import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Good morning, Alex</h1>
        <p className="text-muted-foreground">Welcome back!</p>
      </div>
      <Button variant="ghost" size="icon" className="rounded-full bg-card border border-border">
        <User className="h-5 w-5" />
      </Button>
    </header>
  );
};
