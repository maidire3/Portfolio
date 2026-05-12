import { motion } from "framer-motion";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-100">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
    </motion.div>
  );
}

export default SectionHeader;
