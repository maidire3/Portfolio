import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Progetti"
          title="Applicazioni e sperimentazioni"
          description="Una selezione di progetti che mostrano competenze frontend, backend e integrazione API."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.16, ease: "easeOut" } }}
              className="card flex h-full flex-col p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
                <Github className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn-secondary px-4 py-2.5" href={project.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                {project.demo && (
                  <a className="btn-primary px-4 py-2.5" href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
