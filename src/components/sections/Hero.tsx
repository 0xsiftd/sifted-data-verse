
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlockchainIcon, DataIcon } from "@/components/ui/icons";
import DemoRequestForm from "@/components/sections/DemoRequestForm";
import TrustedLogos from "@/components/sections/TrustedLogos";
import Container from "@/components/common/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

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
      
      <Container className="relative z-10 py-32 sm:py-40 md:py-48">
        <motion.div
          style={{ opacity, scale }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Revolutionizing <span className="text-gradient animated-gradient-text">AI Data Collection</span> with Blockchain
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A trustworthy crowdsourcing ecosystem that connects data contributors with enterprises needing verified, high-quality datasets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/marketplace">
              <Button size="lg" className="font-medium">
                Get Started Now
              </Button>
            </Link>
            <DemoRequestForm />
          </motion.div>
        </motion.div>
        
        {/* Enhanced blockchain data visualization */}
        <motion.div
          className="mt-12 md:mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-lg bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-500/5 to-accent-purple-500/5"></div>
            
            {/* Blockchain data flow visualization */}
            <div className="absolute inset-0">
              {/* Blockchain network visualization */}
              <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Network background grid */}
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Blockchain nodes */}
                <motion.circle cx="150" cy="225" r="20" fill="url(#nodeGradient1)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle cx="320" cy="150" r="18" fill="url(#nodeGradient2)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
                <motion.circle cx="500" cy="225" r="22" fill="url(#nodeGradient3)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                />
                <motion.circle cx="650" cy="150" r="16" fill="url(#nodeGradient4)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.9, 0.7] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                />
                <motion.circle cx="320" cy="300" r="17" fill="url(#nodeGradient2)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
                />
                <motion.circle cx="650" cy="300" r="19" fill="url(#nodeGradient1)" filter="url(#glow)" 
                  animate={{ scale: [1, 1.08, 1], opacity: [0.75, 0.95, 0.75] }}
                  transition={{ duration: 4.2, repeat: Infinity, delay: 0.8 }}
                />

                {/* Data packet motions along the blockchain */}
                <motion.circle cx="150" cy="225" r="5" fill="#ffffff" 
                  animate={{ 
                    cx: [150, 320, 500, 650],
                    cy: [225, 150, 225, 150],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                />
                
                <motion.circle cx="650" cy="300" r="4" fill="#ffffff" 
                  animate={{ 
                    cx: [650, 500, 320, 150],
                    cy: [300, 225, 300, 225],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, delay: 2 }}
                />
                
                {/* Connection lines between nodes */}
                <motion.path d="M150,225 L320,150" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
                />
                <motion.path d="M320,150 L500,225" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 1 }}
                />
                <motion.path d="M500,225 L650,150" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 2 }}
                />
                <motion.path d="M150,225 L320,300" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 0.5 }}
                />
                <motion.path d="M320,300 L500,225" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 1.5 }}
                />
                <motion.path d="M500,225 L650,300" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 2.5 }}
                />
                <motion.path d="M320,150 L320,300" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 3 }}
                />
                <motion.path d="M650,150 L650,300" strokeWidth="2" stroke="url(#lineGradient)" 
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3, delay: 3.5 }}
                />

                {/* Block data */}
                <motion.rect x="130" y="205" width="40" height="40" rx="4" stroke="#3b74ff" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.rect x="300" y="130" width="40" height="40" rx="4" stroke="#a733ea" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.rect x="480" y="205" width="40" height="40" rx="4" stroke="#3b74ff" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                <motion.rect x="630" y="130" width="40" height="40" rx="4" stroke="#a733ea" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                />
                <motion.rect x="300" y="280" width="40" height="40" rx="4" stroke="#3b74ff" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
                />
                <motion.rect x="630" y="280" width="40" height="40" rx="4" stroke="#a733ea" strokeWidth="1" fill="none"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
                />

                {/* Definitions */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b74ff" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#a733ea" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#3b74ff" stopOpacity="0.4" />
                  </linearGradient>
                  <radialGradient id="nodeGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#3b74ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b74ff" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="nodeGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#a733ea" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a733ea" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="nodeGradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#ff9900" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff9900" stopOpacity="0.3" />
                  </radialGradient>
                  <radialGradient id="nodeGradient4" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00c2ff" stopOpacity="0.3" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16">
          <TrustedLogos />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
