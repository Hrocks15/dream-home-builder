import { Button } from "@/components/ui/button";
import investingBasicsImg from "@/assets/investing-basics.jpg";
import creatingBudgetImg from "@/assets/creating-budget.jpg";

const courses = [
  {
    title: "Investing Basics",
    subtitle: "Stocks 101",
    image: investingBasicsImg,
  },
  {
    title: "Creating a Budget",
    subtitle: "Budgeting",
    image: creatingBudgetImg,
  },
];

export const RecommendedContent = () => {
  return (
    <section className="mb-8" aria-label="Recommended courses">
      <h2 className="text-xl font-bold text-foreground mb-4">Recommended For You</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" role="list">
        {courses.map((course) => (
          <article
            key={course.title}
            className="rounded-[2rem] overflow-hidden hover:border-primary/50 transition-colors"
            role="listitem"
          >
            <div 
              className="h-48 border border-border overflow-hidden"
            >
              <img 
                src={course.image} 
                alt={`${course.title} course illustration`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-card border border-t-0 border-border rounded-b-[2rem] p-6">
              <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.subtitle}</p>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/80 text-foreground rounded-2xl"
                aria-label={`Start learning ${course.title}`}
              >
                Start Learning
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
