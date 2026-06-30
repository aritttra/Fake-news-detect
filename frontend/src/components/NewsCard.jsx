"use client";

import { motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";

function shortenHeadline(
  text = "",
  maxWords = 11
) {

  return text
    .split(" ")
    .slice(0, maxWords)
    .join(" ");
}

export default function NewsCard({
  item,
}) {

  const [focused, setFocused] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const cardRef = useRef(null);

  const hoverTimeout =
    useRef(null);

  /* Detect Mobile */

  useEffect(() => {

    function checkMobile() {

      setIsMobile(
        window.innerWidth < 1024
      );
    }

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );

  }, []);

  /* Outside Click */

  useEffect(() => {

    function handleOutside(
      event
    ) {

      if (
        cardRef.current &&
        !cardRef.current.contains(
          event.target
        )
      ) {

        setFocused(false);

        document.body.classList.remove(
          "intelligence-focus"
        );

        document.body.classList.remove(
          "wall-paused"
        );
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutside
    );

    document.addEventListener(
      "touchstart",
      handleOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutside
      );

      document.removeEventListener(
        "touchstart",
        handleOutside
      );
    };

  }, []);

  /* Desktop Hover */

  const handleMouseEnter = () => {

    if (isMobile) return;

    hoverTimeout.current =
      setTimeout(() => {

        setFocused(true);

        document.body.classList.add(
          "intelligence-focus"
        );

        document.body.classList.add(
          "wall-paused"
        );

      }, 350);
  };

  const handleMouseLeave = () => {

    if (isMobile) return;

    clearTimeout(
      hoverTimeout.current
    );

    setFocused(false);

    document.body.classList.remove(
      "intelligence-focus"
    );

    document.body.classList.remove(
      "wall-paused"
    );
  };

  /* Mobile Click */

  const handleClick = () => {

    if (!isMobile) return;

    const next =
      !focused;

    setFocused(next);

    if (next) {

      document.body.classList.add(
        "intelligence-focus"
      );

      document.body.classList.add(
        "wall-paused"
      );

    } else {

      document.body.classList.remove(
        "intelligence-focus"
      );

      document.body.classList.remove(
        "wall-paused"
      );
    }
  };

  return (

    <motion.div

      ref={cardRef}

      onMouseEnter={
        handleMouseEnter
      }

      onMouseLeave={
        handleMouseLeave
      }

      onClick={handleClick}

      animate={{
        scale: focused ? 1.04 : 1,
        y: focused ? -10 : 0,
      }}

      transition={{
        duration: 0.35,
      }}

      className={`
        intelligence-card
        ${focused ? "hover-active" : ""}

        group
        relative

        w-full
        min-w-0

        h-[260px]
        md:h-[42vh]

        rounded-[22px]

        overflow-hidden

        shrink-0

        cursor-pointer

        transition-all
        duration-500

        hover:z-20
      `}
    >

      {/* Image */}

      <img
        src={
          item.urlToImage ||
          "https://images.unsplash.com/photo-1495020689067-958852a7765e"
        }

        alt={
          item.title ||
          "Breaking News"
        }

        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          transition-all
          duration-700

          scale-[1.01]

          intelligence-image
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black/90
          via-black/28
          to-black/10
        "
      />

      {/* Content */}

      <div className="absolute bottom-0 p-4 md:p-5 z-10 w-full">

        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60">
          Breaking News
        </p>

        <h2 className="text-[1rem] md:text-lg font-bold text-white line-clamp-3 mb-2">
          {shortenHeadline(
            item.title
          )}
        </h2>

        {focused && (

          <motion.p

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.35,
            }}

            className="
              mt-3

              text-[12px]
              md:text-[13px]

              leading-relaxed

              text-white/65

              line-clamp-3

              font-light
            "
          >
            {
              item.description ||
              "Open article for full coverage."
            }
          </motion.p>

        )}

        {focused && (

          <motion.a

            href={item.url}

            target="_blank"

            rel="noopener noreferrer"

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.08,
              duration: 0.35,
            }}

            className="
              inline-flex
              items-center

              mt-4

              px-4
              py-2

              rounded-full

              border
              border-white/10

              bg-white/10

              text-[10px]
              uppercase

              tracking-[0.18em]

              text-white/82

              hover:bg-white/15

              transition-all
              duration-300
            "
          >
            Read Article
          </motion.a>

        )}

      </div>

    </motion.div>
  );
}