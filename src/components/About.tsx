import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              It's always more than ever... I'm a passionate cyber security professional dedicated to
              protecting digital assets and staying ahead of evolving threats. With expertise in
              penetration testing, security analysis, and threat mitigation, I help organizations
              strengthen their security posture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
