
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell, BellOff } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const NewsletterForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showOptOut, setShowOptOut] = useState(false);
  const [optOutEmail, setOptOutEmail] = useState("");
  const [optOutReason, setOptOutReason] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thanks for subscribing!",
        description: "Please check your email to confirm your subscription.",
      });
      setEmail("");
    }, 1000);
  };

  const handleOptOut = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!optOutEmail.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter the email you wish to unsubscribe.",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(optOutEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate opt-out API call
    setTimeout(() => {
      setShowOptOut(false);
      toast({
        title: "Successfully Unsubscribed",
        description: "You've been removed from our newsletter list.",
      });
      setOptOutEmail("");
      setOptOutReason("");
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-2 relative">
        <div className="space-y-2">
          <div className="relative">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="your@email.com"
              className={error ? "border-destructive pr-10" : "pr-10"}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              <Bell className="h-4 w-4" />
            </div>
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox 
              id="marketing" 
              checked={marketingConsent}
              onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
            />
            <label
              htmlFor="marketing"
              className="text-xs text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to receive marketing communications from siftd.xyz
            </label>
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        <button 
          type="button"
          onClick={() => setShowOptOut(true)}
          className="text-xs text-muted-foreground hover:text-foreground mt-2 flex items-center gap-1"
        >
          <BellOff className="h-3 w-3" />
          Unsubscribe from newsletter
        </button>
      </form>

      <AlertDialog open={showOptOut} onOpenChange={setShowOptOut}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unsubscribe from Newsletter</AlertDialogTitle>
            <AlertDialogDescription>
              We're sorry to see you go. Please enter your email address to unsubscribe from our newsletter.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form onSubmit={handleOptOut} className="space-y-4 py-2">
            <Input
              type="email"
              value={optOutEmail}
              onChange={(e) => setOptOutEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
            <Input
              type="text"
              value={optOutReason}
              onChange={(e) => setOptOutReason(e.target.value)}
              placeholder="Reason for unsubscribing (optional)"
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit">Unsubscribe</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default NewsletterForm;
