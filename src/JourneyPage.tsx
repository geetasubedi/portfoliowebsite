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

const CARD_TONES = [
  "from-[#F9F8F6] via-[#F3E6D0] to-[#E63946]/15",
  "from-[#121212]/10 via-[#F9F8F6] to-[#C39A5B]/30",
  "from-[#F9F8F6] via-[#E63946]/10 to-[#121212]/10",
  "from-[#C39A5B]/25 via-[#F9F8F6] to-[#E63946]/10",
  "from-[#F9F8F6] via-[#121212]/10 to-[#C39A5B]/25",
  "from-[#E63946]/15 via-[#F9F8F6] to-[#121212]/10",
];

const cardVariants = {
  hidden: { opacity: 0, y: 38, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
} as const;

export default function JourneyPage() {
  return (
    <main id="main-content" className="journey-surface relative z-10 overflow-hidden px-6 pt-28 md:pt-32">
      <section aria-label="Journey walkthrough" className="relative mx-auto max-w-7xl pb-24 md:pb-32">
        <JourneyBackground />

        <div className="relative z-10 flex flex-col gap-14 md:gap-4">
          {JOURNEY_CARDS.map((title, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={title}
                className={`relative flex min-h-[520px] items-start md:min-h-[580px] ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                <motion.article
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.56, ease: "easeOut" }}
                  whileHover={{ y: -10, rotate: 0 }}
                  className={`
                    group relative w-full overflow-hidden rounded-[34px] border-2 border-brand-text bg-white p-4 shadow-[12px_12px_0px_0px_#121212] transition-all md:w-[46vw] md:max-w-[590px]
                    ${isRight ? "md:rotate-[1deg]" : "md:-rotate-[1deg]"}
                  `}
                >
                  <div className={`journey-picture relative flex aspect-[1.25/1] items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br ${CARD_TONES[index]}`}>
                    <span className="absolute left-6 top-5 z-10 rounded-full bg-white/70 px-5 py-2 text-lg uppercase tracking-wider text-brand-text/60 backdrop-blur-sm">
                      Placeholder
                    </span>
                    <span className="relative z-10 font-serif text-[26vw] font-bold uppercase leading-none tracking-tight text-brand-text/10 md:text-[145px]">
                      GS
                    </span>
                    <div className="absolute inset-x-6 bottom-6 z-10 flex items-center justify-between border-t border-brand-text/10 pt-5 text-brand-text/55">
                      <span className="text-xl uppercase tracking-wider">Image Area</span>
                      <span className="text-xl">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className="px-2 pb-3 pt-7 md:px-4">
                    <div className="flex items-center justify-between gap-6">
                      <h2 className="font-serif text-4xl uppercase leading-none tracking-tight text-brand-text md:text-5xl">
                        {title}
                      </h2>
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-bg text-2xl text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-4 border-t border-brand-text/10 pt-6 text-xl leading-relaxed text-brand-text/65">
                      <span>Reserved for year, role, story, and impact.</span>
                      <ArrowRight className="h-6 w-6 shrink-0 text-brand-accent" aria-hidden="true" />
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

const JourneyBackground = () => (
  <>
    <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-px -translate-x-1/2 bg-brand-text/10 md:block" />
    <svg
      className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-full w-[1240px] -translate-x-1/2 md:block"
      viewBox="0 0 1240 3560"
      preserveAspectRatio="xMidYMin meet"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M870 90 C1070 250 1060 450 870 585 C650 740 500 650 340 805 C130 1010 150 1220 360 1350 C580 1485 730 1390 890 1570 C1080 1785 1055 1995 850 2135 C650 2272 500 2195 345 2360 C135 2585 160 2810 375 2940 C590 3070 740 2975 885 3170 C980 3300 980 3430 895 3530"
        stroke="#C39A5B"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M870 90 C1070 250 1060 450 870 585 C650 740 500 650 340 805 C130 1010 150 1220 360 1350 C580 1485 730 1390 890 1570 C1080 1785 1055 1995 850 2135 C650 2272 500 2195 345 2360 C135 2585 160 2810 375 2940 C590 3070 740 2975 885 3170 C980 3300 980 3430 895 3530"
        stroke="#121212"
        strokeWidth="4"
        strokeDasharray="2 28"
        strokeLinecap="round"
        opacity="0.42"
      />
    </svg>
    <svg
      className="pointer-events-none absolute bottom-10 left-5 top-4 z-0 w-12 md:hidden"
      viewBox="0 0 48 2800"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 0 C42 220 6 420 24 640 C42 860 6 1060 24 1280 C42 1500 6 1700 24 1920 C42 2140 6 2340 24 2560 C32 2660 18 2740 24 2800"
        stroke="#C39A5B"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M24 0 C42 220 6 420 24 640 C42 860 6 1060 24 1280 C42 1500 6 1700 24 1920 C42 2140 6 2340 24 2560 C32 2660 18 2740 24 2800"
        stroke="#121212"
        strokeWidth="3"
        strokeDasharray="2 24"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
    <div className="pointer-events-none absolute inset-0 z-0 opacity-70 [background-image:linear-gradient(90deg,rgba(18,18,18,0.055)_1px,transparent_1px),linear-gradient(0deg,rgba(230,57,70,0.045)_1px,transparent_1px)] [background-size:220px_100%,100%_150px]" />
  </>
);
