
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: May 16, 2025
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="text-lg">
              Welcome to siftd.xyz. Please read these Terms of Service ("Terms") carefully before using 
              our platform. By accessing or using siftd.xyz, you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our platform, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our platform.
            </p>

            <h2>2. Platform Usage Rules</h2>
            <p>
              When using our platform, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account and password</li>
              <li>Not use the platform for any illegal or unauthorized purpose</li>
              <li>Not violate any laws in your jurisdiction</li>
              <li>Not interfere with the proper working of the platform</li>
              <li>Not attempt to bypass any security measures</li>
              <li>Not misrepresent your identity or affiliation</li>
              <li>Not manipulate dataset ratings or reviews</li>
            </ul>
            <p>
              We reserve the right to terminate or suspend access to our platform for any user who violates these rules.
            </p>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              All content on our platform, including but not limited to text, graphics, logos, icons, images, 
              audio clips, digital downloads, and software, is the property of siftd.xyz or its content suppliers and is protected 
              by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              The compilation of all content on this platform is the exclusive property of siftd.xyz and is protected 
              by international copyright laws. All software used on this platform is the property of siftd.xyz or its 
              software suppliers and is protected by international copyright laws.
            </p>

            <h2>4. Data Ownership and Licensing</h2>
            <p>
              <strong>For Data Contributors:</strong> When you contribute datasets to our platform, you retain 
              ownership of your underlying data. However, you grant siftd.xyz a worldwide, non-exclusive, 
              royalty-free license to use, reproduce, modify, adapt, publish, distribute, and display such content 
              for the purposes of operating and improving our platform.
            </p>
            <p>
              <strong>For Data Buyers:</strong> When purchasing datasets, you are acquiring a license to use the data 
              according to the specific license terms associated with that dataset. These terms may vary by dataset 
              and will be clearly displayed before purchase. Typically, licenses will permit:
            </p>
            <ul>
              <li>Use of the data for internal business purposes</li>
              <li>Incorporation of the data into machine learning models</li>
              <li>Analysis and derivative works based on the data</li>
            </ul>
            <p>
              Licenses typically do not permit:
            </p>
            <ul>
              <li>Reselling or redistributing the raw data</li>
              <li>Using the data to create competing data products</li>
              <li>Removing or altering attribution information</li>
            </ul>

            <h2>5. Dispute Resolution</h2>
            <p>
              If a dispute arises between you and siftd.xyz, we encourage you to first contact us directly to seek a resolution. 
              If the dispute cannot be resolved through direct communication, any controversy or claim arising out of or relating 
              to these Terms shall be settled by arbitration in accordance with the rules of the International Chamber of Commerce.
            </p>
            <p>
              The arbitration shall take place in Darmstadt, Germany, in the English language, and the arbitral decision may be 
              enforced in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration 
              shall be joined to any other proceeding, and there is no right or authority for any dispute to be arbitrated on a 
              class-action basis.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, siftd.xyz and its affiliates, officers, employees, agents, 
              partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ol type="a">
              <li>Your access to or use of or inability to access or use the platform;</li>
              <li>Any conduct or content of any third party on the platform;</li>
              <li>Any content obtained from the platform; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ol>
            <p>
              In no event shall our total liability to you for all claims exceed the amount paid by you to siftd.xyz in the 
              preceding twelve (12) months.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Germany, without regard to its 
              conflict of law provisions. The United Nations Convention on Contracts for the International Sale of Goods shall 
              not apply to these Terms.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting 
              the updated Terms on our platform and updating the "Last Updated" date. Your continued use of our platform following 
              the posting of changes constitutes your acceptance of such changes.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default Terms;
