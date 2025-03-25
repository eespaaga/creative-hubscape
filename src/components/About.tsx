
import { motion } from "framer-motion";
import { LaptopIcon, BrainCircuitIcon, PencilRulerIcon, GlobeIcon } from "lucide-react";

const serviceItems = [
  {
    icon: <LaptopIcon className="w-6 h-6" />,
    title: "Web Development",
    description: "Building responsive websites with clean code and modern technologies."
  },
  {
    icon: <BrainCircuitIcon className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex technical challenges."
  },
  {
    icon: <PencilRulerIcon className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces for great user experiences."
  },
  {
    icon: <GlobeIcon className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Improving site visibility and performance for search engines."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-purple-100 dark:bg-purple-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 blur-2xl opacity-20 dark:opacity-30 rounded-full transform -translate-x-10" />
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="John Doe at work" 
                className="w-full aspect-[4/3] object-cover object-center"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-6">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate Developer & Designer</h2>
            <p className="text-muted-foreground mb-6">
              I'm a detail-oriented web developer with over 5 years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in front-end development, responsive design, and creating seamless user interfaces.
            </p>
            <p className="text-muted-foreground mb-8">
              My journey in development began with a fascination for how design and technology intersect. Today, I combine technical expertise with an eye for design to build websites that not only work flawlessly but also look amazing. I believe great websites should work for everyone, everywhere.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                <span>Front-end Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                <span>UI/UX Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                <span>Performance Optimization</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-32"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-6">My Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Can Help You With</h2>
            <p className="text-muted-foreground">
              I offer a wide range of services to help bring your ideas to life, from concept to completion. Here are some of the ways I can assist your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 transition-all hover:transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
