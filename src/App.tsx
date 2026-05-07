/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { 
  MessageSquare, 
  Heart, 
  Search, 
  PenTool, 
  Linkedin, 
  Mail, 
  Twitter, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Monitor,
  Sparkles,
  MousePointer2,
  Image
} from "lucide-react";
import { DATA } from "./constants";

// Helper components
const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 border-l-4 border-brand-accent pl-8">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter text-brand-text mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl font-light italic font-serif text-brand-text/60 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Header = () => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Articles", id: "articles" },
    { name: "Experiences", id: "experiences" },
    { name: "Contact", id: "contact", primary: true },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 md:h-24 px-6 md:px-12 flex items-center justify-between z-[100] bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/10">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-brand-text rounded-full flex items-center justify-center text-white font-black text-xs">GS</div>
        <span className="font-serif font-black uppercase tracking-tight text-lg hidden sm:inline">Gita Subedi</span>
      </div>

      <nav className="flex items-center gap-2 md:gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`
              hidden md:flex px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
              ${item.primary 
                ? 'bg-brand-accent text-white shadow-[3px_3px_0px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none' 
                : 'bg-white border-2 border-brand-text text-brand-text shadow-[3px_3px_0px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none'}
            `}
          >
            {item.name}
          </button>
        ))}
        <button className="md:hidden w-10 h-10 bg-brand-text text-white rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#E63946]">
            <Sparkles size={18} />
        </button>
      </nav>
    </header>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white font-sans text-brand-text overflow-x-hidden">
      {/* Structural Decoration Grid Lines */}
      <div className="fixed inset-0 border-x border-brand-text/5 mx-6 md:mx-12 pointer-events-none z-0"></div>
      <div className="fixed inset-0 border-y border-brand-text/5 my-6 md:my-12 pointer-events-none z-0"></div>

      <Header />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden md:block">
        <CustomCursor />
      </div>

      <main className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-start pt-20 relative">

          <header className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-[15vw] lg:text-[180px] leading-[0.8] font-serif font-black uppercase tracking-tighter mb-8"
            >
              {DATA.name.split(' ')[0]} <br/>
              <span className="text-brand-accent">{DATA.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl max-w-3xl font-light leading-relaxed text-brand-text/80"
            >
              {DATA.bio}
            </motion.p>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-brand-text text-white rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent transition-all active:scale-95 text-xs uppercase tracking-widest"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 border-t border-brand-text/10">
          <SectionTitle title="The Profile" subtitle="A Decade of Dedication in Social Transformation." />
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-brand-text/5 group border-2 border-brand-text flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center gap-4 text-brand-text/35 transition-all duration-700 group-hover:scale-105">
                <Image className="w-16 h-16" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.35em]">Image Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <div className="space-y-12">
              <p className="text-3xl md:text-4xl font-serif italic font-light text-brand-text leading-tight">
                "Bridging human resilience with inclusive systems to drive meaningful change."
              </p>
              <p className="text-xl text-brand-text/70 leading-relaxed font-light">
                {DATA.about}
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-brand-text/10 pt-12">
                <div>
                  <h4 className="font-serif font-black text-5xl text-brand-accent">10+</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-50">Years Sector Experience</p>
                </div>
                <div>
                  <h4 className="font-serif font-black text-5xl text-brand-accent">50+</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-50">Research Initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-32 border-t border-brand-text/10">
          <SectionTitle 
            title="Strategic Services" 
            subtitle="Expertise in Humanitarian Operations and Research." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DATA.services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section id="articles" className="py-32 border-t border-brand-text/10">
          <SectionTitle 
            title="Reflections" 
            subtitle="Latest Insights into Social Dynamics and Psychosocial Health." 
          />
          <div className="space-y-6">
            {DATA.articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-white border-2 border-brand-text rounded-3xl hover:bg-brand-accent hover:text-white transition-all shadow-[8px_8px_0px_0px_#121212]"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-3 block group-hover:text-white/60">0{i+1} — {article.date}</span>
                  <h3 className="text-3xl font-serif font-black uppercase tracking-tight">{article.title}</h3>
                </div>
                <div className="mt-8 md:mt-0 flex items-center gap-4">
                   <span className="text-xs font-bold uppercase tracking-widest opacity-60">{article.readTime}</span>
                   <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-white group-hover:text-brand-accent transition-all">
                      <ArrowRight className="-rotate-45" />
                   </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section id="experiences" className="py-32 border-t border-brand-text/10">
          <SectionTitle 
            title="Milestones" 
            subtitle="A Proven Record of Excellence and Leadership." 
          />
          <div className="grid md:grid-cols-1 gap-12">
            {DATA.experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex gap-12 p-10 bg-white border-2 border-brand-text rounded-[40px] hover:shadow-[12px_12px_0px_0px_#E63946] transition-all"
              >
                <div className="flex-grow">
                  <h3 className="text-3xl font-serif font-black uppercase text-brand-text mb-2 tracking-tight">{exp.role}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-accent">{exp.company}</span>
                    <span className="h-[1px] w-8 bg-brand-text/20"></span>
                    <span className="text-xs font-bold text-brand-text/40">{exp.period}</span>
                  </div>
                  <p className="text-xl text-brand-text/60 font-light max-w-3xl border-l-2 border-brand-accent/30 pl-6">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 mb-40 border-t border-brand-text/10">
          <div className="text-center">
            <h2 className="text-[10vw] lg:text-[140px] font-serif font-black uppercase leading-[0.8] tracking-tighter mb-16">
              Let's Talk <br />
              <span className="italic font-normal">Impact.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href={`mailto:${DATA.contact.email}`}
                className="group relative inline-flex items-center gap-6 px-12 py-8 bg-brand-text text-white rounded-[32px] overflow-hidden transition-all shadow-[8px_8px_0px_0px_#E63946] active:shadow-none translate-y-0 active:translate-x-[4px] active:translate-y-[4px]"
              >
                <span className="text-2xl md:text-4xl font-serif font-black lowercase tracking-tight">{DATA.contact.email}</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-12">
               {['LinkedIn', 'Twitter', 'ResearchGate'].map((social) => (
                 <a key={social} href="#" className="font-bold text-xs uppercase tracking-[0.3em] hover:text-brand-accent transition-colors border-b border-brand-text/20 pb-1">
                   {social}
                 </a>
               ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-12 border-t border-brand-text/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/40">
        <p>© {new Date().getFullYear()} Gita Subedi Portfolio</p>
        <p>Advocate for Education Policy Reform | Educational Practitioner for GEDSI</p>
        <p>Curated by Antigravity</p>
      </footer>
    </div>
  );
}

const ServiceCard = ({ service, index }: any) => {

  const Icon = {
    MessageSquare,
    Heart,
    Search,
    PenTool
  }[service.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-white border-2 border-brand-text rounded-3xl shadow-[6px_6px_0px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-12 border-2 border-brand-text group-hover:bg-brand-accent group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-serif font-black uppercase tracking-tight text-brand-text mb-4 leading-none">{service.title}</h3>
      <p className="text-brand-text/60 text-sm leading-relaxed font-light">{service.description}</p>
    </motion.div>
  );
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500 backdrop-blur-sm fixed top-0 left-0 -ml-4 -mt-4 z-50 pointer-events-none"
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-orange-500 rounded-full" />
    </motion.div>
  );
};
