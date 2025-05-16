
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      name: "General",
      faqs: [
        {
          question: "What is siftd.xyz?",
          answer: "siftd.xyz is a blockchain-powered data marketplace that connects data contributors with enterprises and AI developers needing high-quality, verified datasets. Our platform uses blockchain technology to ensure data integrity, fair compensation for contributors, and transparent verification processes."
        },
        {
          question: "How is siftd.xyz different from other data marketplaces?",
          answer: "siftd.xyz stands apart with our proprietary blockchain verification system that creates an immutable record of dataset provenance and quality. Unlike traditional marketplaces, we provide cryptographic proof of data integrity, ethical collection practices, and compensation transparency."
        },
        {
          question: "Who can use siftd.xyz?",
          answer: "Our platform serves two main user groups: data consumers (AI developers, researchers, enterprises) who need high-quality datasets, and data contributors who provide valuable data and receive fair compensation. Anyone can create an account, though verification steps differ based on your user type."
        },
        {
          question: "Is blockchain knowledge required to use the platform?",
          answer: "No, we've designed siftd.xyz to be accessible regardless of your blockchain expertise. While we leverage blockchain technology behind the scenes, the user experience is intuitive and similar to traditional web applications, with added benefits of blockchain verification."
        }
      ]
    },
    {
      name: "Data Purchases",
      faqs: [
        {
          question: "How do I purchase a dataset?",
          answer: "Browse our marketplace, filter by category or search for specific datasets, then select a dataset to view detailed information. Click 'Purchase' to begin the checkout process. You can pay using traditional payment methods or cryptocurrency. Once payment is complete, you'll receive immediate download access."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, bank transfers, and major cryptocurrencies (BTC, ETH, USDC, and others). Enterprise clients can arrange custom invoicing and payment terms. All transactions are secured with industry-standard encryption and security protocols."
        },
        {
          question: "What happens after I purchase a dataset?",
          answer: "You'll receive immediate access to download the dataset in your preferred format. Along with the data, you'll get a blockchain certificate of verification, detailed documentation on the dataset structure, and basic usage examples. The dataset will appear in your account dashboard for future access."
        },
        {
          question: "Can I get a refund if the dataset doesn't meet my needs?",
          answer: "We provide comprehensive dataset previews and documentation before purchase to ensure suitability. Due to the digital nature of our products, refunds are generally not available after download. Enterprise clients with custom requirements may have different terms specified in their agreements."
        },
        {
          question: "How do dataset licenses work?",
          answer: "Each dataset has specific license terms clearly displayed before purchase. Most licenses permit use for model training, research, and internal business purposes, but restrict redistribution of raw data. Enterprise licenses with broader usage rights are available for select datasets."
        }
      ]
    },
    {
      name: "Data Contribution",
      faqs: [
        {
          question: "How can I become a data contributor?",
          answer: "Register for a contributor account and complete our verification process. Once approved, you can submit datasets through our contributor portal. Our team will review submissions for quality and compliance with our standards before listing them on the marketplace."
        },
        {
          question: "How am I compensated as a contributor?",
          answer: "Contributors receive a percentage of each dataset sale, with rates varying based on data quality, uniqueness, and marketplace demand. Compensation is automatically distributed through our smart contract system when purchases occur. You can choose to receive payment in cryptocurrency or fiat currency."
        },
        {
          question: "What types of data can I contribute?",
          answer: "We accept a wide range of data types including text, images, audio, video, structured records, time series, and specialized industry datasets. All contributions must comply with our ethical guidelines, privacy policies, and quality standards. We particularly value unique, diverse, and well-labeled datasets."
        },
        {
          question: "What are the dataset quality requirements?",
          answer: "Datasets must be well-structured, properly labeled, and adequately documented. Data should be accurate, comprehensive within its scope, and free from significant biases or quality issues. Our guidelines include standards for format consistency, metadata completeness, and ethical collection practices."
        }
      ]
    },
    {
      name: "Technical Questions",
      faqs: [
        {
          question: "How does your blockchain verification system work?",
          answer: "Our verification process creates cryptographic fingerprints (hashes) of datasets, which are recorded on a distributed ledger. This creates an immutable record of the dataset's characteristics, provenance, and quality assessment results. The blockchain record provides transparent proof of verification without exposing sensitive data."
        },
        {
          question: "What data formats do you support?",
          answer: "We support all common data formats including CSV, JSON, PARQUET, HDF5, and specialized formats for images (PNG, JPEG, TIFF), audio (WAV, MP3), text corpora, and more. Enterprise clients can request custom format conversions for their specific needs."
        },
        {
          question: "How secure is the platform?",
          answer: "We implement comprehensive security measures including end-to-end encryption, secure authentication, regular security audits, and data isolation. Our blockchain infrastructure adds an additional layer of security through cryptographic verification and decentralized storage options."
        },
        {
          question: "Do you offer API access?",
          answer: "Yes, we provide API access for enterprise customers and qualified developers. Our API allows programmatic access to dataset discovery, purchase, and integration with your existing workflows. Detailed API documentation is available after account approval."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery.trim() === "" 
    ? faqCategories 
    : faqCategories.map(category => ({
        name: category.name,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);

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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about siftd.xyz, our data marketplace, and blockchain verification technology.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8"
          >
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg font-medium mb-2">No results found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or browse through our categories below.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              filteredFAQs.map((category, categoryIndex) => (
                category.faqs.length > 0 && (
                  <div key={category.name} className="mb-8">
                    <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <motion.div
                          key={`${category.name}-${faqIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + ((categoryIndex * 0.1) + (faqIndex * 0.05)) }}
                        >
                          <AccordionItem value={`${category.name}-${faqIndex}`} className="border rounded-lg bg-card">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <span className="text-left font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </div>
                )
              ))
            )}
          </motion.div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto mt-16 text-center p-8 bg-card border border-border rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is ready to help you with any questions not covered in our FAQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="mailto:support@siftd.xyz">
                  Email Support
                </a>
              </Button>
              <Button asChild>
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
