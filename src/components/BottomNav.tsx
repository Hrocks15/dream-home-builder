import { Home, GraduationCap, Wrench, User, TrendingUp } from "lucide-react";
const navItems = [{
  icon: Home,
  label: "Home",
  active: true
}, {
  icon: GraduationCap,
  label: "Learn",
  active: false
}, {
  icon: Wrench,
  label: "Tools",
  active: false
}, {
  icon: User,
  label: "Profile",
  active: false
}];
export const BottomNav = () => {
  return <nav className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col" aria-label="Main navigation">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">WealthGrow</h2>
        </div>
      </div>
      
      <div className="flex-1 py-6">
        {navItems.map(item => <button key={item.label} aria-label={item.label} aria-current={item.active ? "page" : undefined} className={`w-full flex items-center gap-3 px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${item.active ? "bg-primary/10 border-r-2 border-primary text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
            <item.icon className="h-5 w-5" aria-hidden="true" />
            <span className="font-medium">
              {item.label}
            </span>
          </button>)}
      </div>
    </nav>;
};