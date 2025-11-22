import { User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
export const DashboardHeader = () => {
  return <header className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Hello, Nikhil</h1>
        <p className="text-muted-foreground">Welcome back!</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full bg-card border border-border hover:bg-secondary" aria-label="View notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-card border border-border hover:bg-secondary" aria-label="View profile">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>;
};