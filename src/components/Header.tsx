
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-ferrari/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold font-orbitron racing-gradient hover:scale-105 transition-transform duration-300"
            >
              &lt;GM/&gt;
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-ferrari transition-all duration-300 font-medium relative group font-inter"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ferrari transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={openContactModal} 
              className="bg-ferrari hover:bg-ferrari-dark text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 racing-glow font-orbitron"
            >
              Fale comigo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-ferrari/10 transition-colors duration-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="text-ferrari" /> : <Menu className="text-ferrari" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-ferrari/20 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground hover:text-ferrari transition-colors duration-300 font-medium font-inter"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                openContactModal();
                setMobileMenuOpen(false);
              }} 
              className="w-full mt-4 bg-ferrari hover:bg-ferrari-dark text-white py-3 rounded-xl transition-all duration-300 font-orbitron"
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
