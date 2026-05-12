import { Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = {
  github: "https://github.com/maidire3",
  linkedin: "https://www.linkedin.com/in/davide-cavallaro-89aa811a1/",
};

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-16 lg:grid-cols-[1fr_0.82fr] lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Portfolio personale
          </p>
          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Davide Cavallaro
          </h1>
          <p className="mt-4 text-xl font-semibold text-brand-600 dark:text-brand-100">Junior Full Stack Developer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            Junior Full Stack Developer con formazione specialistica in sviluppo web e solide basi di programmazione.
            Competenze in HTML, CSS, JavaScript, React, Node.js e Express. Orientato al problem solving e
            all&apos;apprendimento continuo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="/cv.pdf" download>
              <Download className="h-5 w-5" aria-hidden="true" />
              Download CV
            </a>
            <a className="btn-secondary" href={socialLinks.github} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub
            </a>
            <a className="btn-secondary" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
            Giussano (MB), Italy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-slate-100 p-3 shadow-soft dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-brand-950">
            <img
              src="/FotoProfilo.png"
              alt="Davide Cavallaro"
              loading="lazy"
              width="420"
              height="420"
              className="h-full w-full rounded-full object-cover object-center shadow-inner"
            />
            <div className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
