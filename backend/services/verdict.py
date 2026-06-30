def generate_verdict(sources):

    if not sources:

        return {

            "verdict":
                "Inconclusive",

            "confidence":
                0
        }

    support = 0

    contradiction = 0

    total = 0

    for source in sources:

        label = source[
            "analysis"
        ]["label"]

        score = source[
            "analysis"
        ]["score"]

        total += score

        if label == (
            "supports claim"
        ):

            support += 1

        elif label == (
            "contradicts claim"
        ):

            contradiction += 1

    confidence = round(

        total / len(sources),

        2
    )

    if contradiction >= 1:

        verdict = (
            "Contradicted"
        )

    elif support >= 1:

        verdict = (
            "Validated"
        )

    else:

        verdict = (
            "Inconclusive"
        )

    return {

        "verdict":
            verdict,

        "confidence":
            confidence
    }