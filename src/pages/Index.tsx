import { DashboardHeader } from "@/components/DashboardHeader";
import { InvestmentCard } from "@/components/InvestmentCard";
import { LiteracyProgress } from "@/components/LiteracyProgress";
import { OpportunityCard } from "@/components/OpportunityCard";
import { QuickActions } from "@/components/QuickActions";
import { RecommendedContent } from "@/components/RecommendedContent";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-lg mx-auto px-6 py-8">
        <DashboardHeader />
        <InvestmentCard />
        <LiteracyProgress />
        <OpportunityCard />
        <QuickActions />
        <RecommendedContent />
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
