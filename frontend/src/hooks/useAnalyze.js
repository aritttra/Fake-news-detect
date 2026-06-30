import { useState } from "react";

import { analyzeNews } from "@/lib/api";


export default function useAnalyze() {

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] = useState(null);


  const analyze = async (text) => {

    try {

      setLoading(true);

      setError(null);

      const data = await analyzeNews(text);

      setResult(data);

    } catch (err) {

      setError("Analysis failed.");

      console.error(err);

    } finally {

      setLoading(false);
    }
  };


  return {
    analyze,
    loading,
    result,
    error,
  };
}