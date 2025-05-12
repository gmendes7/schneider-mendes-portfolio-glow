
import { Button } from "@/components/ui/button";

const Hero = ({ openContactModal }: { openContactModal: () => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-foreground">Olá, sou</span>
            <br />
            <span className="text-gradient">Schneider Mendes</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 font-light">
            Desenvolvedor <span className="text-primary">Full Stack</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Transformando ideias em experiências digitais através de código limpo e design intuitivo.
          </p>
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={openContactModal}
              className="bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-md glow-effect"
              size="lg"
            >
              Fale comigo
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-md"
              size="lg"
            >
              Ver Projetos
            </Button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-30 animate-float"></div>
            <div className="relative bg-card rounded-2xl p-8 border border-border/50 glow-effect">
              <div className="code-block font-mono text-sm text-foreground/80">
                <div className="mb-2"><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</div>
                <div className="ml-4">
                  <span className="text-green-400">name</span>: <span className="text-yellow-300">"Schneider Mendes"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">title</span>: <span className="text-yellow-300">"Full Stack Developer"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">skills</span>: [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node.js"</span>, <span className="text-yellow-300">"MongoDB"</span>],
                </div>
                <div className="ml-4">
                  <span className="text-green-400">available</span>: <span className="text-purple-400">true</span>
                </div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
