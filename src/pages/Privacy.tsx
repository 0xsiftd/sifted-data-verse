
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

const Privacy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: May 16, 2025
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="text-lg">
              At siftd.xyz, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our platform.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our platform, 
              including but not limited to:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other 
                contact or identification information.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and profile information.
              </li>
              <li>
                <strong>Transaction Information:</strong> Data related to purchases, sales, and other 
                financial transactions conducted through our platform.
              </li>
              <li>
                <strong>Blockchain Data:</strong> Public wallet addresses and transaction identifiers 
                necessary for blockchain verification processes.
              </li>
              <li>
                <strong>Dataset Metadata:</strong> Information about datasets you contribute or purchase.
              </li>
            </ul>

            <h2>2. Blockchain Data Handling</h2>
            <p>
              As a blockchain-based platform, certain data will be immutably recorded on public blockchains. 
              This includes:
            </p>
            <ul>
              <li>Transaction hashes and wallet addresses (not directly linked to personal identity)</li>
              <li>Dataset verification timestamps and signatures</li>
              <li>Smart contract interactions related to data purchases and contributor rewards</li>
            </ul>
            <p>
              We implement specialized techniques to ensure that sensitive personal information is not 
              directly stored on the blockchain. Instead, we use secure off-chain storage with blockchain 
              verification mechanisms.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our platform</li>
              <li>Processing transactions and payments</li>
              <li>Verifying dataset authenticity and quality</li>
              <li>Communicating with you about updates, support, and promotional offers</li>
              <li>Ensuring compliance with legal obligations</li>
              <li>Detecting and preventing fraudulent activities</li>
              <li>Analyzing usage patterns to enhance platform features</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required by law. Due to the nature of blockchain 
              technology, certain transaction data may remain permanently on the blockchain network; however, we 
              implement data minimization principles to ensure only necessary information is recorded on-chain.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your data (subject to certain exceptions, particularly for blockchain data)</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@siftd.xyz. Note that blockchain-recorded data may 
              have limitations regarding modification or deletion due to the immutable nature of blockchain technology.
            </p>

            <h2>6. Cross-Border Data Transfers</h2>
            <p>
              Your information may be transferred to, stored, and processed in countries other than the one in which you reside. 
              By using our platform, you consent to the transfer of information to countries that may have different data protection 
              rules than your country. We ensure that such transfers comply with applicable laws and implement appropriate safeguards.
            </p>

            <h2>7. Security</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, 
              or destruction. These include encryption, access controls, and regular security assessments. However, no method of 
              transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy 
              periodically.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <address>
              <strong>siftd.xyz</strong><br />
              Auf der Hardt 80<br />
              Darmstadt, Hesse, 64291<br />
              DE<br />
              Email: contact@siftd.xyz<br />
              Phone: +49 06151376420
            </address>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
