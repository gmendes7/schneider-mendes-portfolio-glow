
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

  const SkillSpeedometer = ({ skill, index }: { skill: any, index: number }) => {
    const rotation = (skill.level / 100) * 180 - 90; // -90 to 90 degrees
    
    return (
      <div className="relative w-24 h-24 mx-auto mb-4">
        {/* Speedometer background */}
        <div className="w-full h-full rounded-full speedometer-bg relative overflow-hidden">
          {/* RPM marks */}
          <div className="absolute inset-2 rounded-full border border-ferrari/30">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((mark) => (
              <div
                key={mark}
                className="absolute w-0.5 h-2 bg-foreground/40"
                style={{
                  top: '2px',
                  left: '50%',
                  transformOrigin: '50% 44px',
                  transform: `translateX(-50%) rotate(${mark * 22.5 - 90}deg)`
                }}
              />
            ))}
          </div>
          
          {/* Needle */}
          <div
            className="absolute w-0.5 h-8 bg-ferrari origin-bottom left-1/2 bottom-1/2 transition-transform duration-1000 ease-out"
            style={{
              transform: `translateX(-50%) rotate(${rotation}deg)`,
              animationDelay: `${index * 0.1}s`
            }}
          />
          
          {/* Center dot */}
          <div className="absolute w-2 h-2 bg-ferrari rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Digital display */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
          <div className="bg-black/80 px-2 py-1 rounded text-ferrari text-xs font-orbitron font-bold">
            {skill.level}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-ferrari bg-ferrari/10 px-3 py-1 rounded-full border border-ferrari/20 mb-4 inline-block font-orbitron">
          🏎️ Habilidades
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-orbitron">
          Tecnologias & <span className="racing-gradient">Performance</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-inter">
          Minhas principais ferramentas para criar soluções digitais velozes e escaláveis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={category.title} 
            className="bg-card/50 border border-ferrari/20 hover:border-ferrari/40 transition-all duration-300 racing-glow group animate-fade-in" 
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground font-orbitron">{category.title}</h3>
                <div className="ml-auto">
                  <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded font-orbitron">
                    🏁 SKILLS
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="group/skill"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-foreground text-sm font-inter">{skill.name}</span>
                      <Badge variant="outline" className="text-xs border-ferrari/30 text-ferrari font-orbitron">
                        {skill.level} RPM
                      </Badge>
                    </div>
                    
                    {/* Racing-style progress bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden border border-ferrari/20">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out opacity-80 group-hover/skill:opacity-100 relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Racing stripes effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Speed indicator */}
                      <div 
                        className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-ferrari rounded-full transition-all duration-1000"
                        style={{ left: `${skill.level}%` }}
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
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ferrari/10 to-gold/10 px-6 py-3 rounded-full border border-ferrari/20">
          <span className="text-sm font-medium text-foreground font-orbitron">
            🚀 Sempre aprendendo novas tecnologias e aprimorando a performance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
