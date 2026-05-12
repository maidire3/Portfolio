import { Braces, Code2, Database, GitBranch, Server, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Programming Languages",
    icon: Braces,
    skills: ["C", "Java", "Python"],
  },
  {
    category: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Vite", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/45">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Competenze"
          title="Stack tecnico solido e moderno"
          description="Tecnologie e strumenti utilizzati per costruire interfacce reattive, API affidabili e applicazioni web complete."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.16, ease: "easeOut" } }}
                className="card p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {skill === "SQL" ? (
                        <Database className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                      ) : (
                        <TerminalSquare className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
