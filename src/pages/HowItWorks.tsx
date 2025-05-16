
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksSection from "@/components/sections/HowItWorks";
import Container from "@/components/common/Container";

const HowItWorks = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">Our Process</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              How <span className="text-gradient">siftd.xyz</span> Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Our blockchain-powered platform simplifies the process of collecting, verifying, and accessing high-quality data.
            </p>
          </motion.div>
        </Container>
        
        <HowItWorksSection />
        
        <Container className="mt-16">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <h2>Additional details about our process</h2>
            <p>
              Content with more details about how siftd.xyz works will go here...
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
