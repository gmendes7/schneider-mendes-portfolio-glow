
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-gradient">&lt;SM/&gt;</span>
            <p className="mt-2 text-foreground/60">
              Desenvolvedor Full Stack
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/schjneiderr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="tel:+5567991415904" 
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Telefone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:schjneidermendes@gmail.com" 
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border/30 pt-8 text-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Schneider Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
