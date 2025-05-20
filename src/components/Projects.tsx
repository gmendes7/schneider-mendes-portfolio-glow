
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RealProjectCard 
          title="Corpo em Equilíbrio Digital"
          description="Site para clínica de saúde e bem-estar, oferecendo informações sobre serviços de nutrição e fisioterapia."
          emoji="💪"
          url="https://corpo-em-equilibrio-digital.lovable.app"
        />
        {[1, 2].map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </section>
  );
};

interface RealProjectCardProps {
  title: string;
  description: string;
  emoji: string;
  url: string;
}

const RealProjectCard = ({ title, description, emoji, url }: RealProjectCardProps) => {
  return (
    <Card className="bg-card border border-border/30 overflow-hidden glow-effect flex flex-col">
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
        <div className="bg-background/20 backdrop-blur-sm p-3 rounded-full">
          <span className="text-lg">{emoji}</span>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-foreground/60 text-center mb-4 flex-grow">
          {description}
        </p>
        <div className="flex justify-center mt-auto">
          <Button 
            as="a" 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/80 mt-2"
          >
            Visitar Projeto <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
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
