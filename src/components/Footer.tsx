
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 py-12 border-t border-ferrari/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* LED strip effect */}
        <div className="w-full h-1 led-strip mb-8 rounded-full" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold racing-gradient font-orbitron">&lt;GM/&gt;</span>
            <p className="mt-2 text-foreground/60 font-inter">
              Desenvolvedor Full Stack
            </p>
            <p className="text-sm text-foreground/50 font-orbitron">
              "Sempre na pole position da inovação"
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/schjneiderr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-ferrari transition-colors racing-glow"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="tel:+5567991415904" 
              className="text-foreground/60 hover:text-gold transition-colors racing-glow"
              aria-label="Telefone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:schjneidermendes@gmail.com" 
              className="text-foreground/60 hover:text-white transition-colors racing-glow"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-ferrari/20 pt-8 text-center">
          <p className="text-foreground/50 text-sm font-inter">
            © {new Date().getFullYear()} Gabriel Mendes. Todos os direitos reservados.
          </p>
          <p className="text-ferrari/60 text-xs mt-2 font-orbitron">
            🏁 Built for speed, designed for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
