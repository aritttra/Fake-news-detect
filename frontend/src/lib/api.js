// const BASE_URL =
//   "http://127.0.0.1:8000";
const BASE_URL = "http://127.0.0.1:8000";

export async function analyzeNews(
  text
) {

  const response = await fetch(
    `${BASE_URL}/analyze`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        text,
      }),
    }
  );

  if (!response.ok) {

    throw new Error(
      "Analysis failed"
    );
  }

  const data =
    await response.json();

  return data;
}