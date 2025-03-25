
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/4 -top-10 w-72 h-72 bg-purple-100 dark:bg-purple-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-float-slow"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute right-1/4 -bottom-10 w-72 h-72 bg-blue-100 dark:bg-blue-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-float"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.165, 0.84, 0.44, 1]
            }}
            className="order-2 lg:order-1"
          >
            <div className="stagger-animate space-y-6">
              <h1 className="font-display font-extrabold tracking-tight text-balance">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">John Doe</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
                I'm a <span className="font-medium">Web Developer</span> with a passion for creating beautiful, functional, and user-centered digital experiences. I combine design and code to bring ideas to life.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.button
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Work
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.165, 0.84, 0.44, 1],
              delay: 0.2
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-800 absolute inset-0 filter blur-2xl opacity-20 dark:opacity-30 animate-float" />
              <div className="glass-card w-64 h-64 md:w-80 md:h-80 relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Portrait of John Doe" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDownIcon className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
