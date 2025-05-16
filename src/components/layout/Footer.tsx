
import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NewsletterForm from "@/components/sections/NewsletterForm";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 dark:bg-dark-surface mt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Logo className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Revolutionizing data collection and verification through blockchain-powered crowdsourcing.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Auf der Hardt 80<br />
                  Darmstadt, Hesse, 64291<br />
                  DE
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@siftd.xyz" className="hover:text-foreground transition-colors">
                  contact@siftd.xyz
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+4906151376420" className="hover:text-foreground transition-colors">
                  +49 06151376420
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-5">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/contributors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Become a Contributor
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-5">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with the latest in AI data and blockchain technology.
            </p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="mt-10 pt-10 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} siftd.xyz. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
