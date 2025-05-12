
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, MessageSquare } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const contactInfo = [
    {
      icon: <Instagram size={20} />,
      title: "Instagram",
      value: "@schjneiderr",
      link: "https://instagram.com/schjneiderr",
    },
    {
      icon: <Phone size={20} />,
      title: "Telefone",
      value: "(67) 99141-5904",
      link: "tel:+5567991415904",
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "schjneidermendes@gmail.com",
      link: "mailto:schjneidermendes@gmail.com",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border/50 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">Entre em contato</DialogTitle>
          <DialogDescription>
            Escolha a melhor forma de falarmos sobre seu projeto ou oportunidade.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-2">
          {contactInfo.map((item) => (
            <a 
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-muted rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                {item.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm text-foreground/60">{item.title}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            </a>
          ))}
          
          <Button className="w-full bg-primary hover:bg-primary/80 text-white gap-2 mt-4">
            <MessageSquare size={16} />
            Enviar mensagem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
