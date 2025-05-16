
import { motion } from "framer-motion";
import Container from "@/components/common/Container";

const logos = [
  { name: "TechCorp", logo: "M10 2v8H2V2h8zm2-2H0v12h12V0z M4 4h4v4H4V4z" },
  { name: "DataSense", logo: "M0 0h9v9H6V3H0V0zm0 12V6h3v3h6v3H0z" },
  { name: "BlockVenture", logo: "M0 0v12h12V0H0zm10 10H2V2h8v8z" },
  { name: "AIMatrix", logo: "M0 0v5h5V0H0zm7 0v5h5V0H7zM0 7v5h5V7H0zm7 0v5h5V7H7z" },
  { name: "DataChain", logo: "M6 0L0 6l6 6 6-6-6-6zm0 2.828L8.172 5 6 7.172 3.828 5 6 2.828z" },
  { name: "TrustNet", logo: "M5 0a5 5 0 100 10A5 5 0 005 0zm0 2a3 3 0 110 6 3 3 0 010-6z" },
  { name: "SecureData", logo: "M5 0L0 3v6l5 3 5-3V3L5 0zM9 8.236L5 10.236 1 8.236V3.764L5 1.764l4 2v4.472z" },
  { name: "CryptoAI", logo: "M6 0a6 6 0 11-6 6 6 6 0 016-6zm0 2a4 4 0 100 8 4 4 0 000-8z" }
];

const TrustedLogos = () => {
  return (
    <div className="w-full overflow-hidden bg-background/60 py-6 backdrop-blur-sm">
      <Container>
        <h3 className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
          Trusted by innovative organizations
        </h3>
        
        <div className="relative overflow-hidden w-full">
          {/* First animation row */}
          <div className="flex items-center justify-center">
            <motion.div
              className="flex items-center gap-12 sm:gap-16 md:gap-24"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {/* Doubled logos for continuous loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex items-center justify-center h-8 w-24 text-muted-foreground/80">
                  <svg
                    viewBox="0 0 12 12"
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={logo.logo} />
                  </svg>
                  <span className="text-xs font-medium ml-2">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second animation row (reversed direction) */}
          <div className="flex items-center justify-center mt-8">
            <motion.div
              className="flex items-center gap-12 sm:gap-16 md:gap-24"
              animate={{
                x: [-1800, 0],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {/* Doubled and reversed logos for continuous loop */}
              {[...logos, ...logos].reverse().map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex items-center justify-center h-8 w-24 text-muted-foreground/80">
                  <svg
                    viewBox="0 0 12 12"
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={logo.logo} />
                  </svg>
                  <span className="text-xs font-medium ml-2">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustedLogos;
