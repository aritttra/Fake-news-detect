SOURCE_CREDIBILITY = {

    "reuters": 98,

    "bbc": 96,

    "apnews": 97,

    "nasa": 99,

    "who": 99,

    "wikipedia": 85,

    "nytimes": 94,

    "guardian": 90,

    "nature": 99,

    "science": 99,

    "isro": 95,

    "gov": 95,

    "edu": 90,

    "techcrunch": 80,

    "theverge": 80,

    "wired": 78,
}


def get_source_credibility(

    source_name
):

    if not source_name:

        return 50

    source_name = (
        source_name.lower()
    )

    for source, score in (
        SOURCE_CREDIBILITY.items()
    ):

        if source in source_name:

            return score

    return 50