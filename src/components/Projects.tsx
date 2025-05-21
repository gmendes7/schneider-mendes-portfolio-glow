
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Triangle, Ghost } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RealProjectCard 
          title="Corpo em Equilíbrio Digital"
          description="Site para clínica de saúde e bem-estar, oferecendo informações sobre serviços de nutrição e fisioterapia."
          emoji="🌱"
          url="https://corpo-em-equilibrio-digital.lovable.app"
        />
        <RealProjectCard 
          title="Trinity Digital Canvas"
          description="Projeto de desenvolvimento com aspectos de design mais escuros, focado em interfaces modernas."
          url="https://trinity-digital-canvas.lovable.app"
          darkTheme={true}
          icon={<Triangle className="w-8 h-8 text-white" />}
        />
        <RealProjectCard 
          title="Phantom AI Kanban Flow"
          description="Ferramenta de gerenciamento de projetos com interface moderna e funcionalidades avançadas."
          url="https://phantom-ai-kanban-flow.lovable.app"
          darkTheme={true}
          icon={<Ghost className="w-8 h-8 text-purple-400" />}
        />
      </div>
    </section>
  );
};

interface RealProjectCardProps {
  title: string;
  description: string;
  emoji?: string;
  url: string;
  imageUrl?: string;
  darkTheme?: boolean;
  icon?: React.ReactNode;
}

const RealProjectCard = ({ title, description, emoji, url, imageUrl, darkTheme, icon }: RealProjectCardProps) => {
  return (
    <Card className={`bg-card border border-border/30 overflow-hidden glow-effect flex flex-col ${darkTheme ? 'bg-gray-900' : ''}`}>
      <div className={`h-40 flex items-center justify-center ${darkTheme 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-primary/20 to-accent/10'}`}>
        {imageUrl ? (
          <AspectRatio ratio={16/9} className="h-full w-full">
            <img 
              src={imageUrl} 
              alt={title} 
              className="object-contain h-full w-full p-4" 
            />
          </AspectRatio>
        ) : (
          <div className={`${darkTheme 
            ? 'bg-gray-800/80 backdrop-blur-sm' 
            : 'bg-emerald-600/20 backdrop-blur-sm'} p-3 rounded-full flex items-center justify-center`}>
            {icon ? icon : <span className="text-2xl">{emoji}</span>}
          </div>
        )}
      </div>
      <CardContent className={`p-6 flex-grow flex flex-col ${darkTheme ? 'text-gray-200' : ''}`}>
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <p className={`text-center mb-4 flex-grow ${darkTheme ? 'text-gray-400' : 'text-foreground/60'}`}>
          {description}
        </p>
        <div className="flex justify-center mt-auto">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded flex items-center justify-center mt-2 ${darkTheme 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-primary hover:bg-primary/80 text-white'}`}
          >
            Visitar Projeto <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
