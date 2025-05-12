
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = ({ openContactModal }: { openContactModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gradient">&lt;SM/&gt;</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("tech")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Tecnologias
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              onClick={openContactModal} 
              className="bg-primary hover:bg-primary/80 text-white"
            >
              Fale comigo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection("home")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("tech")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary"
            >
              Tecnologias
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="block w-full text-left py-2 text-foreground hover:text-primary"
            >
              Projetos
            </button>
            <Button 
              onClick={() => {
                openContactModal();
                setMobileMenuOpen(false);
              }} 
              className="w-full mt-2 bg-primary hover:bg-primary/80 text-white"
            >
              Fale comigo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
