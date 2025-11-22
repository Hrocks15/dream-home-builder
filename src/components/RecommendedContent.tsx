import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Investing Basics",
    subtitle: "Stocks 101",
    gradient: "from-emerald-900/40 to-emerald-700/40",
  },
  {
    title: "Creating a Budget",
    subtitle: "Budgeting",
    gradient: "from-cyan-900/40 to-cyan-700/40",
  },
];

export const RecommendedContent = () => {
  return (
    <section className="mb-24" aria-label="Recommended courses">
      <h2 className="text-xl font-bold text-foreground mb-4">Recommended For You</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" role="list">
        {courses.map((course) => (
          <article
            key={course.title}
            className="flex-shrink-0 w-72 rounded-[2rem] overflow-hidden"
            role="listitem"
          >
            <div 
              className={`h-40 bg-gradient-to-br ${course.gradient} border border-border`}
              aria-hidden="true"
            />
            <div className="bg-card border border-t-0 border-border rounded-b-[2rem] p-5">
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
