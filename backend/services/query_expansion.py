def expand_query(keywords):

    suspicious_words = [

        "flat earth",

        "aliens",

        "tracking chips",

        "fake moon landing",

        "cure cancer",

        "5g",

        "hoax"
    ]

    lowered = keywords.lower()

    for word in suspicious_words:

        if word in lowered:

            return [

                f"{keywords} fact check"
            ]

    return [

        keywords
    ]