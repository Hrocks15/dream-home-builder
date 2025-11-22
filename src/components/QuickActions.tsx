import { Calculator, HandCoins, TrendingUp, HelpCircle } from "lucide-react";
const actions = [{
  icon: Calculator,
  label: "Calculators"
}, {
  icon: HandCoins,
  label: "Get a Loan"
}, {
  icon: TrendingUp,
  label: "Market News"
}, {
  icon: HelpCircle,
  label: "Support"
}];
export const QuickActions = () => {
  return <nav className="grid grid-cols-2 gap-4 mb-8" aria-label="Quick actions">
      {actions.map(action => <button key={action.label} aria-label={`Open ${action.label}`} className="border border-border rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background bg-input">
          <action.icon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
          <span className="text-foreground font-medium">{action.label}</span>
        </button>)}
    </nav>;
};