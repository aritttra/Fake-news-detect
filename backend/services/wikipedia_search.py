import wikipedia


def search_wikipedia(query):

    try:

        results = wikipedia.search(
            query
        )

        if not results:

            return None

        page = wikipedia.page(
            results[0],
            auto_suggest=False
        )

        return {

            "title":
                page.title,

            "content":
                page.summary,

            "url":
                page.url
        }

    except Exception:

        return None