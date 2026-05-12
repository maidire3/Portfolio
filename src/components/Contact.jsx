import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

const contacts = [
  {
    label: "Email",
    value: "davide9092@gmail.com",
    href: "mailto:davide9092@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "davide-cavallaro",
    href: "https://www.linkedin.com/in/davide-cavallaro-89aa811a1/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "maidire3",
    href: "https://github.com/maidire3",
    icon: Github,
  },
  {
    label: "Location",
    value: "Giussano (MB), Italy",
    href: "https://www.google.com/maps/search/Giussano+MB+Italy",
    icon: MapPin,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/45">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contatti"
          title="Costruiamo qualcosa insieme"
          description="Sono disponibile per opportunità come Junior Frontend, Full Stack o React Developer."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <aside className="rounded-2xl bg-brand-500 p-8 text-white shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Send className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Disponibile per nuove opportunità</h3>
            <p className="mt-4 text-sm leading-7 text-blue-50">
              Mi interessa collaborare su prodotti web chiari, ben strutturati e orientati a una buona esperienza utente.
            </p>
            <a className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/40" href="mailto:davide9092@gmail.com">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Scrivimi
            </a>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="card group p-6 hover:-translate-y-1 hover:border-brand-200 dark:hover:border-brand-500/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-5 block text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {contact.label}
                  </span>
                  <span className="mt-2 block break-words font-bold text-slate-950 dark:text-white">{contact.value}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
