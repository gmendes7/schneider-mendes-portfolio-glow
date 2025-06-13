
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Código limpo, arquiteturas robustas e soluções escaláveis",
      badge: "⚙️ TECH"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovação",
      description: "Sempre buscando tecnologias emergentes e melhores práticas",
      badge: "🚀 INNOVATION"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Otimização constante para experiências rápidas e fluidas",
      badge: "⚡ SPEED"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação clara são fundamentais",
      badge: "🏆 TEAM"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 animate-fade-in">
          <div>
            <span className="text-sm font-medium text-ferrari bg-ferrari/10 px-3 py-1 rounded-full border border-ferrari/20 mb-4 inline-block font-orbitron">
              🏎️ Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-orbitron">
              Apaixonado por <span className="racing-gradient">código</span> e <span className="racing-gradient">velocidade</span>
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed font-inter">
            <p>
              Meu nome é <span className="text-ferrari font-medium">Gabriel</span>, tenho 18 anos e sou completamente apaixonado por tecnologia e pelo poder que o código tem de transformar ideias em realidade. Desde cedo, descobri na programação uma forma de expressão — onde cada linha escrita é uma peça essencial na construção de algo maior.
            </p>
            
            <p>
              Atualmente, sou estudante de <span className="text-gold font-medium">Ciência da Computação</span> e desenvolvedor em constante evolução. Sou fluente em <span className="text-ferrari font-medium">inglês e alemão</span>, o que me permite explorar documentações, comunidades e oportunidades globais com facilidade. Estou sempre em busca de novos desafios, aprendizados e formas de impactar positivamente o mundo através da tecnologia.
            </p>
            
            <p>
              Solteiro e focado nos meus projetos, dedico meu tempo a estudar, programar e me aprofundar em sistemas, inteligência de software, boas práticas e design de código limpo. Gosto de pensar que não estou apenas escrevendo códigos, mas <span className="text-ferrari font-medium">construindo soluções inteligentes, robustas e escaláveis</span>.
            </p>
            
            <p>
              Se quiser conhecer mais sobre meu trabalho, meus projetos ou trocar uma ideia sobre tecnologia, <span className="text-gold font-medium">será um prazer!</span>
            </p>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold text-foreground mb-6 font-orbitron">O que me move</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <Card key={quality.title} className="bg-card/50 border border-ferrari/20 hover:border-ferrari/40 transition-all duration-300 hover:scale-105 racing-glow group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 relative">
                  <div className="absolute top-2 right-2">
                    <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded font-orbitron">
                      {quality.badge}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mt-4">
                    <div className="p-2 bg-ferrari/10 rounded-lg text-ferrari group-hover:bg-ferrari/20 transition-colors duration-300">
                      {quality.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 font-orbitron">{quality.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed font-inter">{quality.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-ferrari/10 to-gold/10 rounded-xl border border-ferrari/20">
            <h4 className="font-semibold text-foreground mb-3 font-orbitron">🏁 Em números</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-ferrari font-orbitron">50+</div>
                <div className="text-sm text-foreground/60 font-inter">Projetos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold font-orbitron">3</div>
                <div className="text-sm text-foreground/60 font-inter">Idiomas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-orbitron">2+</div>
                <div className="text-sm text-foreground/60 font-inter">Anos coding</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-ferrari font-orbitron">∞</div>
                <div className="text-sm text-foreground/60 font-inter">Velocidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
