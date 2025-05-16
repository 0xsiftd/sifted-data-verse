
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

const Cookies = () => {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: May 16, 2025
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="text-lg">
              This Cookie Policy explains how siftd.xyz uses cookies and similar technologies to recognize you when 
              you visit our website and platform. It explains what these technologies are and why we use them, as well 
              as your rights to control our use of them.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well 
              as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, siftd.xyz) are called "first-party cookies". Cookies set by 
              parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party 
              features or functionality to be provided on or through the website (e.g., advertising, interactive content, 
              and analytics).
            </p>

            <h2>2. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually 
              only set in response to actions made by you which amount to a request for services, such as setting your privacy 
              preferences, logging in, or filling in forms.
            </p>

            <h3>Performance and Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
              They help us to know which pages are the most and least popular and see how visitors move around the site. All information 
              these cookies collect is aggregated and therefore anonymous.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party 
              providers whose services we have added to our pages.
            </p>

            <h3>Marketing and Advertising Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile 
              of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are 
              based on uniquely identifying your browser and internet device.
            </p>

            <h2>3. Blockchain and Web3 Specific Technologies</h2>
            <p>
              In addition to traditional cookies, our platform may use certain blockchain and Web3-specific technologies to enhance your 
              experience with our decentralized features:
            </p>
            <ul>
              <li>
                <strong>Wallet Connection Data:</strong> Information stored locally to facilitate connections with blockchain wallets
              </li>
              <li>
                <strong>Transaction History Cache:</strong> Temporary storage of blockchain transaction data related to your account
              </li>
              <li>
                <strong>IPFS Gateway Caching:</strong> Data stored to optimize interactions with decentralized storage systems
              </li>
            </ul>

            <h2>4. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through our 
              cookie consent banner that appears when you first visit our site.
            </p>
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may 
              still use our website though your access to some functionality and areas of our website may be restricted. As the means by 
              which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's 
              help menu for more information.
            </p>

            <h2>5. How Often Will We Update This Cookie Policy?</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for 
              other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about 
              our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default Cookies;
