"use client";

import NewsCard from "./NewsCard";

export default function NewsColumn({
  items = [],
  reverse = false,
}) {

  const repeated = [
    ...items,
    ...items,
  ];

  const animationClass =
    reverse
      ? "animate-scroll-reverse"
      : "animate-scroll";

  return (

    <div className="relative h-screen overflow-hidden flex-1 isolate">

      <div
        className={`animated-column transform-gpu backface-hidden flex flex-col gap-[6px] ${animationClass}`}
      >

        {repeated.map((item, index) => (

          <NewsCard
            key={`${item.title}-${index}`}
            item={item}
          />

        ))}

      </div>

    </div>
  );
}