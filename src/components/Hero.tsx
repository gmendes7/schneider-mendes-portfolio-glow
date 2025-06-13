
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const Hero = ({ openContactModal }: { openContactModal: () => void }) => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 section relative overflow-hidden">
      {/* Racing inspired background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-ferrari/10 rounded-full filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full filter blur-3xl opacity-40 animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Checkered flag pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 checkered-pattern opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-24 h-24 checkered-pattern opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-medium text-ferrari bg-ferrari/10 px-3 py-1 rounded-full border border-ferrari/20 font-orbitron">
                🏎️ Desenvolvedor Full Stack
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-orbitron">
              <span className="text-foreground">Olá, sou</span>
              <br />
              <span className="racing-gradient">
                Gabriel Mendes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed font-inter">
              <span className="text-ferrari font-medium">"Sempre em busca da volta mais rápida</span> — 
              <span className="text-gold font-medium"> no código e na vida"</span>
            </p>
            <p className="text-lg text-foreground/60 font-inter">
              Transformando <span className="text-ferrari font-medium">ideias complexas</span> em 
              <span className="text-gold font-medium"> soluções elegantes</span> através de código limpo e design intuitivo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              onClick={openContactModal}
              size="lg"
              className="bg-ferrari hover:bg-ferrari-dark text-white px-8 py-6 rounded-xl racing-glow shadow-lg hover:shadow-ferrari/25 transition-all duration-300 hover:scale-105 font-orbitron animate-racing-pulse"
            >
              Acelerar Conversa
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gold/30 text-gold hover:bg-gold/10 px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:border-gold/50 font-orbitron"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-foreground/60 font-inter">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ferrari rounded-full animate-pulse"></div>
              <span>Disponível para projetos</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌍 Brasil • 🇺🇸 English • 🇩🇪 Deutsch</span>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-ferrari/30 via-gold/30 to-white/30 rounded-2xl blur-2xl opacity-50 animate-float"></div>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-ferrari/20 racing-glow shadow-2xl">
              {/* Racing dashboard style */}
              <div className="code-block font-mono text-sm text-foreground/90 space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-ferrari rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                  <span className="text-foreground/60 text-xs font-orbitron">gabriel-portfolio.ts</span>
                </div>
                <div><span className="text-ferrari">const</span> <span className="text-gold">developer</span> = {'{'}</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-white">name</span>: <span className="text-ferrari">"Gabriel Mendes"</span>,</div>
                  <div><span className="text-white">age</span>: <span className="text-gold">18</span>,</div>
                  <div><span className="text-white">role</span>: <span className="text-ferrari">"Full Stack Developer"</span>,</div>
                  <div><span className="text-white">education</span>: <span className="text-ferrari">"Computer Science"</span>,</div>
                  <div><span className="text-white">languages</span>: [<span className="text-ferrari">"PT"</span>, <span className="text-gold">"EN"</span>, <span className="text-ferrari">"DE"</span>],</div>
                  <div><span className="text-white">passion</span>: <span className="text-ferrari">"Code & Speed"</span>,</div>
                  <div><span className="text-white">available</span>: <span className="text-gold">true</span></div>
                </div>
                <div>{'}'};</div>
                <div className="pt-2"><span className="text-gray-500 font-orbitron">// Ready to race! 🏎️</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Racing-style scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full border border-ferrari/20 hover:bg-ferrari/10 transition-all duration-300"
        >
          <ArrowDown className="w-5 h-5 text-ferrari" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
