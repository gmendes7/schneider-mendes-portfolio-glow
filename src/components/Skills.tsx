
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-500" },
        { name: "Python", level: 80, color: "bg-green-500" },
        { name: "SQL", level: 75, color: "bg-purple-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "C", level: 70, color: "bg-gray-500" }
      ]
    },
    {
      title: "Frameworks & Libs",
      icon: "⚡",
      skills: [
        { name: "React", level: 90, color: "bg-cyan-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
        { name: "Node.js", level: 80, color: "bg-green-600" },
        { name: "Express", level: 75, color: "bg-gray-600" },
        { name: "Supabase", level: 85, color: "bg-emerald-600" }
      ]
    },
    {
      title: "Ferramentas",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "bg-orange-600" },
        { name: "Figma", level: 80, color: "bg-purple-600" },
        { name: "Vercel", level: 90, color: "bg-gray-800" },
        { name: "Docker", level: 70, color: "bg-blue-600" },
        { name: "Prisma", level: 75, color: "bg-indigo-600" },
        { name: "VS Code", level: 95, color: "bg-blue-500" }
      ]
    },
    {
      title: "Conceitos",
      icon: "🧠",
      skills: [
        { name: "UI/UX Design", level: 85, color: "bg-pink-500" },
        { name: "Clean Code", level: 90, color: "bg-green-500" },
        { name: "Arquitetura de Software", level: 80, color: "bg-purple-500" },
        { name: "Testes", level: 75, color: "bg-red-500" },
        { name: "Performance", level: 85, color: "bg-yellow-500" },
        { name: "Acessibilidade", level: 80, color: "bg-blue-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
          🛠️ Habilidades
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Tecnologias & <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertises</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Minhas principais ferramentas para criar soluções digitais impactantes e escaláveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={category.title} 
            className="bg-card/50 border border-border/30 hover:border-primary/20 transition-all duration-300 glow-effect group animate-fade-in" 
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="group/skill"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out opacity-80 group-hover/skill:opacity-100`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
          <span className="text-sm font-medium text-foreground">
            🚀 Sempre aprendendo novas tecnologias e aprimorando minhas habilidades
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
