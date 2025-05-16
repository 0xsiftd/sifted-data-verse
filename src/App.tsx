
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Initialize QueryClient
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Future routes would go here */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/how-it-works" element={<HowItWorks />} /> */}
            {/* <Route path="/solutions" element={<Solutions />} /> */}
            {/* <Route path="/marketplace" element={<Marketplace />} /> */}
            {/* <Route path="/contributors" element={<Contributors />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/privacy" element={<Privacy />} /> */}
            {/* <Route path="/terms" element={<Terms />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
