
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  BarChart,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Dataset = {
  id: number;
  name: string;
  description: string;
  category: string;
  size: string;
  records: string;
  verified: boolean;
  price: string;
  rating: number;
  popularity: number;
};

const Marketplace = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Sample dataset data
  const datasets: Dataset[] = [
    {
      id: 1,
      name: "Global Customer Sentiment",
      description: "Multilingual customer reviews with sentiment analysis across 25 languages and 12 industries.",
      category: "Text",
      size: "4.2 GB",
      records: "2.3M",
      verified: true,
      price: "$1,299",
      rating: 4.8,
      popularity: 95,
    },
    {
      id: 2,
      name: "Medical Imaging Collection",
      description: "Anonymized and labeled medical images for diagnostic AI model training with expert annotations.",
      category: "Images",
      size: "18.7 GB",
      records: "145K",
      verified: true,
      price: "$3,499",
      rating: 4.9,
      popularity: 97,
    },
    {
      id: 3,
      name: "Financial Transactions",
      description: "Synthetic transaction data modeled after real-world banking patterns for fraud detection systems.",
      category: "Structured",
      size: "7.6 GB",
      records: "4.8M",
      verified: true,
      price: "$2,199",
      rating: 4.7,
      popularity: 92,
    },
    {
      id: 4,
      name: "Conversational Voice Dataset",
      description: "Multi-accent speech samples with transcriptions for voice recognition system training.",
      category: "Audio",
      size: "12.3 GB",
      records: "386K",
      verified: true,
      price: "$1,899",
      rating: 4.6,
      popularity: 88,
    },
    {
      id: 5,
      name: "Urban Traffic Patterns",
      description: "Vehicle movement data from 50 major cities with time-of-day and weather correlations.",
      category: "Structured",
      size: "5.8 GB",
      records: "1.7M",
      verified: true,
      price: "$1,599",
      rating: 4.5,
      popularity: 87,
    },
    {
      id: 6,
      name: "E-commerce Product Catalog",
      description: "Comprehensive product data with attributes, descriptions, and categorizations across retail segments.",
      category: "Structured",
      size: "3.4 GB",
      records: "1.2M",
      verified: true,
      price: "$999",
      rating: 4.4,
      popularity: 85,
    },
  ];

  // Filter datasets based on search and category
  const filteredDatasets = datasets.filter(dataset => {
    return (
      (searchQuery === "" || 
        dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dataset.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (categoryFilter === "" || dataset.category === categoryFilter)
    );
  });

  const categories = ["Text", "Images", "Structured", "Audio"];

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
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">Data Marketplace</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">siftd.xyz</span> Marketplace
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore and purchase verified, high-quality datasets for your AI and machine learning models.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-10"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search datasets..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-60">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="All Categories" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {filteredDatasets.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10"
            >
              <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No datasets found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredDatasets.map((dataset, index) => (
                  <motion.div
                    key={dataset.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-secondary/50">
                            {dataset.category}
                          </Badge>
                          {dataset.verified && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    <span className="text-xs font-medium ml-1">Verified</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs">
                                    This dataset has been verified with our blockchain protocol
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                        <CardTitle className="mt-2">{dataset.name}</CardTitle>
                        <CardDescription>{dataset.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Size</p>
                            <p className="font-medium">{dataset.size}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Records</p>
                            <p className="font-medium">{dataset.records}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Rating</p>
                            <div className="flex items-center">
                              <span className="font-medium mr-1">{dataset.rating}</span>
                              <div className="flex space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-2 w-2 rounded-full ${
                                      i < Math.floor(dataset.rating)
                                        ? "bg-primary"
                                        : "bg-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Popularity</p>
                            <div className="flex items-center">
                              <BarChart className="h-3.5 w-3.5 text-primary mr-1" />
                              <span className="font-medium">{dataset.popularity}%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="text-lg font-bold">{dataset.price}</div>
                        <Button size="sm">
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h2>How Our Marketplace Works</h2>
            <p>
              The siftd.xyz marketplace provides access to high-quality, blockchain-verified datasets for AI and machine learning development. Each dataset in our marketplace undergoes rigorous verification to ensure its authenticity, accuracy, and ethical collection.
            </p>
            
            <h3>Dataset Verification Process</h3>
            <p>
              Our proprietary blockchain verification process ensures that all datasets meet our strict quality standards:
            </p>
            <ol>
              <li><strong>Source Verification</strong> - We confirm the origin of each dataset</li>
              <li><strong>Quality Assurance</strong> - Data undergoes thorough cleaning and validation</li>
              <li><strong>Ethical Review</strong> - We ensure data was collected ethically and with proper consent</li>
              <li><strong>Blockchain Certification</strong> - The verification process is recorded on our blockchain</li>
              <li><strong>Ongoing Monitoring</strong> - Continuous quality checks maintain dataset integrity</li>
            </ol>
            
            <h3>Purchasing and Licensing</h3>
            <p>
              When you purchase a dataset, you receive:
            </p>
            <ul>
              <li>Secure access to download the complete dataset</li>
              <li>Detailed documentation on data structure and content</li>
              <li>Blockchain certificate of verification</li>
              <li>Usage rights according to the selected license</li>
              <li>Technical support for integration questions</li>
            </ul>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
