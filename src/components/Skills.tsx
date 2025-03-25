
import { motion } from "framer-motion";

// Skills data
const skillsCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 75 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
      { name: "Firebase", level: 78 },
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
    ]
  }
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-secondary/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-indigo-100 dark:bg-indigo-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
        <div className="absolute right-1/4 top-1/4 w-72 h-72 bg-purple-100 dark:bg-purple-950/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary inline-block mb-6">My Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-muted-foreground">
            I've developed a diverse set of skills throughout my journey as a developer. Here's an overview of my technical proficiencies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b">{category.name}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional skills list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Tailwind CSS", "SASS", "Framer Motion", "Jest", "RESTful APIs", 
              "Responsive Design", "UI/UX", "WordPress", "Vercel", "Netlify", "GitHub Actions"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md text-sm font-medium shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
