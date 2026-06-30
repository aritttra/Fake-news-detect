

// "use client";

// import { useState } from "react";

// import Navbar from "@/components/Navbar";

// import { analyzeNews } from "@/lib/api";

// import {
//   Sparkles,
//   Activity,
//   PieChart,
//   BarChart3,
// } from "lucide-react";

// export default function AnalyzePage() {

//   const [text, setText] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [result, setResult] = useState(null);

//   async function handleAnalyze() {

//     if (!text.trim()) return;

//     try {

//       setLoading(true);

//       setResult(null);

//       const data = await analyzeNews(text);

//       setResult(data);

//     } catch (err) {

//       console.error(err);

//     } finally {

//       setLoading(false);

//     }
//   }

//   const confidence = result?.confidence || 0;

//   return (

//     <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

//       {/* Background */}

//       <div className="absolute inset-0 -z-10 overflow-hidden">

//         {/* Glow Orbs */}

//         <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

//         <div className="absolute right-[-100px] top-[20%] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-3xl animate-pulse" />

//         <div className="absolute bottom-[-120px] left-[35%] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

//         {/* Moving Glass Tiles */}

//         <div className="absolute inset-[-10%] opacity-[0.05]">

//           <div className="animate-[slide_20s_linear_infinite]">

//             <div className="grid grid-cols-6 gap-4 p-10">

//               {Array.from({ length: 48 }).map((_, i) => (

//                 <div
//                   key={i}
//                   className="h-28 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
//                 />

//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Navbar */}

//       <Navbar />

//       {/* Main Layout */}

//       <section className="mx-auto flex min-h-[calc(100vh-120px)] max-w-[1650px] items-center px-6 pb-10 pt-24">

//         <div className="grid h-full w-full grid-cols-12 gap-5">

//           {/* LEFT PANEL */}

//           <div className="lg:col-span-3 flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_60px_rgba(0,255,255,0.03)] backdrop-blur-3xl">

//             {/* Badge */}

//             <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">

//               <Sparkles className="h-3.5 w-3.5" />

//               AI-Powered Claim Validation

//             </div>

//             {/* Heading */}

//             <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight text-white">

//               Validate News
//               <br />

//               With Real Evidence

//             </h1>

//             {/* Description */}

//             <p className="mt-5 text-base leading-relaxed text-zinc-400">

//               Semantic reasoning, contradiction analysis and trusted evidence validation.

//             </p>

//             {/* Input */}

//             <div className="mt-7 flex-1 rounded-[24px] border border-white/10 bg-black/20 p-4">

//               <textarea
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Enter a claim to validate..."
//                 className="h-full min-h-[220px] w-full resize-none bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
//               />

//             </div>

//             {/* Button */}

//             <button
//               onClick={handleAnalyze}
//               disabled={loading}
//               className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-base font-medium transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98]"
//             >

//               {loading ? (

//                 <>
//                   <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
//                   Analyzing...
//                 </>

//               ) : (

//                 <>
//                   <Sparkles className="h-4 w-4" />
//                   Validate Claim
//                 </>

//               )}

//             </button>

//             {/* Loader */}

//             <div className="mt-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">

//               <div className="flex items-center gap-3">

//                 <div className="h-4 w-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />

//                 <div>

//                   <p className="text-sm font-medium text-cyan-300">

//                     Searching trusted sources

//                   </p>

//                   <p className="text-xs text-zinc-500">

//                     Semantic evidence ranking

//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* RIGHT PANEL */}

//           <div className="lg:col-span-9 flex flex-col gap-5">

//             {/* Verdict */}

//             <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-7 shadow-[0_0_80px_rgba(0,255,255,0.03)] backdrop-blur-3xl">

//               <div className="flex items-center justify-between">

//                 <div>

//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400">

//                     <Activity className="h-3.5 w-3.5" />

//                     Final Verdict

//                   </div>

//                   <h2 className="mt-5 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent">

//                     {result?.verdict || "Awaiting"}

//                   </h2>

//                   <p className="mt-3 text-sm text-zinc-400">

//                     AI semantic validation across trusted evidence.

//                   </p>

//                 </div>

//                 {/* Confidence Circle */}

//                 <div className="relative flex h-36 w-36 items-center justify-center">

//                   <svg className="absolute inset-0 h-full w-full -rotate-90">

//                     <circle
//                       cx="72"
//                       cy="72"
//                       r="58"
//                       stroke="rgba(255,255,255,0.08)"
//                       strokeWidth="8"
//                       fill="none"
//                     />

//                     <circle
//                       cx="72"
//                       cy="72"
//                       r="58"
//                       stroke="url(#grad)"
//                       strokeWidth="8"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeDasharray={365}
//                       strokeDashoffset={
//                         365 - (365 * confidence) / 100
//                       }
//                       className="transition-all duration-1000"
//                     />

//                     <defs>

//                       <linearGradient id="grad">

//                         <stop offset="0%" stopColor="#00FFD1" />

//                         <stop offset="50%" stopColor="#00C2FF" />

//                         <stop offset="100%" stopColor="#7C3AED" />

//                       </linearGradient>

//                     </defs>

//                   </svg>

//                   <div className="text-center">

//                     <h3 className="text-3xl font-bold text-white">

//                       {confidence}%

//                     </h3>

//                     <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-zinc-500">

//                       Confidence

//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* Analytics Row */}

//             <div className="grid gap-5 lg:grid-cols-2">

//               {/* Evidence Analytics */}

//               <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-3xl">

//                 <div className="mb-5 flex items-center justify-between">

//                   <h3 className="text-lg font-semibold text-white">

//                     Evidence Analytics

//                   </h3>

//                   <BarChart3 className="h-4 w-4 text-zinc-500" />

//                 </div>

//                 <div className="space-y-5">

//                   {result?.top_sources?.slice(0, 3).map((source, index) => (

//                     <div key={index}>

//                       <div className="mb-2 flex justify-between text-xs text-zinc-300">

//                         <span className="truncate max-w-[70%]">

//                           {source.title}

//                         </span>

//                         <span>

//                           {source.similarity}%

//                         </span>

//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-white/10">

//                         <div
//                           className="h-full rounded-full bg-gradient-to-r from-[#00FFD1] via-[#00C2FF] to-[#7C3AED] shadow-[0_0_20px_rgba(0,240,255,0.25)]"
//                           style={{
//                             width: `${source.similarity}%`,
//                           }}
//                         />

//                       </div>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//               {/* Source Breakdown */}

//               <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-3xl">

//                 <div className="mb-5 flex items-center justify-between">

//                   <h3 className="text-lg font-semibold text-white">

//                     Source Breakdown

//                   </h3>

//                   <PieChart className="h-4 w-4 text-zinc-500" />

//                 </div>

//                 <div className="space-y-5">

//                   {result?.top_sources?.slice(0, 3).map((source, index) => (

//                     <div key={index}>

//                       <div className="mb-2 flex items-center justify-between">

//                         <span className="truncate text-xs text-zinc-300">

//                           {source.name || "Trusted Source"}

//                         </span>

//                         <span className="text-xs text-zinc-500">

//                           {source.credibility}%

//                         </span>

//                       </div>

//                       <div className="h-2 overflow-hidden rounded-full bg-white/10">

//                         <div
//                           className="h-full rounded-full bg-gradient-to-r from-[#22C55E] via-[#14B8A6] to-[#06B6D4] shadow-[0_0_20px_rgba(34,197,94,0.25)]"
//                           style={{
//                             width: `${source.credibility}%`,
//                           }}
//                         />

//                       </div>

//                     </div>

//                   ))}

//                 </div>

//                 {/* Stats */}

//                 <div className="mt-6 grid grid-cols-3 gap-3">

//                   <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">

//                     <p className="text-xl font-bold text-white">

//                       {result?.top_sources?.length || 0}

//                     </p>

//                     <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

//                       Sources

//                     </p>

//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">

//                     <p className="text-xl font-bold text-white">

//                       {Math.round(confidence)}%

//                     </p>

//                     <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

//                       Match

//                     </p>

//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">

//                     <p className="text-xl font-bold text-white">

//                       AI

//                     </p>

//                     <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

//                       Semantic

//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* Compact Premium Evidence Cards */}

//             <div className="grid grid-cols-2 gap-4">

//               {result?.top_sources?.slice(0, 4).map((source, index) => (

//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-4 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.07]"
//                 >

//                   {/* Glow */}

//                   <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

//                     <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

//                   </div>

//                   {/* Top */}

//                   <div className="relative z-10 flex items-start justify-between gap-3">

//                     <div className="min-w-0">

//                       <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">

//                         Trusted Evidence

//                       </p>

//                       <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-white">

//                         {source.title}

//                       </h3>

//                     </div>

//                     <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-zinc-300">

//                       {source.analysis?.label}

//                     </span>

//                   </div>

//                   {/* Analytics */}

//                   <div className="relative z-10 mt-4 space-y-3">

//                     {/* Similarity */}

//                     <div>

//                       <div className="mb-1 flex items-center justify-between text-xs">

//                         <span className="text-zinc-500">

//                           Similarity

//                         </span>

//                         <span className="text-zinc-300">

//                           {source.similarity}%

//                         </span>

//                       </div>

//                       <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

//                         <div
//                           className="h-full rounded-full bg-gradient-to-r from-[#00FFD1] via-[#00C2FF] to-[#7C3AED] shadow-[0_0_20px_rgba(0,240,255,0.25)]"
//                           style={{
//                             width: `${source.similarity}%`,
//                           }}
//                         />

//                       </div>

//                     </div>

//                     {/* Credibility */}

//                     <div>

//                       <div className="mb-1 flex items-center justify-between text-xs">

//                         <span className="text-zinc-500">

//                           Credibility

//                         </span>

//                         <span className="text-zinc-300">

//                           {source.credibility}

//                         </span>

//                       </div>

//                       <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

//                         <div
//                           className="h-full rounded-full bg-gradient-to-r from-[#22C55E] via-[#14B8A6] to-[#06B6D4] shadow-[0_0_20px_rgba(34,197,94,0.25)]"
//                           style={{
//                             width: `${source.credibility}%`,
//                           }}
//                         />

//                       </div>

//                     </div>

//                   </div>

//                   {/* Bottom */}

//                   <div className="relative z-10 mt-4 flex items-center justify-between">

//                     <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-500">

//                       Rank {source.rank_score}

//                     </div>

//                     <a
//                       href={source.url}
//                       target="_blank"
//                       className="text-sm font-medium text-cyan-300 transition hover:text-white"
//                     >

//                       Read Source →

//                     </a>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>

//   );
// }




"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";

import { analyzeNews } from "@/lib/api";

import {
  Sparkles,
  Activity,
  PieChart,
  BarChart3,
} from "lucide-react";

export default function AnalyzePage() {

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  async function handleAnalyze() {

    if (!text.trim()) return;

    try {

      setLoading(true);

      setResult(null);

      const data = await analyzeNews(text);

      setResult(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  }

  const confidence = result?.confidence || 0;

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Glow Orbs */}

        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

        <div className="absolute right-[-100px] top-[20%] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-3xl animate-pulse" />

        <div className="absolute bottom-[-120px] left-[35%] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

        {/* Floating Tiles */}

        <div className="absolute inset-0 overflow-hidden opacity-[0.22]">

          <div className="absolute left-5 top-16 h-36 w-52 md:h-44 md:w-72 animate-[float_10s_ease-in-out_infinite] rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl" />

          <div className="absolute right-6 top-32 h-44 w-52 md:h-56 md:w-64 animate-[float_13s_ease-in-out_infinite] rounded-[30px] border border-cyan-500/10 bg-cyan-500/[0.04] backdrop-blur-3xl" />

          <div className="absolute left-[20%] top-[18%] h-40 w-56 md:h-52 md:w-80 animate-[float_16s_ease-in-out_infinite] rounded-[30px] border border-violet-500/10 bg-violet-500/[0.04] backdrop-blur-3xl" />

          <div className="absolute bottom-16 left-6 h-44 w-56 md:h-64 md:w-72 animate-[float_15s_ease-in-out_infinite] rounded-[30px] border border-blue-500/10 bg-blue-500/[0.04] backdrop-blur-3xl" />

          <div className="absolute bottom-24 right-[10%] h-40 w-64 md:h-56 md:w-96 animate-[float_18s_ease-in-out_infinite] rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl" />

        </div>

        {/* Blur Layer */}

        <div className="absolute inset-0 bg-[#050816]/70 backdrop-blur-[90px]" />

      </div>

      {/* Navbar */}

      <Navbar />

      {/* Main Layout */}

      <section className="relative z-10 mx-auto max-w-[1650px] px-4 pb-8 pt-24 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">

          {/* LEFT PANEL */}

          <div className="xl:col-span-3 flex flex-col rounded-[28px] border border-white/10 bg-white/[0.045] p-4 sm:p-5 backdrop-blur-3xl shadow-[0_0_60px_rgba(0,255,255,0.03)]">

            {/* Badge */}

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-zinc-300">

              <Sparkles className="h-3.5 w-3.5" />

              AI-Powered Claim Validation

            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">

              Validate News
              <br />

              With Real Evidence

            </h1>

            {/* Description */}

            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">

              Semantic reasoning, contradiction analysis and trusted evidence validation.

            </p>

            {/* Input */}

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-4">

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a claim to validate..."
                className="min-h-[220px] w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 sm:text-base"
              />

            </div>

            {/* Button */}

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98] sm:text-base"
            >

              {loading ? (

                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  Analyzing...
                </>

              ) : (

                <>
                  <Sparkles className="h-4 w-4" />
                  Validate Claim
                </>

              )}

            </button>

            {/* Loader */}

            <div className="mt-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-4">

              <div className="flex items-center gap-3">

                <div className="h-4 w-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />

                <div>

                  <p className="text-sm font-medium text-cyan-300">

                    Searching trusted sources

                  </p>

                  <p className="text-xs text-zinc-500">

                    Semantic evidence ranking

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="xl:col-span-9 flex flex-col gap-5">

            {/* Verdict */}

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-5 sm:p-7 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,255,255,0.03)]">

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400">

                    <Activity className="h-3.5 w-3.5" />

                    Final Verdict

                  </div>

                  <h2 className="mt-5 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">

                    {result?.verdict || "Awaiting"}

                  </h2>

                  <p className="mt-3 text-sm text-zinc-400">

                    AI semantic validation across trusted evidence.

                  </p>

                </div>

                {/* Confidence Circle */}

                <div className="relative mx-auto flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36 lg:mx-0">

                  <svg className="absolute inset-0 h-full w-full -rotate-90">

                    <circle
                      cx="72"
                      cy="72"
                      r="58"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="8"
                      fill="none"
                    />

                    <circle
                      cx="72"
                      cy="72"
                      r="58"
                      stroke="url(#grad)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={365}
                      strokeDashoffset={
                        365 - (365 * confidence) / 100
                      }
                      className="transition-all duration-1000"
                    />

                    <defs>

                      <linearGradient id="grad">

                        <stop offset="0%" stopColor="#00FFD1" />

                        <stop offset="50%" stopColor="#00C2FF" />

                        <stop offset="100%" stopColor="#7C3AED" />

                      </linearGradient>

                    </defs>

                  </svg>

                  <div className="text-center">

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">

                      {confidence}%

                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-zinc-500">

                      Confidence

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Analytics */}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

              {/* Evidence Analytics */}

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-3xl">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-lg font-semibold text-white">

                    Evidence Analytics

                  </h3>

                  <BarChart3 className="h-4 w-4 text-zinc-500" />

                </div>

                <div className="space-y-5">

                  {result?.top_sources?.slice(0, 3).map((source, index) => (

                    <div key={index}>

                      <div className="mb-2 flex justify-between text-xs text-zinc-300">

                        <span className="truncate max-w-[70%]">

                          {source.title}

                        </span>

                        <span>

                          {source.similarity}%

                        </span>

                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#00FFD1] via-[#00C2FF] to-[#7C3AED] shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-1000"
                          style={{
                            width: `${source.similarity}%`,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* Source Breakdown */}

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-3xl">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-lg font-semibold text-white">

                    Source Breakdown

                  </h3>

                  <PieChart className="h-4 w-4 text-zinc-500" />

                </div>

                <div className="grid grid-cols-3 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">

                    <p className="text-xl font-bold text-white">

                      {result?.top_sources?.length || 0}

                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

                      Sources

                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">

                    <p className="text-xl font-bold text-white">

                      {Math.round(confidence)}%

                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

                      Match

                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">

                    <p className="text-xl font-bold text-white">

                      AI

                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">

                      Semantic

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Evidence Cards */}

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

              {result?.top_sources?.slice(0, 4).map((source, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-4 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:bg-white/[0.07]"
                >

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

                  </div>

                  <div className="relative z-10 flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">

                        Trusted Evidence

                      </p>

                      <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-white">

                        {source.title}

                      </h3>

                    </div>

                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-zinc-300">

                      {source.analysis?.label}

                    </span>

                  </div>

                  <div className="relative z-10 mt-4 space-y-3">

                    <div>

                      <div className="mb-1 flex items-center justify-between text-xs">

                        <span className="text-zinc-500">

                          Similarity

                        </span>

                        <span className="text-zinc-300">

                          {source.similarity}%

                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#00FFD1] via-[#00C2FF] to-[#7C3AED] shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-1000"
                          style={{
                            width: `${source.similarity}%`,
                          }}
                        />

                      </div>

                    </div>

                    <div>

                      <div className="mb-1 flex items-center justify-between text-xs">

                        <span className="text-zinc-500">

                          Credibility

                        </span>

                        <span className="text-zinc-300">

                          {source.credibility}

                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#22C55E] via-[#14B8A6] to-[#06B6D4] shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all duration-1000"
                          style={{
                            width: `${source.credibility}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between">

                    <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-500">

                      Rank {source.rank_score}

                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      className="text-sm font-medium text-cyan-300 transition hover:text-white"
                    >

                      Read Source →

                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>

  );
}


