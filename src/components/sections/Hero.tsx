
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BlockchainIcon, DataIcon } from "@/components/ui/icons";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 z-0"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-tech-blue-500/10 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 -right-20 h-60 w-60 rounded-full bg-accent-purple-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      <div className="container relative z-10 px-4 py-32 sm:py-40 md:py-48 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Revolutionizing <span className="text-gradient">AI Data Collection</span> with Blockchain
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A trustworthy crowdsourcing ecosystem that connects data contributors with enterprises needing verified, high-quality datasets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="font-medium">
              Explore Marketplace
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              Become a Contributor
            </Button>
          </motion.div>
        </div>
        
        {/* Animated visual below the hero text */}
        <motion.div
          className="mt-12 md:mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-lg bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-500/5 to-accent-purple-500/5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 md:gap-6 p-6">
                <motion.div 
                  className="card-glass rounded-lg p-4 flex items-center justify-center shadow-lg"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <BlockchainIcon className="h-10 w-10 md:h-12 md:w-12 text-tech-blue-500" />
                </motion.div>
                <motion.div 
                  className="card-glass rounded-lg p-4 flex items-center justify-center shadow-lg"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <DataIcon className="h-10 w-10 md:h-12 md:w-12 text-accent-purple-500" />
                </motion.div>
                <motion.div 
                  className="card-glass rounded-lg p-4 flex items-center justify-center shadow-lg"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <BlockchainIcon className="h-10 w-10 md:h-12 md:w-12 text-accent-orange-500" />
                </motion.div>
              </div>
            </div>
            
            {/* Animated data flows */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M150,100 C150,60 450,60 450,100"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="6,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              />
              <motion.path
                d="M450,130 C450,170 150,170 150,130"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="6,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b74ff" />
                  <stop offset="100%" stopColor="#a733ea" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a733ea" />
                  <stop offset="100%" stopColor="#3b74ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Trusted by innovative companies worldwide
          </motion.p>
          <motion.div 
            className="mt-4 flex flex-wrap justify-center gap-8 grayscale opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {/* Company logos would go here - using placeholder text instead */}
            <div className="h-7 flex items-center font-display tracking-tight">CompanyOne</div>
            <div className="h-7 flex items-center font-display tracking-tight">BrandTwo</div>
            <div className="h-7 flex items-center font-display tracking-tight">EnterpriseThree</div>
            <div className="h-7 flex items-center font-display tracking-tight">TechFour</div>
            <div className="h-7 flex items-center font-display tracking-tight">DataFive</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
