export async function fetchNews() {

  const apiKey =
    process.env.NEXT_PUBLIC_NEWS_API_KEY;

  try {

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=${apiKey}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const data =
      await response.json();

    return Array.isArray(
      data.articles
    )
      ? data.articles
      : [];

  } catch (error) {

    console.error(error);

    return [];
  }
}