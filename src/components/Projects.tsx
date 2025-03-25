
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "A modern portfolio website with animated sections and responsive design for a professional photographer.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "A productivity application with drag-and-drop interfaces, user collaboration, and real-time updates.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1626289856558-9432b027c2df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "A cross-platform mobile application for tracking fitness goals, nutrition intake, and workout routines.",
    technologies: ["React Native", "Redux", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#"
  },
];

// Filter categories
const allCategories = ["All", ...new Set(projects.map(project => project.category))];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-1/3 top-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute right-1/3 bottom-0 w-72 h-72 bg-purple-100 dark:bg-purple-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-6">My Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Work</h2>
          <p className="text-muted-foreground">
            Here are some of my latest projects that showcase my skills and experience. Each project represents a unique challenge and solution.
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3 mb-3">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLinkIcon className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <GithubIcon className="w-5 h-5 text-white" />
                      </a>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="text-white font-medium text-sm py-2 px-4 bg-white/20 backdrop-blur-sm rounded-md hover:bg-white/30 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium py-1 px-2 rounded bg-secondary text-secondary-foreground">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium py-1 px-2 rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find(p => p.id === selectedProject) && (
                  <div>
                    <div className="relative">
                      <img 
                        src={projects.find(p => p.id === selectedProject)?.image} 
                        alt={projects.find(p => p.id === selectedProject)?.title} 
                        className="w-full aspect-video object-cover object-center"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs font-medium py-1 px-2 rounded bg-secondary text-secondary-foreground">
                          {projects.find(p => p.id === selectedProject)?.category}
                        </span>
                        {projects.find(p => p.id === selectedProject)?.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="text-xs font-medium py-1 px-2 rounded-md bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {projects.find(p => p.id === selectedProject)?.description}
                      </p>
                      <div className="flex gap-4">
                        <a 
                          href={projects.find(p => p.id === selectedProject)?.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-transform hover:-translate-y-1"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a 
                          href={projects.find(p => p.id === selectedProject)?.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md font-medium transition-transform hover:-translate-y-1"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
