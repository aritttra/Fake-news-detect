def rank_articles(evidence_list):

    ranked = []

    for item in evidence_list:

        similarity = item.get(
            "similarity",
            0
        )

        credibility = item.get(
            "credibility",
            50
        )

        analysis = item.get(
            "analysis",
            {}
        )

        score = analysis.get(
            "score",
            50
        )

        source_type = item.get(
            "source_type",
            ""
        )

        # =====================================
        # DDGS PRIORITY BOOST
        # =====================================

        source_bonus = 0

        if source_type == "news":

            source_bonus = 15

        elif source_type == "wikipedia":

            source_bonus = -5

        # =====================================
        # FINAL SCORE
        # =====================================

        final_rank = (

            similarity * 0.45 +

            credibility * 0.30 +

            score * 0.20 +

            source_bonus
        )

        item["rank_score"] = round(
            final_rank,
            2
        )

        ranked.append(item)

    ranked.sort(

        key=lambda x: x[
            "rank_score"
        ],

        reverse=True
    )

    return ranked