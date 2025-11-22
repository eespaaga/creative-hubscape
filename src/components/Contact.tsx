import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/websterghoul", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/webster", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/webster", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Mail me GG - Let's connect and discuss how we can work together!
          </p>
          
          <Button size="lg" asChild className="mb-8">
            <a href="mailto:websterghoul22@proton.me">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </Button>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
