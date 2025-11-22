import { Calculator, HandCoins, TrendingUp, HelpCircle } from "lucide-react";

const actions = [
  { icon: Calculator, label: "Calculators" },
  { icon: HandCoins, label: "Get a Loan" },
  { icon: TrendingUp, label: "Market News" },
  { icon: HelpCircle, label: "Support" },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {actions.map((action) => (
        <button
          key={action.label}
          className="bg-card border border-border rounded-[2rem] p-6 flex flex-col items-center justify-center gap-3 hover:bg-secondary transition-colors"
        >
          <action.icon className="h-6 w-6 text-muted-foreground" />
          <span className="text-foreground font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};
