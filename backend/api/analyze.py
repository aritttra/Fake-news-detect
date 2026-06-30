# from fastapi import APIRouter
# from pydantic import BaseModel

# from services.extractor import (
#     extract_keywords
# )

# from services.query_expansion import (
#     expand_query
# )

# from services.news_search import (
#     search_news
# )

# from services.wikipedia_search import (
#     search_wikipedia
# )

# from services.similarity import (
#     calculate_similarity
# )

# from services.contradiction import (
#     detect_contradiction
# )

# from services.credibility import (
#     get_source_credibility
# )

# from services.ranking import (
#     rank_articles
# )

# from services.verdict import (
#     generate_verdict
# )

# router = APIRouter()


# class AnalyzeRequest(BaseModel):

#     text: str


# @router.post("/analyze")
# async def analyze_news(
#     data: AnalyzeRequest
# ):

#     try:

#         print(
#             "\n=== ANALYSIS STARTED ==="
#         )

#         # =====================================
#         # QUERY EXTRACTION
#         # =====================================

#         keywords = extract_keywords(
#             data.text
#         )

#         queries = expand_query(
#             keywords
#         )

#         print(
#             "QUERY:",
#             keywords
#         )

#         evidence_pool = []

#         seen_urls = set()

#         # =====================================
#         # WIKIPEDIA SEARCH
#         # =====================================

#         print(
#             "\nSearching Wikipedia..."
#         )

#         wiki = search_wikipedia(
#             keywords
#         )

#         if wiki:

#             wiki_content = (
#                 wiki["content"][:500]
#             )

#             similarity = (
#                 calculate_similarity(

#                     data.text,

#                     wiki_content
#                 )
#             )

#             credibility = 85

#             contradiction = (
#                 detect_contradiction(

#                     data.text,

#                     wiki_content,

#                     similarity * 100,

#                     credibility
#                 )
#             )

#             if similarity >= 0.30:

#                 evidence_pool.append({

#                     "source_type":
#                         "wikipedia",

#                     "name":
#                         "Wikipedia",

#                     "title":
#                         wiki["title"],

#                     "content":
#                         wiki["content"],

#                     "url":
#                         wiki["url"],

#                     "credibility":
#                         credibility,

#                     "similarity":
#                         round(
#                             similarity * 100,
#                             2
#                         ),

#                     "analysis":
#                         contradiction,
#                 })

#         # =====================================
#         # DDGS SEARCH
#         # =====================================

#         print(
#             "\nSearching NewsAPI..."
#         )

#         for query in queries:

#             news_data = search_news(
#                 query
#             )

#             articles = news_data.get(
#                 "articles",
#                 []
#             )

#             print(
#                 "NEWSAPI:",
#                 len(articles)
#             )

#             for article in articles[:3]:

#                 title = article.get(
#                     "title",
#                     ""
#                 )

#                 description = article.get(
#                     "description",
#                     ""
#                 )

#                 content = article.get(
#                     "content",
#                     ""
#                 )

#                 url = article.get(
#                     "url",
#                     ""
#                 )

#                 if not url:

#                     continue

#                 normalized_url = (
#                     url.split("?")[0]
#                 )

#                 if normalized_url in seen_urls:

#                     continue

#                 seen_urls.add(
#                     normalized_url
#                 )

#                 combined_text = f"""

#                 {title}

#                 {description}

#                 {content}

#                 """[:500]

#                 if not combined_text.strip():

#                     continue

#                 # =====================================
#                 # SIMILARITY
#                 # =====================================

#                 similarity = (
#                     calculate_similarity(

#                         data.text,

#                         combined_text
#                     )
#                 )

#                 if similarity < 0.30:

#                     continue

#                 # =====================================
#                 # SOURCE NAME
#                 # =====================================

#                 source_name = article.get(
#                     "source",
#                     {}
#                 ).get(
#                     "name",
#                     "Unknown"
#                 )

#                 credibility = (
#                     get_source_credibility(
#                         source_name
#                     )
#                 )

#                 # =====================================
#                 # FILTER LOW QUALITY SOURCES
#                 # =====================================

#                 if credibility < 75:

#                     continue

#                 # =====================================
#                 # CONTRADICTION ANALYSIS
#                 # =====================================

#                 contradiction = (
#                     detect_contradiction(

#                         data.text,

#                         combined_text,

#                         similarity * 100,

#                         credibility
#                     )
#                 )

#                 evidence_pool.append({

#                     "source_type":
#                         "news",

#                     "name":
#                         source_name,

#                     "title":
#                         title,

#                     "content":
#                         combined_text,

#                     "url":
#                         url,

#                     "credibility":
#                         credibility,

#                     "similarity":
#                         round(
#                             similarity * 100,
#                             2
#                         ),

#                     "analysis":
#                         contradiction,
#                 })

#         # =====================================
#         # NO EVIDENCE
#         # =====================================

#         if not evidence_pool:

#             return {

#                 "query":
#                     keywords,

#                 "verdict":
#                     "Inconclusive",

#                 "confidence":
#                     0,

#                 "top_sources":
#                     []
#             }

#         # =====================================
#         # RANKING
#         # =====================================

#         ranked_sources = rank_articles(
#             evidence_pool
#         )

#         ranked_sources = ranked_sources[:3]

#         # =====================================
#         # VERDICT
#         # =====================================

#         verdict = generate_verdict(
#             ranked_sources
#         )

#         print(
#             "\nFINAL VERDICT:"
#         )

#         print(verdict)

#         # =====================================
#         # RESPONSE
#         # =====================================

#         return {

#             "query":
#                 keywords,

#             "verdict":
#                 verdict["verdict"],

#             "confidence":
#                 verdict["confidence"],

#             "top_sources":
#                 ranked_sources
#         }

#     except Exception as e:

#         import traceback

#         traceback.print_exc()

#         print(
#             "\nFULL ERROR:",
#             e
#         )

#         return {

#             "query":
#                 "",

#             "verdict":
#                 "System Error",

#             "confidence":
#                 0,

#             "top_sources":
#                 []
#         }



from fastapi import APIRouter
from pydantic import BaseModel

from services.extractor import (
    extract_keywords
)

from services.query_expansion import (
    expand_query
)

from services.news_search import (
    search_news
)

from services.wikipedia_search import (
    search_wikipedia
)

from services.similarity import (
    calculate_similarity
)

from services.contradiction import (
    detect_contradiction
)

from services.credibility import (
    get_source_credibility
)

from services.ranking import (
    rank_articles
)

from services.verdict import (
    generate_verdict
)

router = APIRouter()


class AnalyzeRequest(BaseModel):

    text: str


@router.post("/analyze")
async def analyze_news(
    data: AnalyzeRequest
):

    try:

        print(
            "\n=== ANALYSIS STARTED ==="
        )

        # =====================================
        # QUERY EXTRACTION
        # =====================================

        keywords = extract_keywords(
            data.text
        )

        queries = expand_query(
            keywords
        )

        print(
            "QUERY:",
            keywords
        )

        evidence_pool = []

        seen_urls = set()

        # =====================================
        # DDGS SEARCH FIRST
        # =====================================

        print(
            "\nSearching DDGS..."
        )

        for query in queries:

            news_data = search_news(
                query
            )

            articles = news_data.get(
                "articles",
                []
            )

            print(
                "DDGS:",
                len(articles)
            )

            for article in articles[:3]:

                title = article.get(
                    "title",
                    ""
                )

                description = article.get(
                    "description",
                    ""
                )

                content = article.get(
                    "content",
                    ""
                )

                url = article.get(
                    "url",
                    ""
                )

                if not url:

                    continue

                normalized_url = (
                    url.split("?")[0]
                )

                if normalized_url in seen_urls:

                    continue

                seen_urls.add(
                    normalized_url
                )

                combined_text = f"""

                {title}

                {description}

                {content}

                """[:500]

                if not combined_text.strip():

                    continue

                # =====================================
                # SIMILARITY
                # =====================================

                similarity = (
                    calculate_similarity(

                        data.text,

                        combined_text
                    )
                )

                if similarity < 0.30:

                    continue

                # =====================================
                # SOURCE NAME
                # =====================================

                source_name = article.get(
                    "source",
                    {}
                ).get(
                    "name",
                    "Unknown"
                )

                credibility = (
                    get_source_credibility(
                        source_name
                    )
                )

                # =====================================
                # FILTER LOW QUALITY SOURCES
                # =====================================

                if credibility < 75:

                    continue

                # =====================================
                # CONTRADICTION ANALYSIS
                # =====================================

                contradiction = (
                    detect_contradiction(

                        data.text,

                        combined_text,

                        similarity * 100,

                        credibility
                    )
                )

                evidence_pool.append({

                    "source_type":
                        "news",

                    "name":
                        source_name,

                    "title":
                        title,

                    "content":
                        combined_text,

                    "url":
                        url,

                    "credibility":
                        credibility,

                    "similarity":
                        round(
                            similarity * 100,
                            2
                        ),

                    "analysis":
                        contradiction,
                })

        # =====================================
        # FALLBACK TO WIKIPEDIA
        # =====================================

        if not evidence_pool:

            print(
                "\nFallback Wikipedia Search..."
            )

            wiki = search_wikipedia(
                keywords
            )

            if wiki:

                wiki_content = (
                    wiki["content"][:500]
                )

                similarity = (
                    calculate_similarity(

                        data.text,

                        wiki_content
                    )
                )

                credibility = 85

                contradiction = (
                    detect_contradiction(

                        data.text,

                        wiki_content,

                        similarity * 100,

                        credibility
                    )
                )

                if similarity >= 0.30:

                    evidence_pool.append({

                        "source_type":
                            "wikipedia",

                        "name":
                            "Wikipedia",

                        "title":
                            wiki["title"],

                        "content":
                            wiki_content,

                        "url":
                            wiki["url"],

                        "credibility":
                            credibility,

                        "similarity":
                            round(
                                similarity * 100,
                                2
                            ),

                        "analysis":
                            contradiction,
                    })

        # =====================================
        # NO EVIDENCE
        # =====================================

        if not evidence_pool:

            return {

                "query":
                    keywords,

                "verdict":
                    "Inconclusive",

                "confidence":
                    0,

                "top_sources":
                    []
            }

        # =====================================
        # RANKING
        # =====================================

        ranked_sources = rank_articles(
            evidence_pool
        )

        ranked_sources = ranked_sources[:3]

        # =====================================
        # VERDICT
        # =====================================

        verdict = generate_verdict(
            ranked_sources
        )

        print(
            "\nFINAL VERDICT:"
        )

        print(verdict)

        # =====================================
        # RESPONSE
        # =====================================

        return {

            "query":
                keywords,

            "verdict":
                verdict["verdict"],

            "confidence":
                verdict["confidence"],

            "top_sources":
                ranked_sources
        }

    except Exception as e:

        import traceback

        traceback.print_exc()

        print(
            "\nFULL ERROR:",
            e
        )

        return {

            "query":
                "",

            "verdict":
                "System Error",

            "confidence":
                0,

            "top_sources":
                []
        }