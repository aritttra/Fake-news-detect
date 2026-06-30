"use client";

import { useState } from "react";

import { analyzeNews } from "@/lib/api";

export default function AnalyzePage() {

  const [text, setText] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleAnalyze() {

    if (!text.trim()) return;

    try {

      setLoading(true);

      setError("");

      const response =
        await analyzeNews(text);

      setResult(response);

    } catch (err) {

      setError(
        "Analysis failed"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-16
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
        "
      >

        <h1
          className="
            text-5xl
            font-bold
          "
        >
          TruthArchive
        </h1>

        <p
          className="
            text-zinc-400
            mt-4
          "
        >
          AI-powered evidence
          reasoning engine
        </p>

        {/* Input */}

        <div
          className="
            mt-12
          "
        >

          <textarea

            value={text}

            onChange={(e) =>
              setText(
                e.target.value
              )
            }

            placeholder="
              Paste a claim or article...
            "

            className="
              w-full
              h-40
              bg-zinc-950
              border
              border-zinc-800
              rounded-3xl
              p-6
              text-lg
              outline-none
            "
          />

          <button

            onClick={
              handleAnalyze
            }

            disabled={loading}

            className="
              mt-6
              px-8
              py-4
              rounded-2xl
              bg-white
              text-black
              font-semibold
            "
          >

            {
              loading
                ? "Analyzing..."
                : "Analyze Claim"
            }

          </button>

        </div>

        {/* Error */}

        {error && (

          <div
            className="
              mt-6
              text-red-400
            "
          >
            {error}
          </div>
        )}

        {/* Result */}

        {result && (

          <div
            className="
              mt-16
              space-y-8
            "
          >

            {/* Verdict */}

            <div
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-3xl
                p-8
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                {result.verdict}
              </h2>

              <p
                className="
                  mt-4
                  text-zinc-400
                "
              >

                Confidence:
                {" "}
                {result.confidence}%

              </p>

              <p
                className="
                  mt-2
                  text-zinc-500
                "
              >

                Query:
                {" "}
                {result.query}

              </p>

            </div>

            {/* Sources */}

            <div
              className="
                space-y-6
              "
            >

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Evidence Sources
              </h3>

              {
                result.top_sources?.map(
                  (
                    source,
                    index
                  ) => (

                    <a

                      key={index}

                      href={source.url}

                      target="_blank"

                      rel="
                        noreferrer
                      "

                      className="
                        block
                        bg-zinc-950
                        border
                        border-zinc-800
                        rounded-3xl
                        p-6
                        hover:border-zinc-700
                        transition
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-6
                        "
                      >

                        <div>

                          <h4
                            className="
                              text-xl
                              font-semibold
                            "
                          >
                            {source.title}
                          </h4>

                          <p
                            className="
                              text-zinc-400
                              mt-2
                            "
                          >
                            {source.name}
                          </p>

                        </div>

                        <div
                          className="
                            text-right
                          "
                        >

                          <p
                            className="
                              text-sm
                              text-zinc-400
                            "
                          >
                            Similarity
                          </p>

                          <p
                            className="
                              text-lg
                              font-bold
                            "
                          >
                            {
                              source.similarity
                            }%
                          </p>

                        </div>

                      </div>

                      <div
                        className="
                          mt-4
                          flex
                          gap-6
                          text-sm
                          text-zinc-500
                        "
                      >

                        <span>
                          Credibility:
                          {" "}
                          {
                            source.credibility
                          }
                        </span>

                        <span>
                          Analysis:
                          {" "}
                          {
                            source.analysis
                              ?.label
                          }
                        </span>

                      </div>

                    </a>
                  )
                )
              }

            </div>

          </div>
        )}

      </div>

    </main>
  );
}