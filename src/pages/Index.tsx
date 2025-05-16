
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactForm from "@/components/sections/ContactForm";
import CTA from "@/components/sections/CTA";

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
