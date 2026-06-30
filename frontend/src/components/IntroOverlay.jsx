"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function IntroOverlay() {

  const [phase, setPhase] =
    useState("intro");

  const [visible, setVisible] =
    useState(true);

  useEffect(() => {

    const crackTimer =
      setTimeout(() => {
        setPhase("crack");
      }, 2200);

    const moveTimer =
      setTimeout(() => {
        setPhase("move");
      }, 3200);

    const endTimer =
      setTimeout(() => {

        setVisible(false);

      }, 4200);

    return () => {

      clearTimeout(crackTimer);
      clearTimeout(moveTimer);
      clearTimeout(endTimer);

    };

  }, []);

  return (
    <AnimatePresence>

      {visible && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 1.2,
          }}

          className="
            fixed
            inset-0
            z-[999]
            bg-black/85
            backdrop-blur-md
            overflow-hidden
          "
        >

          {/* Ambient Glow */}

          <motion.div

            animate={{
              opacity:
                phase === "crack"
                  ? 0.18
                  : 0.06,

              scale:
                phase === "crack"
                  ? 1.15
                  : 1,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[700px]
              h-[700px]
              rounded-full

              bg-white/[0.05]
              blur-[140px]
            "
          />

          {/* Center Title */}

          <motion.div

            layout

            transition={{
              layout: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}

            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              flex
              flex-col
              items-center
            "
          >

            {/* Flash Layer */}

            <motion.div

              animate={{
                opacity:
                  phase === "crack"
                    ? [0, 0.8, 0]
                    : 0,
              }}

              transition={{
                duration: 0.5,
              }}

              className="
                absolute
                inset-[-120px]
                rounded-full
                bg-white
                blur-[100px]
                pointer-events-none
              "
            />

            {/* Glass Crack Overlay */}

            {phase === "crack" && (

              <motion.div

                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                animate={{
                  opacity: 0.22,
                  scale: 1,
                }}

                transition={{
                  duration: 0.4,
                }}

                className="
                  absolute
                  inset-[-100px]
                  bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')]
                  mix-blend-screen
                  pointer-events-none
                "
              />

            )}

            {/* Main Title */}

            <motion.h1

              layoutId="truth-logo"

              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(12px)",
              }}

              animate={{
                opacity: 1,
                y: 0,
                filter:
                  phase === "crack"
                    ? "blur(1px)"
                    : "blur(0px)",
              }}

              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="
                text-[7vw]
                font-semibold
                tracking-[-0.08em]
                text-white/92
                leading-none
              "
            >
              Truth Archive
            </motion.h1>

            {/* Subtitle */}

            <motion.p

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 0.5,
                duration: 1,
              }}

              className="
                mt-6
                text-[11px]
                uppercase
                tracking-[0.42em]
                text-white/38
              "
            >
              Fake News Detection System
            </motion.p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}