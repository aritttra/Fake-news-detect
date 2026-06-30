// US News Fetching



// "use client";

// import { useEffect, useState } from "react";

// import Navbar from "../components/Navbar";
// import NewsColumn from "../components/NewsColumn";

// export default function Home() {

//   const [news, setNews] =
//     useState([]);

//   const [columns, setColumns] =
//     useState(5);

//   /* Responsive Columns */

//   useEffect(() => {

//     function handleResize() {

//       if (window.innerWidth < 640) {

//         setColumns(2);

//       } else if (
//         window.innerWidth < 1024
//       ) {

//         setColumns(3);

//       } else {

//         setColumns(5);
//       }
//     }

//     handleResize();

//     window.addEventListener(
//       "resize",
//       handleResize
//     );

//     return () =>
//       window.removeEventListener(
//         "resize",
//         handleResize
//       );

//   }, []);

//   /* Fetch News */

//   useEffect(() => {

//     async function loadNews() {

//       try {

//         const response =
//           await fetch(
//             `https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
//           );

//         const data =
//           await response.json();

//         setNews(
//           data.articles || []
//         );

//       } catch (error) {

//         console.error(error);

//       }
//     }

//     loadNews();

//   }, []);

//   return (

//     <main className="relative h-screen overflow-hidden bg-[#05070A] text-white">

//       {/* Navbar */}

//       <Navbar />

//       {/* News Wall */}

//       <section className="intelligence-wall absolute inset-0 flex justify-between gap-[6px] px-1 overflow-hidden">

//         {Array.from({
//           length: columns,
//         }).map((_, index) => {

//           const columnNews =
//             news.filter(
//               (_, i) =>
//                 i % columns === index
//             );

//           return (

//             <NewsColumn
//               key={index}
//               items={columnNews}
//               reverse={index % 2 === 0}
//             />

//           );
//         })}

//       </section>

//     </main>
//   );
// }


// Regional News Fetching with Geo Detection

"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import NewsColumn from "../components/NewsColumn";

export default function Home() {

  const [news, setNews] =
    useState([]);

  const [columns, setColumns] =
    useState(5);

  /* Responsive Columns */

  useEffect(() => {

    function handleResize() {

      if (window.innerWidth < 640) {

        setColumns(2);

      } else if (
        window.innerWidth < 1024
      ) {

        setColumns(3);

      } else {

        setColumns(5);
      }
    }

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  /* Fetch Regional News */

  useEffect(() => {

    async function loadNews() {

      try {

        let query = "world";

        /* Detect User Country */

        try {

          const geoResponse =
            await fetch(
              "https://ipapi.co/json/"
            );

          const geoData =
            await geoResponse.json();

          console.log(
            "Geo Data:",
            geoData
          );

          if (
            geoData.country_name
          ) {

            query =
              geoData.country_name;
          }

        } catch (geoError) {

          console.error(
            "Geo Detection Failed:",
            geoError
          );
        }

        /* Fetch News */

        const response =
          await fetch(
            `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=50&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
          );

        const data =
          await response.json();

        console.log(data);

        if (
          Array.isArray(
            data.articles
          )
        ) {

          setNews(
            data.articles
          );

        } else {

          console.error(
            "No articles returned"
          );
        }

      } catch (error) {

        console.error(
          "News Fetch Failed:",
          error
        );
      }
    }

    loadNews();

  }, []);

  return (

    <main className="relative h-screen overflow-hidden bg-[#05070A] text-white">

      {/* Navbar */}

      <Navbar />

      {/* News Wall */}

      <section className="intelligence-wall absolute inset-0 flex justify-between gap-[6px] px-1 overflow-hidden">

        {news.length > 0 &&

          Array.from({
            length: columns,
          }).map((_, index) => {

            const columnNews =
              news.filter(
                (_, i) =>
                  i % columns === index
              );

            return (

              <NewsColumn
                key={index}
                items={columnNews}
                reverse={index % 2 === 0}
              />

            );
          })}

      </section>

    </main>
  );
}