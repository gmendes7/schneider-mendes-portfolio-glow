
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-primary/3 rounded-full filter blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-accent/3 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-emerald-500/3 rounded-full filter blur-3xl opacity-35 animate-float" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      <Header openContactModal={openContactModal} />
      
      <main className="relative z-10 overflow-hidden">
        <Hero openContactModal={openContactModal} />
        <About />
        <Skills />
        <Projects />
        <Contact />
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
