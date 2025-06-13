
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
      badge: "🚗 FULL STACK",
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
      badge: "⚙️ API REST",
      links: {
        demo: "https://vortex-energy-web.vercel.app",
        github: "#"
      }
    },
    {
      title: "Phantom AI Kanban Flow",
      description: "Sistema de gerenciamento de projetos com IA integrada, oferecendo fluxo de trabalho otimizado e automação inteligente.",
      image: "/placeholder.svg",
      technologies: ["React", "AI Integration", "Real-time"],
      category: "SaaS",
      featured: false,
      badge: "👻 AI POWERED",
      links: {
        demo: "https://phantom-ai-kanban-flow.lovable.app",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-ferrari bg-ferrari/10 px-3 py-1 rounded-full border border-ferrari/20 mb-4 inline-block font-orbitron">
          🏁 Projetos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-orbitron">
          Principais <span className="racing-gradient">Conquistas</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-inter">
          Uma seleção dos meus trabalhos mais recentes, demonstrando velocidade, técnica e performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <p className="text-foreground/60 mb-6 font-inter">
          Interessado em ver mais projetos ou acelerar uma nova parceria?
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="border-2 border-gold/30 text-gold hover:bg-gold/10 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 font-orbitron"
        >
          <Github className="w-5 h-5 mr-2" />
          Ver Garage Completo
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
    badge: string;
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
      className={`group bg-card/50 border border-ferrari/20 hover:border-ferrari/40 overflow-hidden transition-all duration-500 hover:scale-105 racing-glow animate-fade-in ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-ferrari/90 text-white border-0 font-orbitron">
              <Zap className="w-3 h-3 mr-1" />
              POLE POSITION
            </Badge>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-gold/30 text-gold font-orbitron">
            {project.category}
          </Badge>
        </div>

        <AspectRatio ratio={project.featured ? 16/9 : 4/3}>
          <div className="w-full h-full bg-gradient-to-br from-ferrari/20 via-gold/10 to-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
            {/* Racing dashboard style visualization */}
            <div className="text-6xl opacity-50">
              {project.title.includes("Phantom") ? "👻" : 
               project.title.includes("Vortex") ? "⚡" : "🏎️"}
            </div>
            
            {/* Racing stripes */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ferrari/5 to-transparent skew-x-12 animate-pulse" />
          </div>
        </AspectRatio>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-ferrari transition-colors duration-300 font-orbitron">
              {project.title}
            </h3>
            <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded font-orbitron">
              {project.badge}
            </span>
          </div>
          <p className="text-foreground/70 text-sm leading-relaxed font-inter">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs bg-muted/50 hover:bg-ferrari/10 transition-colors duration-300 font-inter"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-ferrari hover:bg-ferrari-dark text-white font-orbitron"
            asChild
          >
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Test Drive
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 font-orbitron"
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
