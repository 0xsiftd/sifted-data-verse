
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-tech-blue-600 to-accent-purple-500 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
          <span className="text-white font-display text-lg">S</span>
        </div>
      </div>
      <span className="ml-2 font-display text-xl tracking-tight">siftd.xyz</span>
    </div>
  );
};

export default Logo;
