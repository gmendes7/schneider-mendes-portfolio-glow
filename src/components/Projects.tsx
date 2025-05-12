
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = () => {
  return (
    <Card className="bg-card border border-border/30 overflow-hidden glow-effect">
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
        <div className="bg-background/20 backdrop-blur-sm p-3 rounded-full">
          <span className="text-lg">🚀</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Projetos em breve...</h3>
        <p className="text-foreground/60 text-center">
          Mais projetos interessantes estão sendo desenvolvidos. Fique ligado!
        </p>
      </CardContent>
    </Card>
  );
};

export default Projects;
