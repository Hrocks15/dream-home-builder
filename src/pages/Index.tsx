import { DashboardHeader } from "@/components/DashboardHeader";
import { InvestmentCard } from "@/components/InvestmentCard";
import { LiteracyProgress } from "@/components/LiteracyProgress";
import { OpportunityCard } from "@/components/OpportunityCard";
import { QuickActions } from "@/components/QuickActions";
import { RecommendedContent } from "@/components/RecommendedContent";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <BottomNav />
      <main className="flex-1 px-8 py-6 ml-64">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <InvestmentCard />
          </div>
          <div>
            <LiteracyProgress />
          </div>
        </div>

        <div className="mb-6">
          <OpportunityCard />
        </div>

        <div className="mb-6">
          <QuickActions />
        </div>

        <RecommendedContent />
      </main>
    </div>
  );
};

export default Index;
