import requests
import time

# =====================================
# GLOBAL RATE LIMIT TIMER
# =====================================

LAST_GDELT_CALL = 0

# =====================================
# SESSION
# =====================================

session = requests.Session()

session.headers.update({

    "User-Agent":
    "Mozilla/5.0"
})


def search_gdelt(query):

    global LAST_GDELT_CALL

    # =====================================
    # WAIT 6 SECONDS BETWEEN REQUESTS
    # =====================================

    elapsed = time.time() - LAST_GDELT_CALL

    if elapsed < 6:

        wait_time = 6 - elapsed

        print(
            f"Waiting {wait_time:.1f}s before GDELT request..."
        )

        time.sleep(wait_time)

    LAST_GDELT_CALL = time.time()

    # =====================================
    # CLEAN QUERY
    # =====================================

    clean_query = " ".join(
        query.split()[:4]
    )

    # =====================================
    # REQUEST
    # =====================================

    url = (
        "https://api.gdeltproject.org/api/v2/doc/doc"
    )

    params = {

        "query":
        f"{clean_query} sourceLang:english",

        "mode":
        "ArtList",

        "maxrecords":
        3,

        "format":
        "json",

        "sort":
        "HybridRel"
    }

    try:

        response = session.get(

            url,

            params=params,

            timeout=10
        )

        print(
            "GDELT STATUS:",
            response.status_code
        )

        if response.status_code == 200:

            data = response.json()

            print(
                "GDELT ARTICLES:",
                len(
                    data.get(
                        "articles",
                        []
                    )
                )
            )

            return data

    except Exception as e:

        print(
            "GDELT FAILED:",
            e
        )

    return {
        "articles": []
    }