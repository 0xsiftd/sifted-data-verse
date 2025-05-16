
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

const Marketplace = () => {
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
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">Data Marketplace</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">siftd.xyz</span> Marketplace
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore and purchase verified, high-quality datasets for your AI and machine learning models.
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p>
              Content for the Marketplace page will go here...
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
