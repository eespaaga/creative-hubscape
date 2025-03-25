
import { ArrowUpIcon } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-1/3 top-0 w-72 h-72 bg-indigo-100/30 dark:bg-indigo-950/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-bold">
              <span className="text-primary">Portfolio</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating beautiful, functional digital experiences is my passion. Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="p-3 mb-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Back to top"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </button>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
