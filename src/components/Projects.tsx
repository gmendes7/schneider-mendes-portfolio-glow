
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Schneider Mendes Portfolio",
      description: "Um portfólio completo recriado com design profissional, responsivo e animado. Focado em performance e experiência do usuário.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      category: "Portfolio",
      featured: true,
      links: {
        demo: "https://schneider-mendes-portfolio-glow.lovable.app",
        github: "#"
      }
    },
    {
      title: "Vortex Energy Web",
      description: "Site moderno sobre energia renovável com design impactante e navegação fluida. Implementação de animações de scroll e interface interativa.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Tailwind", "Supabase", "Scroll Animations"],
      category: "Web App",
      featured: true,
      links: {
        demo: "https://vortex-energy-web.vercel.app",
        github: "#"
      }
    },
    {
      title: "Corpo em Equilíbrio Digital",
      description: "Site para clínica de saúde e bem-estar, oferecendo informações sobre serviços de nutrição e fisioterapia com design clean e acessível.",
      image: "/placeholder.svg",
      technologies: ["React", "CSS3", "JavaScript"],
      category: "Landing Page",
      featured: false,
      links: {
        demo: "https://corpo-em-equilibrio-digital.lovable.app",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
          🚀 Projetos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Principais <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projetos</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Uma seleção dos meus trabalhos mais recentes, demonstrando criatividade, técnica e atenção aos detalhes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <p className="text-foreground/60 mb-6">
          Interessado em ver mais projetos ou colaborar em algo novo?
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
        >
          <Github className="w-5 h-5 mr-2" />
          Ver todos no GitHub
        </Button>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    featured: boolean;
    links: {
      demo: string;
      github: string;
    };
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className={`group bg-card/50 border border-border/30 hover:border-primary/20 overflow-hidden transition-all duration-500 hover:scale-105 glow-effect animate-fade-in ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-primary/90 text-white border-0">
              <Zap className="w-3 h-3 mr-1" />
              Destaque
            </Badge>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/30">
            {project.category}
          </Badge>
        </div>

        <AspectRatio ratio={project.featured ? 16/9 : 4/3}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <div className="text-6xl opacity-50">🚀</div>
          </div>
        </AspectRatio>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10"
            asChild
          >
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
