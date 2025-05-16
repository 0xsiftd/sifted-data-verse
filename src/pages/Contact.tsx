
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import ContactForm from "@/components/sections/ContactForm";
import { 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

const Contact = () => {
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
            className="max-w-3xl mx-auto mb-10 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out using the form below or through our direct contact information.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Our Address</h3>
                <p className="text-muted-foreground">
                  Auf der Hardt 80<br />
                  Darmstadt, Hesse, 64291<br />
                  Germany
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@siftd.xyz" className="hover:underline">
                    contact@siftd.xyz
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We typically respond within 24 hours on business days.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+4906151376420" className="hover:underline">
                    +49 06151 376420
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Monday-Friday: 9:00 AM - 6:00 PM CET
                </p>
              </motion.div>
            </div>
          </div>

          <ContactForm />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-5xl mx-auto mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.664752534777!2d8.65292097687103!3d49.87568937147204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7092a5bd3b7d%3A0xf8d9cc64273e8738!2sAuf%20der%20Hardt%2080%2C%2064291%20Darmstadt%2C%20Germany!5e0!3m2!1sen!2sus!4v1716289812356!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="siftd.xyz office location"
              ></iframe>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
