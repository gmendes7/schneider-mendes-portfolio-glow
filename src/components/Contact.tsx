
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Download, Linkedin, Github, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve! 🚀",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gabriel-mendes",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub", 
      href: "https://github.com/gabriel-mendes",
      color: "hover:text-gray-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/schjneiderr",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">
          📬 Contato
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Vamos <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">conversar?</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Interessado em colaborar, trocar ideias ou discutir oportunidades? Adoraria ouvir de você!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 animate-fade-in">
          <Card className="bg-card/50 border border-border/30 glow-effect">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Envie uma mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl transition-all duration-300 hover:scale-105 glow-effect"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Contact Details */}
          <Card className="bg-card/50 border border-border/30">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Informações de contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>schjneidermendes@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+55 67 99141-5904</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Brasil</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card/50 border border-border/30">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Redes sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className={`border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download CV */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Currículo</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Baixe meu currículo completo em PDF
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </CardContent>
          </Card>

          {/* Availability */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-emerald-500">Disponível para projetos</span>
            </div>
            <p className="text-sm text-foreground/70">
              Resposta em até 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
