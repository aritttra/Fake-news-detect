from models.model_loader import (
    nli_pipeline
)


def detect_contradiction(

    claim,

    evidence,

    similarity=0,

    credibility=0
):
    
    evidence = evidence[:500]
    claim = claim[:300]

    try:

        result = nli_pipeline(

            {

                "text":
                    claim,

                "text_pair":
                    evidence
            }
        )

        best = result[0]

        label = best[
            "label"
        ]

        score = round(

            best["score"] * 100,

            2
        )

        # =====================================
        # CORRECT LABEL MAPPING
        # =====================================

        if label == "LABEL_2":

            final_label = (
                "supports claim"
            )

        elif label == "LABEL_0":

            final_label = (
                "contradicts claim"
            )

        else:

            final_label = (
                "neutral"
            )

        # =====================================
        # SEMANTIC FALLBACK
        # =====================================

        if (

            final_label == "neutral"

            and similarity >= 60

            and credibility >= 80
        ):

            final_label = (
                "supports claim"
            )

            score = 88

        return {

            "label":
                final_label,

            "score":
                score
        }

    except Exception as e:

        print(
            "NLI ERROR:",
            e
        )

        return {

            "label":
                "neutral",

            "score":
                50
        }