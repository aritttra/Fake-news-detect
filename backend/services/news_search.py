from ddgs import DDGS


def search_news(query):

    results = []

    try:

        with DDGS() as ddgs:

            search_results = ddgs.text(

                query,

                max_results=5
            )

            for item in search_results:

                title = item.get(
                    "title",
                    ""
                )

                body = item.get(
                    "body",
                    ""
                )

                href = item.get(
                    "href",
                    ""
                )

                results.append({

                    "title":
                        title,

                    "description":
                        body,

                    "content":
                        f"{title}. {body}",

                    "url":
                        href,

                    "source": {

                        "name":
                            href
                    }
                })

    except Exception as e:

        print(
            "SEARCH ERROR:",
            e
        )

    return {

        "articles":
            results
    }