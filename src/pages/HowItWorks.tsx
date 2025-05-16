
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksSection from "@/components/sections/HowItWorks";
import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const additionalDetails = [
    {
      title: "Blockchain Verification Technology",
      content: `Our proprietary blockchain verification system creates an immutable record of each dataset's origin, collection methodology, and validation process. This ensures complete traceability and transparency in the data supply chain.
      
      Key features include:
      • Cryptographic proof of data origin
      • Immutable audit trails
      • Smart contracts for automated validation
      • Decentralized storage for enhanced security
      • Transparent contributor compensation`
    },
    {
      title: "Quality Assurance Process",
      content: `All data on siftd.xyz undergoes a rigorous multi-stage verification process:
      
      1. Automated validation checks for format and completeness
      2. AI-powered anomaly detection to flag potential issues
      3. Human expert review for domain-specific validation
      4. Consensus-based verification through our validator network
      5. Final certification and blockchain registration
      
      This approach ensures that only high-quality, reliable data enters our marketplace.`
    },
    {
      title: "Contributor Compensation Model",
      content: `Our fair compensation system ensures that data contributors receive appropriate rewards for their valuable contributions:
      
      • Performance-based rewards tied to data quality
      • Transparent payment calculation visible to all contributors
      • Reputation scoring that increases earning potential over time
      • Smart contracts that automate payments upon validation
      • Bonus incentives for specialized or high-demand datasets`
    },
    {
      title: "Enterprise Integration Framework",
      content: `Enterprises can seamlessly integrate verified data from siftd.xyz into their existing systems:
      
      • Comprehensive API suite for direct data access
      • Custom data formats to match specific requirements
      • Bulk data export in industry-standard formats
      • Webhook integration for real-time data updates
      • Dedicated support for complex implementation needs
      
      Our integration specialists work with your team to ensure smooth and effective adoption.`
    },
    {
      title: "Data Privacy and Security",
      content: `We implement industry-leading security measures to protect all data on our platform:
      
      • End-to-end encryption for all data transfers
      • Anonymization techniques for sensitive information
      • Role-based access controls for enterprise clients
      • Regular security audits and penetration testing
      • Compliance with GDPR, CCPA, and other privacy regulations
      
      Our security-first approach ensures that data remains protected throughout its lifecycle on our platform.`
    },
    {
      title: "Continuous Platform Improvement",
      content: `The siftd.xyz platform evolves continuously based on community feedback and technological advances:
      
      • Regular feature updates based on user suggestions
      • Ongoing optimization of blockchain verification mechanisms
      • Expansion of supported data types and formats
      • Enhancement of validation algorithms
      • Integration of emerging technologies as they mature
      
      We believe in constant improvement to deliver the best possible experience for all platform participants.`
    },
  ];

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
        
        <Container className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-display font-bold text-center mb-10"
          >
            Additional details about our process
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {additionalDetails.map((detail, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {detail.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {detail.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-secondary/30 rounded-lg p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-4">Ready to experience the future of data?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a contributor or an enterprise looking for verified data, siftd.xyz has the solution for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <a href="/marketplace">
                  Explore Marketplace <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contributors">
                  Become a Contributor <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h2>Blockchain Verification: Behind the Scenes</h2>
            <p>
              At the heart of siftd.xyz is our revolutionary blockchain verification system that transforms how data is collected, validated, and distributed. This technology creates a transparent, immutable record of every dataset's journey through our platform.
            </p>
            
            <h3>The Verification Chain</h3>
            <p>
              When data enters our ecosystem, it initiates a verification chain that tracks every interaction:
            </p>
            <ol>
              <li><strong>Origin Registration</strong> - Each contribution is timestamped and cryptographically signed by the contributor</li>
              <li><strong>Validation Events</strong> - Every validation step is recorded with validator identifiers and results</li>
              <li><strong>Quality Certification</strong> - Final quality scores and certifications are permanently registered</li>
              <li><strong>Usage Tracking</strong> - Dataset utilization is tracked while maintaining privacy</li>
              <li><strong>Compensation Events</strong> - All payments to contributors are transparently recorded</li>
            </ol>
            
            <h3>Benefits of Blockchain Verification</h3>
            <p>
              This approach provides significant advantages over traditional data marketplaces:
            </p>
            <ul>
              <li><strong>Immutable Audit Trail</strong> - Complete history of each dataset is permanently recorded</li>
              <li><strong>Transparent Validation</strong> - Clear visibility into how data quality is assessed</li>
              <li><strong>Fair Attribution</strong> - Contributors are properly credited for their work</li>
              <li><strong>Automated Compensation</strong> - Smart contracts ensure timely, accurate payments</li>
              <li><strong>Dispute Resolution</strong> - Objective evidence for resolving quality disagreements</li>
            </ul>
            
            <p>
              By combining cutting-edge blockchain technology with our expertise in data validation, siftd.xyz creates a new standard for data marketplaces - one built on transparency, quality, and trust.
            </p>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
