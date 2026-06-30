import spacy

nlp = spacy.load(
    "en_core_web_sm"
)


def extract_keywords(text):

    doc = nlp(text)

    keywords = []

    # =====================================
    # ENTITIES
    # =====================================

    for ent in doc.ents:

        keywords.append(
            ent.text
        )

    # =====================================
    # IMPORTANT TOKENS
    # =====================================

    for token in doc:

        if token.pos_ in [

            "PROPN",

            "NOUN",

            "VERB",

            "ADJ"
        ]:

            if (

                not token.is_stop

                and len(token.text) > 2
            ):

                keywords.append(
                    token.text
                )

    # =====================================
    # REMOVE DUPLICATES
    # =====================================

    keywords = list(
        dict.fromkeys(keywords)
    )

    # =====================================
    # FALLBACK
    # =====================================

    if len(keywords) < 3:

        return text

    return " ".join(
        keywords[:10]
    )