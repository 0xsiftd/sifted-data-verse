
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Contributors submit various types of data through our mobile and web applications, earning rewards for their contributions.",
  },
  {
    number: "02",
    title: "Blockchain Verification",
    description: "All submitted data is verified and secured on our blockchain, ensuring transparency and immutability.",
  },
  {
    number: "03",
    title: "Quality Validation",
    description: "Our AI-powered system validates data quality, ensuring only the highest quality datasets reach the marketplace.",
  },
  {
    number: "04",
    title: "Enterprise Access",
    description: "Businesses access verified, high-quality datasets through our marketplace, with complete transparency of origin and validation.",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="block mb-2 text-sm font-medium text-tech-blue-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Process
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How <span className="text-gradient">siftd.xyz</span> Works
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our blockchain-powered platform simplifies the process of collecting, verifying, and accessing high-quality data.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%-120px)]">
            <motion.svg 
              width="1" 
              height="100%" 
              viewBox="0 0 1 1000" 
              fill="none" 
              className="absolute"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path 
                d="M 0.5,0 V 1000" 
                stroke="url(#linearGradient)" 
                strokeWidth="2"
                strokeDasharray="6 4"
                variants={lineVariants}
              />
              <defs>
                <linearGradient id="linearGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b74ff" />
                  <stop offset="50%" stopColor="#a733ea" />
                  <stop offset="100%" stopColor="#ff6d1f" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
                  <div className="md:w-1/2 relative">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-r from-tech-blue-500 to-accent-purple-500 flex items-center justify-center text-white font-medium text-lg z-10 md:absolute md:left-[calc(50%-32px)] md:top-0">
                      {step.number}
                    </div>
                    <div className="w-full aspect-[4/3] mt-8 md:mt-0 bg-gradient-to-br from-tech-blue-100/30 to-accent-purple-100/30 dark:from-tech-blue-900/10 dark:to-accent-purple-900/10 rounded-xl overflow-hidden border border-border flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-6xl font-display text-tech-blue-500 dark:text-tech-blue-400 opacity-80">
                          {`0${index + 1}`}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
