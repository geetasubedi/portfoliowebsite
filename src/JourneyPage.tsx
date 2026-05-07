import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const JOURNEY_CARDS = [
  "Foundation",
  "Field Practice",
  "Research Lens",
  "Community Work",
  "Policy Voice",
  "Impact Chapter",
];

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
} as const;

export default function JourneyPage() {
  return (
    <main id="main-content" className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:pt-40">
      <section className="min-h-[58vh] border-b border-brand-text/10 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 text-xl uppercase tracking-wider text-brand-accent"
        >
          Gita Subedi
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="font-serif text-[18vw] font-bold uppercase leading-[0.82] tracking-tight text-brand-text md:text-[120px] lg:text-[170px]"
        >
          Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.5 }}
          className="mt-10 max-w-3xl text-2xl leading-relaxed text-brand-text/70 md:text-3xl"
        >
          A visual walkthrough for the milestones, roles, and moments that shaped the work. Years and detailed stories can drop into this path cleanly later.
        </motion.p>
      </section>

      <section aria-label="Journey walkthrough" className="relative py-24 md:py-32">
        <div className="absolute bottom-20 left-5 top-28 w-1 rounded-full bg-brand-accent/40 md:hidden" />
        <div className="absolute bottom-32 left-1/2 top-36 hidden w-px -translate-x-1/2 bg-brand-text/10 md:block" />

        {JOURNEY_CARDS.map((title, index) => {
          const isRight = index % 2 === 0;
          const isLast = index === JOURNEY_CARDS.length - 1;

          return (
            <div key={title} className="relative min-h-[430px] md:min-h-[520px]">
              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                whileHover={{ y: -8, rotate: 0 }}
                className={`
                  relative ml-10 w-[calc(100%-2.5rem)] rounded-[32px] border-2 border-brand-text bg-white p-6 shadow-[10px_10px_0px_0px_#121212] transition-all md:w-[44vw] md:max-w-[520px] md:p-9
                  ${isRight ? "md:ml-auto md:rotate-[1deg]" : "md:mr-auto md:-rotate-[1deg]"}
                `}
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] border-2 border-dashed border-brand-text/40 bg-brand-bg">
                  <div className="absolute inset-4 rounded-[18px] border border-brand-accent/25" />
                  <span className="font-serif text-4xl font-bold uppercase tracking-tight text-brand-text/20 md:text-6xl">
                    GS
                  </span>
                  <span className="absolute bottom-6 left-6 right-6 text-center text-xl uppercase tracking-wider text-brand-text/55">
                    Placeholder
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between gap-6">
                  <h2 className="font-serif text-3xl uppercase leading-none tracking-tight text-brand-text md:text-4xl">
                    {title}
                  </h2>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-bg text-xl text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-brand-text/10 pt-6 text-lg text-brand-text/65">
                  <span>Reserved for year, role, story, and impact.</span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                </div>
              </motion.article>

              {!isLast && <JourneyRope direction={isRight ? "right-to-left" : "left-to-right"} />}
            </div>
          );
        })}
      </section>
    </main>
  );
}

const JourneyRope = ({ direction }: { direction: "right-to-left" | "left-to-right" }) => {
  const path =
    direction === "right-to-left"
      ? "M 840 12 C 835 120 370 118 360 250"
      : "M 360 12 C 365 120 830 118 840 250";

  const startX = direction === "right-to-left" ? 840 : 360;
  const endX = direction === "right-to-left" ? 360 : 840;

  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-[310px] hidden h-[270px] w-[1200px] -translate-x-1/2 md:block"
      viewBox="0 0 1200 270"
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="#C39A5B" strokeWidth="14" strokeLinecap="round" />
      <path d={path} stroke="#121212" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 24" opacity="0.55" />
      <circle cx={startX} cy="12" r="17" fill="#F9F8F6" stroke="#121212" strokeWidth="4" />
      <circle cx={endX} cy="250" r="17" fill="#F9F8F6" stroke="#E63946" strokeWidth="4" />
    </svg>
  );
};
