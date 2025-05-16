
import { motion } from "framer-motion";
import { BlockchainIcon, DataIcon, SecurityIcon, RewardsIcon, NetworkIcon, QualityIcon, DecentralizedIcon } from "@/components/ui/icons";

const features = [
  {
    icon: <BlockchainIcon className="h-6 w-6 text-tech-blue-500" />,
    title: "Blockchain Verified",
    description: "All data is verified and secured using cutting-edge blockchain technology ensuring immutability and trust."
  },
  {
    icon: <SecurityIcon className="h-6 w-6 text-accent-purple-500" />,
    title: "Enterprise Security",
    description: "End-to-end encryption and secure protocols protect sensitive data throughout the collection process."
  },
  {
    icon: <RewardsIcon className="h-6 w-6 text-accent-orange-500" />,
    title: "Fair Compensation",
    description: "Contributors are fairly rewarded for their valuable data through transparent smart contracts."
  },
  {
    icon: <QualityIcon className="h-6 w-6 text-tech-blue-500" />,
    title: "Quality Assurance",
    description: "Advanced validation mechanisms ensure only high-quality, relevant data makes it to the marketplace."
  },
  {
    icon: <NetworkIcon className="h-6 w-6 text-accent-purple-500" />,
    title: "Global Network",
    description: "Access a diverse pool of contributors from around the world for comprehensive data collection."
  },
  {
    icon: <DecentralizedIcon className="h-6 w-6 text-accent-orange-500" />,
    title: "Decentralized Infrastructure",
    description: "No single point of failure means your data collection processes remain resilient and reliable."
  }
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="block mb-2 text-sm font-medium text-tech-blue-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Makes Us <span className="text-gradient">Different</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform combines blockchain technology with AI to create a secure, transparent, and efficient data marketplace that benefits both contributors and enterprises.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-card hover:bg-card/80 border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/5 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
