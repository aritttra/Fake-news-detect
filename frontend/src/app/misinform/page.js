'use client'


import { motion, useScroll } from 'framer-motion'
import CountUp from 'react-countup'
import Navbar from "@/components/Navbar";

export default function MisinformPage() {
  const { scrollYProgress } = useScroll()

  const stats = [
    {
      value: 6,
      suffix: '×',
      title: 'Faster Spread',
      desc: 'False information spreads significantly faster than factual reporting online.',
    },
    {
      value: 70,
      suffix: '%',
      title: 'Unchecked Sharing',
      desc: 'Many users share articles before fully reading or verifying them.',
    },
    {
      value: 100,
      suffix: 'M+',
      title: 'Daily Exposure',
      desc: 'Millions encounter misleading content across digital platforms every day.',
    },
  ]

  const techniques = [
    {
      title: 'Clickbait',
      desc: 'Emotion-driven headlines designed to force attention and reactions.',
      icon: '⚡',
    },
    {
      title: 'Deepfakes',
      desc: 'AI-generated visuals and media manipulated to appear authentic.',
      icon: '🎭',
    },
    {
      title: 'Edited Media',
      desc: 'Images or videos altered or shown out of context.',
      icon: '🖼️',
    },
    {
      title: 'Fake Sources',
      desc: 'Websites and pages built to imitate trusted publishers.',
      icon: '🌐',
    },
    {
      title: 'Emotional Triggers',
      desc: 'Content crafted to provoke anger, fear, or outrage.',
      icon: '🧠',
    },
    {
      title: 'Misleading Statistics',
      desc: 'Numbers selectively presented to distort reality.',
      icon: '📊',
    },
  ]

  return (
    <main className="min-h-screen bg-[#060816] text-white overflow-hidden relative font-[family-name:var(--font-geist-sans)]">

          {/* FIXED NAVBAR */}
    <motion.header

      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.8,
      }}

      className="
        fixed
        top-0
        left-0
        w-full
        z-[9999]
        isolate
      "
    >

      <div

        style={{
          background:
            "linear-gradient(to bottom, rgba(10,12,18,0.82), rgba(7,8,12,0.68))",

          backdropFilter:
            "blur(18px) saturate(160%)",

          WebkitBackdropFilter:
            "blur(18px) saturate(160%)",

          border:
            "1px solid rgba(255,255,255,0.06)",

          boxShadow:
            "0 6px 24px rgba(0,0,0,0.22)",
        }}

        className="
          relative

          mx-auto
          mt-2.5

          w-[97.8%]
          max-w-[1880px]

          rounded-[14px]
          overflow-hidden

          shadow-[0_0_40px_rgba(34,211,238,0.03)]
        "
      >

        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.025] via-transparent to-orange-300/[0.025] pointer-events-none" />

        {/* Reflection */}

        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.05]" />
        </div>
      <div>
        <Navbar />
      </div>

    </motion.header>
      {/* SCROLL PROGRESS */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-cyan-500/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-indigo-500/10 blur-3xl rounded-full"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs mb-5">
              Digital Awareness Experience
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95]">
              MISINFORM
            </h1>

            <p className="mt-8 text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed">
              Exploring how misinformation spreads through emotion, amplification,
              and digital manipulation across online platforms.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                Explore Data
              </button>

              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative h-[500px] w-[500px] flex items-center justify-center">
              {/* OUTER RINGS */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute h-full w-full rounded-full border border-cyan-400/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute h-[82%] w-[82%] rounded-full border border-indigo-400/10"
              />

              {/* CENTER CORE */}
              <div className="relative h-52 w-52 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 border border-white/10 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.15)]">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Information
                  </p>

                  <h3 className="text-3xl font-bold mt-3">
                    Distortion
                  </h3>
                </div>
              </div>

              {/* FLOATING INFO NODES */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 left-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4"
              >
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em]">
                  Amplified
                </p>
                <h4 className="mt-2 text-lg font-semibold">
                  Emotional Content
                </h4>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-12 right-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4"
              >
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em]">
                  Viral Reach
                </p>
                <h4 className="mt-2 text-lg font-semibold">
                  Algorithm Boost
                </h4>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -left-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4"
              >
                <p className="text-xs text-zinc-400 uppercase tracking-[0.2em]">
                  Manipulation
                </p>
                <h4 className="mt-2 text-lg font-semibold">
                  Public Influence
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs mb-4">
              Statistics
            </p>

            <h2 className="text-4xl md:text-6xl font-black max-w-3xl leading-tight">
              The Scale Of Modern Misinformation
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-indigo-500/5" />

                <div className="relative z-10">
                  <h3 className="text-7xl font-black text-cyan-300">
                    <CountUp
                      end={item.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {item.suffix}
                  </h3>

                  <p className="mt-6 text-2xl font-semibold">
                    {item.title}
                  </p>

                  <p className="mt-4 text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FLOW */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs mb-4">
              Spread Pattern
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              How Misinformation Travels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {[
              'Headline Created',
              'Emotional Reaction',
              'Rapid Sharing',
              'Algorithm Amplification',
              'Mass Exposure',
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="h-44 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center text-center p-6 hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-xl font-semibold leading-relaxed">
                    {step}
                  </h3>
                </div>

                {index !== 4 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-1/2 left-[100%] w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs mb-4">
              Manipulation
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Common Techniques
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techniques.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-8 min-h-[280px] hover:-translate-y-3 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/5 to-indigo-500/10 transition duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="h-16 w-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mt-8">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 mt-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL */}
      <section className="px-6 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 backdrop-blur-2xl p-16 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_60%)]"
          />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Think Before You Share
            </h2>

            <p className="mt-8 text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
              In a connected world, misinformation spreads instantly.
              Awareness and critical thinking remain the strongest defense.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}