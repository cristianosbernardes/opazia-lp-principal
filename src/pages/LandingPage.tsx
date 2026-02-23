import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";
import { RegistrationModal } from "@/components/RegistrationModal";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <RegistrationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <Header scrollTo={scrollToSection} onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero scrollTo={scrollToSection} onOpenModal={() => setIsModalOpen(true)} />
        <PainPoints />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing onOpenModal={() => setIsModalOpen(true)} />
        <FAQ />
        <CallToAction onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer scrollTo={scrollToSection} />
    </div>
  );
}

export default LandingPage;
