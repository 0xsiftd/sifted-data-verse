
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp", className: "font-display text-xl tracking-tight" },
  { name: "DataFlow", className: "font-display text-xl tracking-tight" },
  { name: "BlockSync", className: "font-display text-xl tracking-tight" },
  { name: "Neural AI", className: "font-display text-xl tracking-tight" },
  { name: "Quantum Data", className: "font-display text-xl tracking-tight" },
  { name: "BlueChain", className: "font-display text-xl tracking-tight" },
  { name: "InnoTech", className: "font-display text-xl tracking-tight" },
  { name: "CyberCore", className: "font-display text-xl tracking-tight" },
];

const TrustedLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos];
  
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground">Trusted by innovative companies worldwide</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
          ref={scrollRef}
        >
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className={`h-8 ${logo.className}`}>{logo.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedLogos;
