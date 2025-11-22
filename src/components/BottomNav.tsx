import { Home, GraduationCap, Wrench, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: GraduationCap, label: "Learn", active: false },
  { icon: Wrench, label: "Tools", active: false },
  { icon: User, label: "Profile", active: false },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around py-4 px-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <item.icon 
              className={`h-6 w-6 ${
                item.active ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span
              className={`text-xs font-medium ${
                item.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
