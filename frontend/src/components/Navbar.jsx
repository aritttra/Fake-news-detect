// "use client";

// import { motion } from "framer-motion";

// export default function Navbar() {

//   const navItems = [
//     "HOME",
//     "ANALYZE",
//     "NARRATIVES",
//     "TRUTH CHALLENGE",
//     "ABOUT",
//   ];

//   return (

//     <motion.nav
//       className="
//         fixed
//         top-0
//         left-0
//         w-full
//         z-[9999]
//         isolate
//       "
//     >

//       <div
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(10,12,18,0.82), rgba(7,8,12,0.68))",

//           backdropFilter:
//             "blur(18px) saturate(160%)",

//           WebkitBackdropFilter:
//             "blur(18px) saturate(160%)",

//           border:
//             "1px solid rgba(255,255,255,0.06)",

//           boxShadow:
//             "0 6px 24px rgba(0,0,0,0.22)",
//         }}

//         className="
//           relative

//           mx-auto
//           mt-2.5

//           w-[97.8%]
//           max-w-[1880px]

//           rounded-[14px]
//           overflow-hidden
//         "
//       >

//         {/* Ambient Glow */}

//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.025] via-transparent to-orange-300/[0.025] pointer-events-none" />

//         {/* Top Reflection */}

//         <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.05]" />

//         {/* Main Row */}

//         <div
//           className="
//             relative

//             flex
//             items-center

//             h-[58px]

//             px-7
//           "
//         >

//           {/* LEFT */}

//           <div
//             className="
//               flex
//               items-center
//               gap-4

//               min-w-fit
//             "
//           >

//             {/* Logo */}

//             <motion.div
//               whileHover={{ opacity: 1 }}
//               className="
//                 flex
//                 flex-col
//                 justify-center
//                 cursor-pointer
//               "
//             >

//               <div
//                 className="
//                   text-[1rem]
//                   md:text-[1.15rem]

//                   font-semibold

//                   tracking-[-0.045em]

//                   text-white/92

//                   leading-none
//                 "
//               >
//                 Truth Archive
//               </div>

//               <div
//                 className="
//                   mt-[5px]

//                   text-[7px]

//                   uppercase

//                   tracking-[0.22em]

//                   text-white/38

//                   leading-none
//                 "
//               >
//                 Fake News Detector
//               </div>

//             </motion.div>

//             {/* Divider */}

//             <div className="h-4 w-px bg-white/10" />

//             {/* Signals */}

//             <div className="flex items-center gap-2">

//               <div className="relative flex items-center justify-center">

//                 <div className="absolute h-3 w-3 rounded-full bg-red-500/25 animate-ping" />

//                 <div className="relative h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

//               </div>

//               <span
//                 className="
//                   text-[7px]

//                   uppercase

//                   tracking-[0.18em]

//                   text-white/42
//                 "
//               >
//                 LIVE
//               </span>

//             </div>

//           </div>

//           {/* CENTER NAV */}

//           <div
//             className="
//               absolute
//               left-1/2
//               -translate-x-1/2

//               flex
//               items-center

//               gap-8
//               md:gap-11
//             "
//           >

//             {navItems.map((item) => (

//               <motion.button
//                 key={item}

//                 whileHover={{
//                   y: -1,
//                 }}

//                 transition={{
//                   duration: 0.18,
//                 }}

//                 className="
//                   text-[10px]

//                   uppercase

//                   tracking-[0.16em]

//                   text-white/60
//                   hover:text-white

//                   transition-all
//                   duration-300

//                   whitespace-nowrap
//                 "
//               >
//                 {item}
//               </motion.button>

//             ))}

//           </div>

//         </div>

//       </div>

//     </motion.nav>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ANALYZE", href: "/analyze" },
    { name: "MISINFORM", href: "/misinform" },
    { name: "ABOUT", href: "/about" },
  ];

  return (

    <motion.nav
      className="fixed top-0 left-0 w-full z-[9999] isolate"
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

        className="relative mx-auto mt-2.5 w-[97.8%] max-w-[1880px] rounded-[14px] overflow-hidden"
      >

        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.025] via-transparent to-orange-300/[0.025] pointer-events-none" />

        {/* Reflection */}

        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.05]" />

        {/* Main Row */}

        <div className="relative flex items-center justify-between h-[58px] px-4 md:px-7">

          {/* LEFT */}

          <div className="flex items-center gap-3 md:gap-4 min-w-fit">

            {/* Logo */}

            <Link href="/">

              <motion.div
                whileHover={{ opacity: 1 }}
                className="flex flex-col justify-center cursor-pointer"
              >

                <div className="text-[1rem] md:text-[1.15rem] font-semibold tracking-[-0.045em] text-white/92 leading-none">
                  Truth Archive
                </div>

                <div className="mt-[5px] text-[6px] md:text-[7px] uppercase tracking-[0.22em] text-white/38 leading-none">
                  Fake News Detector
                </div>

              </motion.div>

            </Link>

            {/* Divider */}

            <div className="hidden sm:block h-4 w-px bg-white/10" />

            {/* Signals */}

            <div className="hidden sm:flex items-center gap-2">

              <div className="relative flex items-center justify-center">

                <div className="absolute h-3 w-3 rounded-full bg-red-500/25 animate-ping" />

                <div className="relative h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

              </div>

              <span className="text-[7px] uppercase tracking-[0.18em] text-white/42">
                SIGNALS
              </span>

            </div>

          </div>

          {/* DESKTOP NAV */}

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-11">

            {navItems.map((item) => (

              <Link
                key={item.name}
                href={item.href}
              >

                <motion.button
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.18 }}
                  className="text-[10px] uppercase tracking-[0.16em] text-white/60 hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  {item.name}
                </motion.button>

              </Link>

            ))}

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }

            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] text-white/75"
          >

            <span className="text-sm leading-none">
              {menuOpen ? "✕" : "☰"}
            </span>

          </button>

        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div

              initial={{
                opacity: 0,
                y: -10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -10,
              }}

              transition={{
                duration: 0.2,
              }}

              className="md:hidden border-t border-white/5 px-5 py-4 flex flex-col gap-4 bg-black/30 backdrop-blur-xl"
            >

              {navItems.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                >

                  <motion.button
                    whileTap={{
                      scale: 0.98,
                    }}

                    className="text-left text-[11px] uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </motion.button>

                </Link>

              ))}

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.nav>
  );
}