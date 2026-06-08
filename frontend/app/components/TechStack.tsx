import { Globe, Terminal, Database, Palette, GitBranch, Container } from "lucide-react";
import { motion } from "framer-motion";

const techItems = [
  { icon: Globe, name: "Next.js" },
  { icon: Terminal, name: "Go" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Palette, name: "Tailwind CSS" },
  { icon: GitBranch, name: "GitHub Actions" },
  { icon: Container, name: "Docker" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Stack hiện đại, sẵn sàng production
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {techItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface border border-gray-700/50 transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-lg font-semibold text-white">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
