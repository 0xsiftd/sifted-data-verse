
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlockchainIcon, DataIcon } from "@/components/ui/icons";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sophia Chen",
      role: "Founder & CEO",
      bio: "Ph.D. in Distributed Systems with 15 years of experience in blockchain development and data science.",
      image: "",
      initials: "SC",
    },
    {
      name: "Marcus Reinhardt",
      role: "CTO",
      bio: "Former lead engineer at Ethereum Foundation with expertise in building secure blockchain applications.",
      image: "",
      initials: "MR",
    },
    {
      name: "Olivia Park",
      role: "Chief Data Officer",
      bio: "Data scientist with extensive experience in AI training datasets and data quality assurance.",
      image: "",
      initials: "OP",
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Product strategy expert who previously led data marketplace products at tech giants.",
      image: "",
      initials: "JW",
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
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">Our Mission</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">siftd.xyz</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're revolutionizing data collection and verification through blockchain technology, creating a trustworthy ecosystem for AI development.
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="lead">
              Founded in 2022, siftd.xyz emerged from a recognition that AI development is fundamentally constrained by data quality and access challenges.
            </p>
            
            <p>
              We're building the world's first blockchain-verified data marketplace that brings together contributors, validators, and enterprises in a trustworthy ecosystem. Our platform ensures data integrity through decentralized verification, fair compensation for contributors, and unparalleled data quality for AI developers.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              We envision a future where access to high-quality, ethically sourced data is democratized - where both individual contributors and enterprises benefit from a transparent, fair marketplace. By leveraging blockchain technology, we're creating trust and accountability in the data economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-tech-blue-500/10 mb-4">
                  <BlockchainIcon className="h-6 w-6 text-tech-blue-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Blockchain Security</h3>
                <p className="text-sm text-muted-foreground">
                  Our immutable ledger ensures that every dataset is traceable, verifiable, and tamper-proof. This creates unprecedented trust in data provenance.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-purple-500/10 mb-4">
                  <DataIcon className="h-6 w-6 text-accent-purple-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Data Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-layered validation ensures that all data on our platform meets the highest quality standards before reaching AI developers.
                </p>
              </div>
            </div>
            
            <h2>Our Technology Stack</h2>
            <p>
              Built on a hybrid blockchain architecture, siftd.xyz combines the security of public chains with the efficiency of private chains. Our platform features:
            </p>
            <ul>
              <li>Custom smart contracts for transparent contributor compensation</li>
              <li>Decentralized storage for efficient data handling</li>
              <li>Advanced cryptographic techniques for data privacy</li>
              <li>Comprehensive API suite for seamless integration</li>
              <li>AI-powered validation mechanisms</li>
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12">
              Meet Our Leadership Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : null}
                    <AvatarFallback className="text-lg bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-tech-blue-500 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h2>Our Journey</h2>
            <p>
              The journey of siftd.xyz began when our founder, Dr. Sophia Chen, encountered persistent data quality issues while developing machine learning models for healthcare applications. Recognizing that similar challenges were hampering AI advances across industries, she assembled a team of blockchain experts, data scientists, and product strategists to create a solution.
            </p>
            <p>
              After two years of development and testing, we launched our platform in 2023, quickly attracting both individual contributors and enterprise clients. Today, we're proud to be facilitating the creation of better AI through better data.
            </p>
            
            <h2 className="mt-12">Our Values</h2>
            <ol>
              <li><strong>Trust Through Technology</strong> - We believe blockchain creates unprecedented transparency in data transactions.</li>
              <li><strong>Fair Compensation</strong> - Data contributors deserve equitable rewards for their valuable contributions.</li>
              <li><strong>Quality Over Quantity</strong> - We prioritize dataset quality over size to enable more effective AI training.</li>
              <li><strong>Ethical AI Development</strong> - We support responsible AI through diverse, representative, and ethically collected data.</li>
              <li><strong>Innovation Through Collaboration</strong> - Our community of contributors, validators, and clients drives continuous improvement.</li>
            </ol>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default About;
