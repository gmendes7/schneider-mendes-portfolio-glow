
import { Card, CardContent } from "@/components/ui/card";

const TechStack = () => {
  const frontendTechs = [
    { name: "React", icon: "react" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
  ];

  const backendTechs = [
    { name: "Node.js", icon: "node" },
    { name: "Express", icon: "javascript" },
    { name: "MongoDB", icon: "database" },
  ];

  const TechCard = ({ tech }: { tech: { name: string; icon: string } }) => {
    return (
      <Card className="bg-card/50 border border-border/30 hover:border-primary/20 glow-effect transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-primary">
            <span className="text-3xl">{tech.icon === "react" ? "⚛️" : 
              tech.icon === "html" ? "🌐" : 
              tech.icon === "css" ? "🎨" : 
              tech.icon === "javascript" ? "📜" : 
              tech.icon === "node" ? "🟢" : 
              tech.icon === "database" ? "🗄️" : "💻"}</span>
          </div>
          <h3 className="font-medium text-lg">{tech.name}</h3>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="tech" className="section">
      <h2 className="section-title">Tecnologias</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-xl text-primary font-medium mb-4">Front-end</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {frontendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-primary font-medium mb-4">Back-end</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {backendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
