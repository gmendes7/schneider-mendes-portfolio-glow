
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Código limpo, arquiteturas robustas e soluções escaláveis"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovação",
      description: "Sempre buscando tecnologias emergentes e melhores práticas"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Otimização constante para experiências rápidas e fluidas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação clara são fundamentais"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 animate-fade-in">
          <div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
              🚀 Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Apaixonado por <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">tecnologia</span> e inovação
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Meu nome é <span className="text-primary font-medium">Gabriel</span>, tenho 18 anos e sou completamente apaixonado por tecnologia e pelo poder que o código tem de transformar ideias em realidade. Desde cedo, descobri na programação uma forma de expressão — onde cada linha escrita é uma peça essencial na construção de algo maior.
            </p>
            
            <p>
              Atualmente, sou estudante de <span className="text-accent font-medium">Ciência da Computação</span> e desenvolvedor em constante evolução. Sou fluente em <span className="text-emerald-500 font-medium">inglês e alemão</span>, o que me permite explorar documentações, comunidades e oportunidades globais com facilidade. Estou sempre em busca de novos desafios, aprendizados e formas de impactar positivamente o mundo através da tecnologia.
            </p>
            
            <p>
              Solteiro e focado nos meus projetos, dedico meu tempo a estudar, programar e me aprofundar em sistemas, inteligência de software, boas práticas e design de código limpo. Gosto de pensar que não estou apenas escrevendo códigos, mas <span className="text-primary font-medium">construindo soluções inteligentes, robustas e escaláveis</span>.
            </p>
            
            <p>
              Se quiser conhecer mais sobre meu trabalho, meus projetos ou trocar uma ideia sobre tecnologia, <span className="text-accent font-medium">será um prazer!</span>
            </p>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold text-foreground mb-6">O que me move</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((quality, index) => (
              <Card key={quality.title} className="bg-card/50 border border-border/30 hover:border-primary/20 transition-all duration-300 hover:scale-105 glow-effect group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {quality.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{quality.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{quality.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3">📊 Em números</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-foreground/60">Projetos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm text-foreground/60">Idiomas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-500">2+</div>
                <div className="text-sm text-foreground/60">Anos coding</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">∞</div>
                <div className="text-sm text-foreground/60">Curiosidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
