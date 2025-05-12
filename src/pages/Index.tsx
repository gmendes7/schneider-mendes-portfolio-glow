
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/30 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-full w-full -z-10">
        <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-20" />
      </div>

      <Header openContactModal={openContactModal} />
      
      <main className="relative z-10">
        <Hero openContactModal={openContactModal} />
        <TechStack />
        <Projects />
      </main>
      
      <Footer />
      
      <ContactModal 
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
};

export default Index;
