
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-500/20 to-accent-purple-500/20 z-0"></div>
          <div className="absolute inset-0 bg-grid z-0 opacity-30"></div>
          
          {/* Animated blob */}
          <div className="absolute -top-40 -right-40 h-80 w-80">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-tech-blue-400/30 to-accent-purple-400/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          
          <div className="relative z-10 py-16 px-4 md:px-8 lg:py-20 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 max-w-3xl mx-auto">
                Ready to Transform Your <span className="text-gradient">Data Collection</span> Process?
              </h2>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join the revolution in AI data marketplaces and discover how blockchain-verified data can elevate your business decisions.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg">Get Started Now</Button>
              <Button variant="outline" size="lg">Schedule a Demo</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
